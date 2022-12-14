const Bucket = require('./bucket');

class HashTable {
  #size = 0;
  #table = null;
  constructor(size = 128) {
    if (typeof size !== 'number') throw 'size must be a number!';
    if (size < 0) size = Math.abs(size);
		this.#table = new Array(size);
    this.#size = 0;
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.#table.length;
  }
  
  insert(key, value) {
    if (!key) return null;
    if (typeof key !== 'string') throw 'key must be a string!';
    const index = this.#hash(key);
    const pointer = this.#table[index];
    if (pointer) {
      const duplicate = pointer.add(key, value);
      if (!duplicate) this.#size++;
    } else {
      this.#table[index] = new Bucket(key, value);
      this.#size++;
    }
  }
  
  find(key) {
    if (!key) return null;
    if (typeof key !== 'string') throw 'key must be a string!';
    const index = this.#hash(key);
    const pointer = this.#table[index];
    if (pointer) {
      return pointer.find(key);
    }
    return null;
  }
  
  remove(key) {
    if (!key) return null;
    if (typeof key !== 'string') throw 'key must be a string!';
    const index = this.#hash(key);
    const pointer = this.#table[index];
    if (pointer) {
      const data = pointer.remove(key);
      if (data !== undefined) {
        this.#size--;
        return data;
      }
    }
    return null;
  }

  size() {
    return this.#size;
  }

  getTable() {
    return this.#table;
  }
}

module.exports = HashTable;