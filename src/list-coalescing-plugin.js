// Plugin that merges adjacent bullet lists that are visually continuous
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

module.exports = listCoalescingPlugin;