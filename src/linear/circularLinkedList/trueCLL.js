const CLLNode = require('./circularLinkedListNode');
const compare = require('../../utils/compare');

/*
  * A circular linked list data structure class implementation.
  * This is an untested version that uses a reference to the the head on the tails next property.
  * It is the truest form of a circular linked list however jest which is the testing framework used for this package
  * is not able to deal with circular structures and so this version could not be fully tested. Use at your own risk.
  * A circular linked list is a data structure in which a parent node contains some data and a pointer to the next
  * node in the list. Each node in the list has a pointer to the next node along with some data, and the last node
  * points to the first node. This implementation does not include a reference to the head on the last node
  * because the next just loops back to the head if your at the end of the list. This way a reference doesn't have to
  * be updated every time an item is removed, updated, or added to the list.
  * This has the same time complexity and accomplishes the same task in javascript. Because private members cannot be
  * inherited, this class does not inherit from SLL.
  * You can traverse a circular linked list by using either an index or an item itself.
  * circular linked lists can support operations such as addToTail, addToHead, insertAt, removeAt, removeHead,
  * removeTail, removeData, getAt, contains, isEmpty, isFull, size, getList, setMax, getMax and reverse.
  * To learn more about circular linked lists go to https://www.geeksforgeeks.org/implementation-linkedlist-javascript/ or
  * https://www.educative.io/answers/what-is-a-circular-linked-list.
*/
class TrueCLL {
  #max = 0;
  #head = null;
  #size = 0;
  #tail = null;
  #working = null;
  constructor(items, maxSize, arrayLiteral) {
    if (maxSize && typeof maxSize !== 'number') throw 'maxSize must be a number!';
    if (arrayLiteral !== undefined && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemsIsArray = Array.isArray(items);
    const recurse = (i, max) => {
      this.#size++
      if (!max || i+1 <= maxSize) {
        if (i+1 < items.length) return new CLLNode(items[i], recurse(i+1, max));
        return new CLLNode(items[i]);
      }
    }
    const findTail = (node) => (node && node.next ? findTail(node.next) : node);
    this.#size = items ? 1 : 0
    this.#head = items || itemsIsArray
      ? itemsIsArray && !arrayLiteral && items.length > 0
        ? maxSize
          ? new CLLNode(items[0], recurse(1, true))
          : new CLLNode(items[0], recurse(1))
        : new CLLNode(items)
      : null
    this.#tail = findTail(this.#head)
    if (this.#tail) this.#tail.next = this.#head;
    this.#max = maxSize || 0;
    this.#working = this.#head;
  }

  // Traverse to the next node if there is one and return its data.
  next() {
    if (this.#working.next) {
      this.#working = this.#working.next;
    }
    return this.#working.data
  }

  // Get the current nodes data in the working list.
  current() {
    return this.#working.data
  }

  // Reset the working list back to the head.
  reset() {
    this.#working = this.#head;
  }

  // Getter method for the tail.
  getTail() {
    return this.#tail.data;
  }

  // Returns the whole circular linked list.
  getList() {
    const clonedHead = {...this.#head};
    const recurse = (node) => {
      if (node.next && node.next !== clonedHead) {
        recurse(node.next);
      } else {
        node.next = null;
      }
    }
    return clonedHead;
  }

  // Add a node to the very end of the list.
  addToTail(item, arrayLiteral) {
    if (arrayLiteral !== undefined && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemIsArray = Array.isArray(item);
    let j = 0;
    const recurse = (node, i) => {
      if (node.next && this.#tail !== node) {
        recurse(node.next, i+1);
      } else if (!this.#max || i < this.#max) {
        if (itemIsArray && !arrayLiteral && item.length > 0) {
          if (j < item.length) {
            node.next = new CLLNode(item[j])
            j++;
            recurse(node.next, i+1)
            this.#size++
          } else {
            this.#tail = node;
            this.#tail.next = this.#head;
          }
        } else {
          node.next = new CLLNode(item);
          this.#tail = node.next
          this.#tail.next = this.#head;
          this.#size++
        }
      }
    }
    if (this.#head) {
      recurse(this.#head, 1);
    } else {
      this.#head = new CLLNode(item);
      this.#tail = this.#head
      this.#size++
    }
  }

  // Get the size of the list.
  size() {
    return this.#size;
  }

  // Add a node to the beginning of the list.
  addToHead(item, arrayLiteral) {
    if (arrayLiteral !== undefined && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    const itemIsArray = Array.isArray(item);
    let j = itemIsArray && !arrayLiteral && item.length > 0 ? item.length : 0;
    if (!this.#max || this.size() < this.#max) {
      if (j) {
        const recurse = (node) => {
          if (j) {
            node.next = new CLLNode(item[j-1]);
            j--;
            recurse(node.next);
            this.#size++;
          } else {
            node.next = this.#head;
          }
        }
        const newHead = new CLLNode(item[j-1])
        j--;
        recurse(newHead);
        this.#head = newHead;
      } else {
        const temp = new CLLNode(item, this.#head);
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
        if (node.next  && this.#tail !== node && i >= this.#max) {
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
      if (node.next && this.#tail !== node) recurse(node.next, i+1);
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
      } else if (node.next && this.#tail !== node) {
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
        if (node.next && this.#tail !== node) recurse(node.next)
      };
      recurse(this.#head)
      this.#head = newHead;
    }
  }

  // Insert node at a specific index.
  insertAt(index, data, arrayLiteral) {
    if (index && typeof index !== 'number') throw 'index must be a number!';
    if (arrayLiteral !== undefined && typeof arrayLiteral !== 'boolean') throw 'arrayLiteral must be a boolean!';
    if (index > this.#size+1 || index < 0) return null;
    index++;
    const multiple = Array.isArray(data) && !arrayLiteral && data.length > 0
    let j = 0
    let temp;
    const recurse = (node, i, hold) => {
      if ((i+1 === index) && (!this.#max || this.#size < this.#max)) {
        if (!hold) temp = node.next && this.#tail !== node ? node.next : null;
        if (multiple) {
          this.#size++;
          const newNode = new CLLNode(data[j])
          if (j < data.length-1) {
            node.next = newNode;
            j++;
            recurse(node.next, i, true)
          } else {
            newNode.next = temp;
            node.next = newNode;
            if (!temp) this.#tail = node.next; this.#tail.next = this.#head;
          }
        } else {
          const newNode = new CLLNode(data)
          newNode.next = temp;
          node.next = newNode;
          if (!temp) this.#tail = node.next; this.#tail.next = this.#head;
          this.#size++;
        }
      } else {
        if (node.next && this.#tail !== node) recurse(node.next, i+1);
      }
    }
    const tempHead = new CLLNode();
    tempHead.next = this.#head 
    recurse(tempHead, 0)
    this.#head = tempHead.next
  }

  // Remove node at a specific index.
  removeAt(index) {
    if (index && typeof index !== 'number') throw 'index must be a number!';
    if (index < 0 || index > this.#size) return null;
    const recurse = (node, i) => {
      if (node.next && this.#tail !== node) {
        if (i+1 === index) {
          let temp = null;
          if (node.next.next) {
            temp = node.next.next;
          } else {
            this.#tail = node
            this.#tail.next = this.#head;
            this.#working = this.#head
          }
          const retVal = node.next.data;
          node.next = temp;
          this.#size--;
          return retVal;
        }
        return recurse(node.next, i+1);
      }
      return null;
    }
    if (this.#head && this.#head.next) {
      if (index === 0) {
        const retVal = this.#head.data
        this.#head = this.#head.next;
        this.#size--;
        return retVal;
      }
      return recurse(this.#head, 0);
    } else if (this.#head) {
      const retVal = this.#head.data
      this.#head = null;
      this.#tail = null;
      this.#size = 0;
      this.#working = this.#head
      return retVal;
    }
    return null;
  }

  // Remove node from the tail.
  removeTail() {
    let temp;
    if (this.#head && this.#head.next) {
      const recurse = (node) => {
        if (node.next && node.next.next && this.#tail !== node) {
          recurse(node.next)
        } else {
          temp = node.next.data;
          node.next = null;
          this.#tail = node
          this.#tail.next = this.#head;
          this.#working = this.#head
        }
      }
      recurse(this.#head);
      this.#size--;
      return temp;
    } else if (this.#head) {
      temp = this.#head.data;
      this.#head = null;
      this.#tail = null;
      this.#working = this.#head
      this.#size = 0;
      return temp;
    }
    return null;
  }

  // Remove node from the head.
  removeHead() {
    if (this.#head) {
      const headData = this.#head.data;
      this.#head = this.#head.next;
      this.#size--;
      return headData;
    }
    return null;
  }

  // Remove all nodes containing specific data.
  removeData(data, extensiveComparison) {
    if (extensiveComparison !== undefined && typeof extensiveComparison !== 'boolean') throw 'extensiveComparison must be a boolean!';
    let counter = 0;
    const recurse = (node) => {
      if (node.next && this.#tail !== node) {
        if ((extensiveComparison && compare(node.next.data, data)) || (!extensiveComparison && node.next.data === data)) {
          const temp =  node.next.next && this.#tail !== node.next ? node.next.next : null;
          if (!temp) {
            this.#tail = node;
            this.#tail.next = this.#head;
            this.#working = this.#head;
          }
          node.next = temp;
          counter++;
          this.#size--;
          recurse(node)
        } else {
          recurse(node.next);
        }
      }
    }
    if (this.#head && this.#head.next) {
      recurse(this.#head);
      if ((extensiveComparison && compare(this.#head.data, data)) || (!extensiveComparison && this.#head.data === data)) {
        const temp = this.#head.next && this.#tail !== this.#head ? this.#head.next : null;
        this.#head = temp;
        this.#size--;
        counter++;
      }
      return counter || null;
    } else if (this.#head && ((extensiveComparison && compare(this.#head.data, data)) || (!extensiveComparison && this.#head.data === data))) {
      this.#head = null;
      this.#size = 0;
      return 1;
    }
    return null;
  }
}

module.exports = TrueCLL;
