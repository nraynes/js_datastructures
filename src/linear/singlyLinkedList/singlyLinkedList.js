const SLLNode = require('./singlyLinkedListNode');
const compare = require('../../utils/compare');

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
  #size = 0;
  constructor(items, maxSize, arrayLiteral) {
    if (maxSize && typeof maxSize !== 'number') throw 'maxSize must be a number!';
    if (arrayLiteral && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemsIsArray = Array.isArray(items);
    const recurse = (i, max) => {
      this.#size++
      if (!max || i+1 <= maxSize) {
        if (i+1 < items.length) return new SLLNode(items[i], recurse(i+1, max));
        return new SLLNode(items[i]);
      }
    }
    this.#size = items ? 1 : 0
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
  addToTail(item, arrayLiteral) {
    if (arrayLiteral && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemIsArray = Array.isArray(item);
    let j = 0;
    const recurse = (node, i) => {
      if (node.next) {
        recurse(node.next, i+1);
      } else if (!this.#max || i < this.#max) {
        if (itemIsArray && !arrayLiteral && item.length > 0) {
          if (j < item.length) {
            node.next = new SLLNode(item[j])
            j++;
            recurse(node.next, i+1)
            this.#size++
          }
        } else {
          node.next = new SLLNode(item);
          this.#size++
        }
      }
    }
    if (this.#head) {
      recurse(this.#head, 1);
    } else {
      this.#head = new SLLNode(item);
      this.#size++
    }
  }

  // Get the size of the list.
  size() {
    return this.#size;
  }

  // Add a node to the beginning of the list.
  addToHead(item, arrayLiteral) {
    if (arrayLiteral && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemIsArray = Array.isArray(item);
    let j = itemIsArray && !arrayLiteral && item.length > 0 ? item.length : 0;
    if (!this.#max || this.size() < this.#max) {
      if (j) {
        const recurse = (node) => {
          if (j) {
            node.next = new SLLNode(item[j-1]);
            j--;
            recurse(node.next);
            this.#size++;
          } else {
            node.next = this.#head;
          }
        }
        const newHead = new SLLNode(item[j-1])
        j--;
        recurse(newHead);
        this.#head = newHead;
      } else {
        const temp = new SLLNode(item, this.#head);
        this.#head = temp;
      }
      this.#size++
    }
  }

  // Get the maximum size of the list if there is one.
  getMax() {
    return this.#max || null;
  }

  // Set the maximum size of the list. Shorten the list to this max size if neccessary.
  setMax(maxSize) {
    if (maxSize && typeof maxSize !== 'number') throw 'maxSize must be a number!';
    this.#max = maxSize || 0;
    if (this.#max && this.#size > this.#max) {
      const recurse = (node, i) => {
        if (node.next && i >= this.#max) {
          node.next = null;
        } else {
          recurse(node.next, i+1)
        }
      }
      recurse(this.#head, 1);
      this.#size = this.#max;
    }
  }

  // Check if the list is empty.
  isEmpty() {
    return this.#head === null;
  }

  // Check if the list is full if there is a maximum size set.
  isFull() {
    return this.#max ? this.#size >= this.#max : null
  }

  // Get the index number(s) of the items requested if they exist.
  contains(data, extensiveComparison) {
    if (extensiveComparison !== undefined && typeof extensiveComparison !== 'boolean') throw 'extensiveComparison must be a boolean!';
    let retVal = [];
    const recurse = (node, i) => {
      if ((extensiveComparison && compare(data, node.data)) || (!extensiveComparison && data === node.data)) {
        retVal.push(i)
      }
      if (node.next) recurse(node.next, i+1);
    };
    recurse(this.#head, 0)
    return retVal.length ? retVal.length > 1 ? retVal : retVal[0] : null;
  }

  // Get the data of the node at the index number requested.
  getAt(index) {
    if (index && typeof index !== 'number') throw 'index must be a number!';
    if (index < 0 || index >= this.#size) return null;
    const recurse = (node, i) => {
      if (i === index) {
        return node.data;
      } else if (node.next) {
        return recurse(node.next, i+1)
      }
      return null;
    };
    return this.#head ? recurse(this.#head, 0) : null;
  }

  // Reverse the order of the list.
  reverse() {
    if (this.#head && this.#size > 1) {
      let newHead = null;
      const updateNewHead = (node) => {
        const newNode = {...node};
        newNode.next = newHead;
        newHead = newNode;
      }
      const recurse = (node) => {
        updateNewHead(node);
        if (node.next) recurse(node.next)
      };
      recurse(this.#head)
      this.#head = newHead;
    }
  }

  // Insert node at a specific index.
  insertAt(index, data, arrayLiteral) {

  }

  // Remove node at a specific index.
  removeAt(index) {

  }

  // Remove node from the tail.
  removeTail() {

  }

  // Remove node from the head.
  removeHead() {

  }

  // Remove all nodes containing specific data.
  removeData(data, extensiveComparison) {

  }
}

module.exports = SLL;
