class DLLNode {
  constructor(data, prev, next) {
    if (next && !(next instanceof DLLNode)) throw 'next needs to be an instance of DLLNode!';
    if (prev && !(prev instanceof DLLNode)) throw 'prev needs to be an instance of DLLNode!';
    this.data = data;
    this.prev = prev || null
    this.next = next || null;
  }
}

module.exports = DLLNode;