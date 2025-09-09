const { Marp } = require('@marp-team/marp-core');
const qrCodePlugin = require('./qr-code-plugin');
const listMarkerPlugin = require('./list-marker-plugin');
const listCoalescingPlugin = require('./list-coalescing-plugin');
const listItemSublinePlugin = require('./list-item-subline-plugin');

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