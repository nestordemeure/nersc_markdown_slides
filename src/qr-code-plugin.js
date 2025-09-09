// Plugin that generates QR codes from image syntax when alt text starts with "qr"
const QRCode = require('qrcode');

function qrCodePlugin(md) {
  const originalImageRender = md.renderer.rules.image || function (tokens, idx, options, env, renderer) {
    return renderer.renderToken(tokens, idx, options);
  };
  md.renderer.rules.image = function (tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    const alt = token.content || '';
    const src = token.attrGet('src'); // The original URL for the link
    if (alt.toLowerCase().startsWith('qr')) {
      try {
        const qrCode = QRCode.create(src, { errorCorrectionLevel: 'M' });
        const modules = qrCode.modules;
        const size = modules.size;
        const margin = 0;
        const cellSize = 4;
        const svgSize = (size + 2 * margin) * cellSize;
        let svgPath = '';
        for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            if (modules.get(x, y)) {
              const px = (margin + x) * cellSize;
              const py = (margin + y) * cellSize;
              svgPath += `M${px},${py}h${cellSize}v${cellSize}h-${cellSize}z`;
            }
          }
        }
        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}">
          <path d="${svgPath}" fill="#00313C"/>
        </svg>`;
        const dataUrl = 'data:image/svg+xml;base64,' + Buffer.from(svgString).toString('base64');
        const sizeMatch = alt.match(/width:(\d+(?:\.\d+)?(?:px|%|em|rem|cm|mm|in)?)/i);
        const heightMatch = alt.match(/height:(\d+(?:\.\d+)?(?:px|%|em|rem|cm|mm|in)?)/i);
        const wMatch = alt.match(/w:(\d+)/i);
        const hMatch = alt.match(/h:(\d+)/i);
        const percentMatch = alt.match(/(\d+(?:\.\d+)?)%/);
        const altMatch = alt.match(/alt:([^)]+)/i);
        let newAlt = altMatch ? altMatch[1].trim() : `QR Code: ${src}`;
        if (sizeMatch) newAlt = `width:${sizeMatch[1]} ${newAlt}`;
        if (heightMatch) newAlt = `height:${heightMatch[1]} ${newAlt}`;
        if (wMatch) newAlt = `w:${wMatch[1]} ${newAlt}`;
        if (hMatch) newAlt = `h:${hMatch[1]} ${newAlt}`;
        if (percentMatch && !sizeMatch && !wMatch) newAlt = `${percentMatch[1]}% ${newAlt}`;

        // Update the token to render the QR code image
        token.content = newAlt;
        token.attrSet('src', dataUrl);

        // Get the generated <img> tag HTML
        const imgTag = originalImageRender(tokens, idx, options, env, renderer);

        // Wrap the <img> tag in an <a> tag to make it clickable
        return `<a href="${src}" target="_blank" rel="noopener noreferrer">${imgTag}</a>`;

      } catch (error) {
        console.warn(`QR Code generation failed for "${src}":`, error.message);
        return originalImageRender(tokens, idx, options, env, renderer);
      }
    }
    return originalImageRender(tokens, idx, options, env, renderer);
  };
}

module.exports = qrCodePlugin;