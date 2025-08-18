const { Marp } = require('@marp-team/marp-core');
const QRCode = require('qrcode');

// Custom markdown-it plugin to handle QR code generation
function qrCodePlugin(md) {
  // Store the original image renderer
  const originalImageRender = md.renderer.rules.image || function(tokens, idx, options, env, renderer) {
    return renderer.renderToken(tokens, idx, options);
  };

  // Override image renderer to handle QR codes
  md.renderer.rules.image = function(tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    const alt = token.content || '';
    const src = token.attrGet('src');
    
    // Check if this is a QR code image (alt text starts with 'qr')
    if (alt.toLowerCase().startsWith('qr')) {
      try {
        // Generate QR code synchronously
        const qrCode = QRCode.create(src, {
          errorCorrectionLevel: 'M'
        });
        
        // Create SVG manually from QR code modules
        const modules = qrCode.modules;
        const size = modules.size;
        const margin = 0; // No white border
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
        
        // Convert SVG to data URL
        const dataUrl = 'data:image/svg+xml;base64,' + Buffer.from(svgString).toString('base64');

        // Parse size and other attributes from alt text
        const sizeMatch = alt.match(/width:(\d+(?:\.\d+)?(?:px|%|em|rem|cm|mm|in)?)/i);
        const heightMatch = alt.match(/height:(\d+(?:\.\d+)?(?:px|%|em|rem|cm|mm|in)?)/i);
        const wMatch = alt.match(/w:(\d+)/i);
        const hMatch = alt.match(/h:(\d+)/i);
        const percentMatch = alt.match(/(\d+(?:\.\d+)?)%/);
        const altMatch = alt.match(/alt:([^)]+)/i);

        // Build new alt text
        let newAlt = altMatch ? altMatch[1].trim() : `QR Code: ${src}`;
        
        // Add size attributes to new alt
        if (sizeMatch) newAlt = `width:${sizeMatch[1]} ${newAlt}`;
        if (heightMatch) newAlt = `height:${heightMatch[1]} ${newAlt}`;
        if (wMatch) newAlt = `w:${wMatch[1]} ${newAlt}`;
        if (hMatch) newAlt = `h:${hMatch[1]} ${newAlt}`;
        if (percentMatch && !sizeMatch && !wMatch) newAlt = `${percentMatch[1]}% ${newAlt}`;

        // Update token with QR code data URL
        token.content = newAlt;
        token.attrSet('src', dataUrl);

        return originalImageRender(tokens, idx, options, env, renderer);
      } catch (error) {
        console.warn(`QR Code generation failed for "${src}":`, error.message);
        // Fallback to original rendering
        return originalImageRender(tokens, idx, options, env, renderer);
      }
    }
    
    // Not a QR code, use original renderer
    return originalImageRender(tokens, idx, options, env, renderer);
  };
}

// Custom markdown-it plugin to preserve list marker types
function listMarkerPlugin(md) {
  // Store the original bullet_list_open renderer
  const originalBulletListOpen = md.renderer.rules.bullet_list_open || function(tokens, idx, options, env, renderer) {
    return renderer.renderToken(tokens, idx, options);
  };

  // Override bullet_list_open to capture the marker
  md.renderer.rules.bullet_list_open = function(tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    // Store the marker on the token for later use
    this._currentListMarker = token.markup;
    return originalBulletListOpen(tokens, idx, options, env, renderer);
  };

  // Store the original list_item_open renderer
  const originalListItemOpen = md.renderer.rules.list_item_open || function(tokens, idx, options, env, renderer) {
    return renderer.renderToken(tokens, idx, options);
  };

  // Override list_item_open to add the marker data attribute
  md.renderer.rules.list_item_open = function(tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    if (this._currentListMarker) {
      token.attrSet('data-marker', this._currentListMarker);
    }
    return originalListItemOpen(tokens, idx, options, env, renderer);
  };
}

module.exports = (opts) => {
  const marp = new Marp(opts);
  
  // Add our custom plugins
  marp.use(qrCodePlugin);
  marp.use(listMarkerPlugin);
  
  // Override Marp's render method to remove fragment attributes
  const originalRender = marp.render.bind(marp);
  
  marp.render = function(markdown, env) {
    const result = originalRender(markdown, env);
    
    // Remove data-marpit-fragment and data-marpit-fragments attributes from HTML
    if (result.html) {
      result.html = result.html
        .replace(/\s+data-marpit-fragment="[^"]*"/g, '')
        .replace(/\s+data-marpit-fragments="[^"]*"/g, '');
    }
    
    return result;
  };
  
  return marp;
};