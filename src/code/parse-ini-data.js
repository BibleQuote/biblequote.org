export default data => {
  const regex = {
    section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
    param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
    comment: /^\s*;.*$/
  };
  const value = {};
  let section = null;
  const lines = data.split(/[\r\n]+/);

  lines.forEach(line => {
    if (regex.comment.test(line)) {
      return;
    }
    else if (regex.param.test(line)) {
      const match = line.match(regex.param);
      if (section) {
        value[section][match[1]] = match[2];
      }
      else {
        value[match[1]] = match[2];
      }
    }
    else if (regex.section.test(line)) {
      const match = line.match(regex.section);
      value[match[1]] = {};
      section = match[1];
    }
    else if (line.length === 0 && section) {
      section = null;
    };
  });

  return value;
}