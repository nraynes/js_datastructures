/*
  * A deque data structure class implementation.
  * A deque is a type of data structure that follows the FIFO (First In First Out) concept.
  * A deque is meant to to allow for items to be added to the back of the deque while items retrieved
  * are retrieved from the front of the deque. The item that was added first will be the next item in the deque.
  * Common methods in a deque are enqueueFront, enqueueRear, dequeueRear, dequeueFront, peekRear, peakFront, size,
  * isEmpty, and isFull for a deque with a maximum size. You can also have a reverse method to reverse the deque order.
  * This implementation includes all of these.
  * You can read more about deques at https://www.programiz.com/dsa/deque or at
  * https://www.geeksforgeeks.org/deque-set-1-introduction-applications/
*/
class Deque {
  #list = [];
  #max = 0;
  constructor(items, maxSize, arrayLiteral) {
    if (maxSize && typeof maxSize !== 'number') throw 'maxSize must be a number!';
    if (arrayLiteral !== undefined && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemsIsArray = Array.isArray(items);
    this.#list = items || itemsIsArray
      ? itemsIsArray && !arrayLiteral && items.length > 0
        ? maxSize
          ? (items.filter((item, i) => { if (i < maxSize) return item; })).reverse()
          : [...items].reverse()
        : [items]
      : []
    this.#max = maxSize || 0;
  }

  // Gets the whole deque and returns it.
  getDeque() {
    return this.#list;
  }

  // Add an item to the deque in the front.
  enqueueFront(item, arrayLiteral) {
    if (arrayLiteral !== undefined && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemIsArray = Array.isArray(item);
    if ((item || itemIsArray) && (!this.#max || this.#list.length < this.#max)) {
      if (itemIsArray && !arrayLiteral && item.length > 0) {
        for (let i = 0; i < item.length; i++) {
          this.#list.unshift(item[i]);
        }
      } else {
        this.#list.unshift(item)
      }
    }
  }

  // Add an item to the deque in the rear.
  enqueueRear(item, arrayLiteral) {
    if (arrayLiteral !== undefined && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemIsArray = Array.isArray(item);
    if ((item || itemIsArray) && (!this.#max || this.#list.length < this.#max)) {
      if (itemIsArray && !arrayLiteral && item.length > 0) {
        for (let i = 0; i < item.length; i++) {
          this.#list.push(item[i]);
        }
      } else {
        this.#list.push(item)
      }
    }
  }

  // Remove the next item in the deque from the rear and return it.
  dequeueRear() {
    if (this.#list.length) {
      return this.#list.pop();
    }
    return null;
  }

  // Remove the next item in the deque from the front and return it.
  dequeueFront() {
    if (this.#list.length) {      
      return this.#list.shift();
    }
    return null;
  }

  // Get the next item in the deque from the rear.
  peekRear() {
    return this.#list[this.#list.length-1] || null;
  }

  // Get the next item in the deque from the front.
  peekFront() {
    return this.#list[0] || null;
  }

  // Get the current size of the deque.
  size() {
    return this.#list.length;
  }

  // Check to see if the deque is empty.
  isEmpty() {
    return this.#list.length === 0;
  }

  // Check to see if the deque is full if a maximum size is set.
  isFull() {
    if (this.#max) {
      if (this.#list.length < this.#max) {
        return false;
      }
      return true;
    }
    return null;
  }

  // Get the maximum size if there is one.
  getMax() {
    return this.#max || null
  }

  // Set the maximum size.
  setMax(maxSize) {
    if (maxSize && typeof maxSize !== 'number') throw 'maxSize must be a number!';
    this.#max = maxSize;
    if (this.#max && this.#list.length >= this.#max) {
      this.#list = this.#list.filter((item, i) => {
        if (i < this.#max) return item;
      })
    }
  }

  // Reverse the order of the deque.
  reverse() {
    this.#list = this.#list.reverse()
  }
}

module.exports = Deque;
