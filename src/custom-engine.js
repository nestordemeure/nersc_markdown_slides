const { Marp } = require('@marp-team/marp-core');

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
  
  // Add our custom plugin to preserve list markers
  marp.use(listMarkerPlugin);
  
  return marp;
};