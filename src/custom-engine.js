const { Marp } = require('@marp-team/marp-core');
const QRCode = require('qrcode');

// --- UNCHANGED: Your QR Code Plugin ---
function qrCodePlugin(md) {
  const originalImageRender = md.renderer.rules.image || function (tokens, idx, options, env, renderer) {
    return renderer.renderToken(tokens, idx, options);
  };
  md.renderer.rules.image = function (tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    const alt = token.content || '';
    const src = token.attrGet('src');
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
        token.content = newAlt;
        token.attrSet('src', dataUrl);
        return originalImageRender(tokens, idx, options, env, renderer);
      } catch (error) {
        console.warn(`QR Code generation failed for "${src}":`, error.message);
        return originalImageRender(tokens, idx, options, env, renderer);
      }
    }
    return originalImageRender(tokens, idx, options, env, renderer);
  };
}

// --- UNCHANGED: Your List Marker Plugin ---
function listMarkerPlugin(md) {
  const originalListItemOpen = md.renderer.rules.list_item_open || function (tokens, idx, options, env, renderer) {
    return renderer.renderToken(tokens, idx, options);
  };
  md.renderer.rules.list_item_open = function (tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    if (token.markup) {
      token.attrSet('data-marker', token.markup);
    }
    return originalListItemOpen(tokens, idx, options, env, renderer);
  };
}

// --- ✨ FIXED: Plugin to merge ONLY consecutive lists ---
function listCoalescingPlugin(md) {
  md.core.ruler.push('list_coalescer', (state) => {
    const tokens = state.tokens;
    let i = 0;
    while (i < tokens.length - 1) {
      // Find the pattern: a list closes and another immediately opens.
      if (tokens[i].type === 'bullet_list_close' && tokens[i + 1].type === 'bullet_list_open') {

        // --- Smart Check using Line Numbers ---
        // Get the starting line of the new list. The `map` property holds [startLine, endLine].
        const nextListStartLine = tokens[i + 1].map[0];

        // Find the ending line of the previous list by searching backwards for the last token with a line map.
        let prevListEndLine = -1;
        for (let j = i - 1; j >= 0; j--) {
          if (tokens[j].map) {
            // A token's map `endLine` is the line *after* its content.
            // This is exactly what we need to check for consecutiveness.
            prevListEndLine = tokens[j].map[1];
            break;
          }
        }

        // ONLY merge if the new list starts on the line right after the previous one ended.
        // This prevents merging across empty lines.
        if (nextListStartLine === prevListEndLine) {
          tokens.splice(i, 2); // Remove the close/open tokens
          if (i > 0) i--;      // Step back to re-evaluate in case of 3+ lists
          continue;            // Restart loop
        }
      }
      i++;
    }
    return true;
  });
}

module.exports = (opts) => {
  const marp = new Marp(opts);

  // Add all custom plugins
  marp.use(qrCodePlugin);
  marp.use(listMarkerPlugin);
  marp.use(listCoalescingPlugin); // ✨ Using the fixed version

  // --- UNCHANGED: Your render override ---
  const originalRender = marp.render.bind(marp);
  marp.render = function (markdown, env) {
    const result = originalRender(markdown, env);
    if (result.html) {
      result.html = result.html
        .replace(/\s+data-marpit-fragment="[^"]*"/g, '')
        .replace(/\s+data-marpit-fragments="[^"]*"/g, '');
    }
    return result;
  };

  return marp;
};