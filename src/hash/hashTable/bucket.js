const BucketNode = require('./bucketNode');

class Bucket {
  constructor(key, value) {
    this.head = key && typeof key === 'string' && value ? new BucketNode(key, value) : null;
  }
  
  add(key, value) {
    if (typeof key !== 'string') return;
    const recurse = (node) => {
      if (node.key === key) return true;
      if (node.next) {
        return recurse(node.next);
      } else {
        node.next = new BucketNode(key, value)
      }
    }
    if (this.head) {
      return recurse(this.head);
    }
    this.head = new BucketNode(key, value);
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
    if (typeof key !== 'string') return false;
    const recurse = (node) => {
      if (node.next) {
        if (node.next.key === key) {
          node.next = node.next.next;
          return true;
        }
        return recurse(node.next);
      }
      return false;
    }
    if (this.head) {
      if (this.head.key === key) {
        this.head = this.head.next || null;
        return true;
      }
      return recurse(this.head);
    }
    return false;
  }
}

module.exports = Bucket;