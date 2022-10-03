const flat = (structure, end = 0) => {
  if (!structure) return null;
  const clone = {...structure};
  const recurse = (node, count = 1) => {
    if (node.next && count < end) {
      recurse(node.next, count+1);
    } else {
      node.next = null;
    }
  }
  recurse(clone);
  return clone;
};

module.exports = flat;