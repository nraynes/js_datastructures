class SLLNode {
  constructor(data, next) {
    if (next && !(next instanceof SLLNode)) throw 'next needs to be an instance of SLLNode!';
    this.data = data;
    this.next = next || null;
  }
}

module.exports = SLLNode;