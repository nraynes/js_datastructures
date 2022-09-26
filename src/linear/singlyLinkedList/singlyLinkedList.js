const SLLNode = require('./singlyLinkedListNode');

/*
  * A singly linked list data structure class implementation.
  * A singly linked list is a data structure in which a parent node contains some data and a pointer to the next
  * node in the list. Each node in the list has a pointer to the next node along with some data.
  * You can traverse a singly linked list by using either an index or an item itself.
  * Singly linked lists can support operations such as addToTail, addToHead, insertAt, removeAt, removeHead,
  * removeTail, removeData, getAt, contains, isEmpty, isFull, size, getList, setMax, getMax and reverse.
  * To learn more about singly linked lists go to https://www.geeksforgeeks.org/implementation-linkedlist-javascript/ or
  * https://www.educative.io/answers/what-is-a-singly-linked-list.
*/
class SLL {
  #max = 0;
  #head = null;
  constructor(items, maxSize, arrayLiteral) {
    if (maxSize && typeof maxSize !== 'number') throw 'maxSize must be a number!';
    if (arrayLiteral && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemsIsArray = Array.isArray(items);
    const recurse = (i, max = false) => {
      if (i+1 < items.length && (!max || i+1 < maxSize)) return new SLLNode(items[i], recurse(i+1, max))
      return new SLLNode(items[i])
    }
    this.#head = items || itemsIsArray
      ? itemsIsArray && !arrayLiteral && items.length > 0
        ? maxSize
          ? new SLLNode(items[0], recurse(1, true))
          : new SLLNode(items[0], recurse(1))
        : new SLLNode(items)
      : null
    this.#max = maxSize || 0;
  }

  // Returns the whole singly linked list.
  getList() {
    return this.#head;
  }

  // Add a node to the very end of the list.
  addToTail(item) {
    const recurse = (node, i) => {
      if (node.next) {
        recurse(node.next, i+1);
      } else {
        if (!this.#max || i < this.#max) {
          node.next = new SLLNode(item);
        }
      }
    }
    if (this.#head) {
      recurse(this.#head, 1);
    } else {
      this.#head = new SLLNode(item);
    }
  }

  // Get the size of the list.
  size() {
    const recurse = (node, i) => (node.next ? recurse(node.next, i+1) : i);
    return this.#head ? recurse(this.#head, 1) : 0;
  }

  // Add a node to the beginning of the list.
  addToHead(item) {
    if (!this.#max || this.size() < this.#max) {
      const temp = new SLLNode(item, this.#head);
      this.#head = temp;
    }
  }
}

module.exports = SLL;
