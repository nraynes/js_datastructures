const BucketNode = require('./bucketNode');

class Bucket {
  constructor(key, value) {
    if (key && typeof key !== 'string') throw 'key must be a string!';
    this.head = key && value ? new BucketNode(key, value) : null;
  }
  
  add(key, value) {
    if (!key) return null;
    if (typeof key !== 'string') throw 'key must be a string!';
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
    if (!key) return null;
    if (typeof key !== 'string') throw 'key must be a string!';
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
    if (!key) return null;
    if (typeof key !== 'string') throw 'key must be a string!';
    const recurse = (node) => {
      if (node.next) {
        if (node.next.key === key) {
          const data = node.next.value;
          node.next = node.next.next;
          return data;
        }
        return recurse(node.next);
      }
    }
    if (this.head) {
      if (this.head.key === key) {
        const data = this.head.value
        this.head = this.head.next || null;
        return data;
      }
      return recurse(this.head);
    }
  }
}

module.exports = Bucket;
