const Node = require('./bucketNode');

class Bucket {
  constructor(key, value) {
    this.head = key && typeof key === 'string' && value ? new Node(key, value) : null;
  }
  
  add(key, value) {
    if (typeof key !== 'string') return;
    const recurse = (node) => {
      if (node.next) {
        if (node.key === key) return true;
        recurse(node.next);
      } else {
        node.next = new Node(key, value)
      }
    }
    if (this.head) {
      return recurse(this.head);
    }
    this.head = new Node(key, value);
  }
  
  find(key) {
    if (typeof key !== 'string') return null;
    const recurse = (node) => {
      if (node.key === key) {
        return node.value;
      }
			if (node.next) {
        return recurse(node.next);
      }
      return null;
    }
    return this.head ? recurse(this.head) : null;
  }
  
  remove(key) {
    if (typeof key !== 'string') return;
    const recurse = (node) => {
      if (node.key === key) {
        node = node.next;
        return true;
      } else if (node.next) {
        recurse(node.next);
      }
      return false;
    }
    if (this.head) {
      return recurse(this.head);
    }
    return false;
  }
}

module.exports = Bucket;
