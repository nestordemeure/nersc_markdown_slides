const { Marp } = require('@marp-team/marp-core');
const QRCode = require('qrcode');

// --- QR Code Plugin ---
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

// --- List Marker Plugin ---
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

// --- List Coalescing Plugin ---
function listCoalescingPlugin(md) {
  md.core.ruler.push('list_coalescer', (state) => {
    const tokens = state.tokens;
    let i = 0;
    while (i < tokens.length - 1) {
      if (tokens[i].type === 'bullet_list_close' && tokens[i + 1].type === 'bullet_list_open') {
        const nextListStartLine = tokens[i + 1].map[0];
        let prevListEndLine = -1;
        for (let j = i - 1; j >= 0; j--) {
          if (tokens[j].map) {
            prevListEndLine = tokens[j].map[1];
            break;
          }
        }
        if (nextListStartLine === prevListEndLine) {
          tokens.splice(i, 2);
          if (i > 0) i--;
          continue;
        }
      }
      i++;
    }
    return true;
  });
}

// --- Plugin for sub-lines ---
function listItemSublinePlugin(md) {
  const rule = (state) => {
    let inListItem = false;
    for (const token of state.tokens) {
      if (token.type === 'list_item_open') inListItem = true;
      if (token.type === 'list_item_close') inListItem = false;
      if (inListItem && token.type === 'inline' && token.children) {
        const children = token.children;
        let subLineStartIndex = -1;
        for (let i = 0; i < children.length; i++) {
          if (children[i].type === 'softbreak') {
            subLineStartIndex = i + 1;
            break;
          }
        }
        if (subLineStartIndex !== -1) {
          const open = new state.Token('span_open', 'span', 1);
          open.attrSet('class', 'sub-line');
          const close = new state.Token('span_close', 'span', -1);
          children.push(close);
          children.splice(subLineStartIndex, 0, open);
        }
      }
    }
  };
  md.core.ruler.push('list_item_subline', rule);
}

module.exports = (opts) => {
  const marp = new Marp(opts);

  // Add all custom plugins
  marp.use(qrCodePlugin);
  marp.use(listMarkerPlugin);
  marp.use(listCoalescingPlugin);
  marp.use(listItemSublinePlugin);

  // --- Render override ---
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