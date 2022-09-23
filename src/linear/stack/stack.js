class Stack {
  constructor(...items) {
    this.list = items || [];
  }

  push(item) {
    this.list.push(item);
  }

  pop() {
    this.list.pop()
  }

  top() {
    return this.list[this.list.length-1] || null
  }

  isEmpty() {
    return this.list.length === 0
  }

  size() {
    return this.list.length
  }
}

module.exports = Stack;
