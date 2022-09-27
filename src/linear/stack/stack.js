/*
  * A stack data structure class implementation.
  * A stack is a type of data structure that follows the LIFO (Last In First Out)
  * concept. An item that is added to the top of the stack is the first to be accessed
  * unless another item is placed on top of it. Common stack implementations use basic methods
  * like push, pop, peek, isEmpty, and size, however, reverse can also be used to reverse the order of the stack.
  * This stack implementation also includes the ability to set a maximum size and includes getters for private
  * variables so that the stack can't be manipulated by accessing the variables directly.
  * Learn more about stacks at https://www.javascripttutorial.net/javascript-stack/ or at
  * https://www.geeksforgeeks.org/implementation-stack-javascript/.
*/
class Stack {
  #list = [];
  #max = 0;
  constructor(items, maxSize, arrayLiteral) {
    if (maxSize && typeof maxSize !== 'number') throw 'maxSize must be a number!';
    if (arrayLiteral && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemsIsArray = Array.isArray(items);
    this.#list = items || itemsIsArray
      ? itemsIsArray && !arrayLiteral && items.length > 0
        ? maxSize
          ? items.filter((item, i) => { if (i < maxSize) return item; })
          : [...items]
        : [items]
      : []
    this.#max = maxSize || 0;
  }

  // Gets the whole stack and returns it.
  getStack() {
    return this.#list
  }
  
  // Add an item to the stack.
  push(item, arrayLiteral) {
    if (arrayLiteral && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemIsArray = Array.isArray(item);
    if ((item || itemIsArray) && (!this.#max || this.#list.length < this.#max)) {
      if (itemIsArray && !arrayLiteral && item.length > 0) {
        this.#list.push(...item)
      } else {
        this.#list.push(item)
      }
    }
  }

  // Remove the top item from the stack.
  pop() {
    return this.#list.pop()
  }

  // Get the top item from the stack.
  peek() {
    return this.#list[this.#list.length-1] || null
  }

  // Check if the stack is empty.
  isEmpty() {
    return this.#list.length === 0
  }

  // Check if the stack is full if a maximum size is set.
  isFull() {
    if (this.#max) {
      if (this.#list.length < this.#max) {
        return false;
      }
      return true;
    }
    return null;
  }

  // Get the maximum size of the stack if there is one.
  getMax() {
    return this.#max || null
  }

  // Set the maximum size of the stack.
  setMax(maxSize) {
    if (maxSize && typeof maxSize !== 'number') throw 'maxSize must be a number!';
    this.#max = maxSize;
    if (this.#max && this.#list.length >= this.#max) {
      this.#list = this.#list.filter((item, i) => {
        if (i < this.#max) return item;
      })
    }
  }

  // Get the size of the stack.
  size() {
    return this.#list.length
  }

  // Reverse the order of the stack.
  reverse() {
    this.#list = this.#list.reverse()
  }
}

module.exports = Stack;
