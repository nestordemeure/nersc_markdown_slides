// Plugin that adds data-marker attributes to list items for custom styling
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

module.exports = listMarkerPlugin;