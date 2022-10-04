class BucketNode {
  constructor(key, value, next) {
    this.key = key || null;
    this.value = value || null;
    this.next = next || null;
  }
}

module.exports = BucketNode;