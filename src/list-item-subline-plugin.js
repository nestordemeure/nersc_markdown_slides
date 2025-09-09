// Plugin that wraps text after soft breaks in list items with sub-line span elements
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

module.exports = listItemSublinePlugin;