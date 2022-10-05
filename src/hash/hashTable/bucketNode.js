class BucketNode {
  constructor(key, value, next) {
    if (key && typeof key !== 'string') throw 'key must be a string!';
    if (next && !(next instanceof BucketNode)) throw 'next must be an instance of BucketNode!';
    this.key = key || null;
    this.value = value || null;
    this.next = next || null;
  }
}

module.exports = BucketNode;