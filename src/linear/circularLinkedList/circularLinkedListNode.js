class CLLNode {
  constructor(data, next) {
    if (next && !(next instanceof CLLNode)) throw 'next needs to be an instance of CLLNode!';
    this.data = data;
    this.next = next || null;
  }
}

module.exports = CLLNode;