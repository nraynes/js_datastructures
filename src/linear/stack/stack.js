/*
  * A stack data structure class implementation.
  * A stack is a type of data structure that follows the LIFO (Last In First Out)
  * concept. An item that is added to the top of the stack is the first to be accessed
  * unless another item is placed on top of it. Common stack implementations use basic methods
  * like push, pop, top, isEmpty, and size, however, reverse can also be used to reverse the order of the stack.
  * Learn more about stacks at https://www.javascripttutorial.net/javascript-stack/ or at
  * https://www.geeksforgeeks.org/implementation-stack-javascript/.
*/
class Stack {
  constructor(...items) {
    this.list = items || [];
  }

  // Add an item to the stack.
  push(item) {
    this.list.push(item);
  }

  // Remove the top item from the stack.
  pop() {
    this.list.pop()
  }

  // Get the top item from the stack.
  top() {
    return this.list[this.list.length-1] || null
  }

  // Check if the stack is empty.
  isEmpty() {
    return this.list.length === 0
  }

  // Get the size of the stack.
  size() {
    return this.list.length
  }

  // Reverse the order of the stack.
  reverse() {
    this.list = this.list.reverse()
  }
}

module.exports = Stack;
