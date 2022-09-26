/*
  * A queue data structure class implementation.
  * A queue is a type of data structure that follows the FIFO (First In First Out) concept.
  * A queue is meant to to allow for items to be added to the back of the queue while items retrieved
  * are retrieved from the front of the queue. The item that was added first will be the next item in the queue.
  * Common methods in a queue are enqueue, dequeue, peek, size, isEmpty, and isFull for a queue with a maximum size.
  * You can also have a reverse method to reverse the queue order. This implementation includes all of these.
  * You can read more about queues at https://www.geeksforgeeks.org/queue-data-structure/ or at
  * https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm.
*/
class Queue {
  #list = [];
  #max = 0;
  constructor(items, maxSize, arrayLiteral) {
    if (maxSize && typeof maxSize !== 'number') throw 'maxSize must be a number!';
    if (arrayLiteral && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
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

  // Gets the whole queue and returns it.
  getQueue() {
    return this.#list;
  }

  // Add an item to the queue.
  enqueue(item, arrayLiteral) {
    if (arrayLiteral && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
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

  // Remove the next item in the queue and return it.
  dequeue() {
    if (this.#list.length) {
      const nextItem = this.#list[this.#list.length-1];
      this.#list.pop();
      return nextItem;
    }
    return null;
  }

  // Get the next item in the queue.
  peek() {
    return this.#list[this.#list.length-1] || null;
  }

  // Get the current size of the queue.
  size() {
    return this.#list.length;
  }

  // Check to see if the queue is empty.
  isEmpty() {
    return this.#list.length === 0;
  }

  // Check to see if the queue is full if a maximum size is set.
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

  // Reverse the order of the queue.
  reverse() {
    this.#list = this.#list.reverse()
  }
}

module.exports = Queue;
