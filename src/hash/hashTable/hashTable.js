const Bucket = require('./bucket');

class HashTable {
  #size = 0;
  constructor(size = 128) {
		this.table = new Array(size);
    this.#size = 0;
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
  
  insert(key, value) {
    if (typeof key !== 'string') return;
    const index = this.#hash(key);
    const pointer = this.table[index];
    if (pointer) {
      const duplicate = pointer.add(key, value);
      if (!duplicate) this.#size++;
    } else {
      this.table[index] = new Bucket(key, value);
      this.#size++;
    }
  }
  
  find(key) {
    if (typeof key !== 'string') return;
    const index = this.#hash(key);
    const pointer = this.table[index];
    if (pointer) {
      return pointer.find(key);
    }
    return null;
  }
  
  remove(key) {
    if (typeof key !== 'string') return;
    const index = this.#hash(key);
    const pointer = this.table[index];
    if (pointer) {
      const success = pointer.remove(key);
      if (success) {
        this.#size--;
      }
    }
  }
}

module.exports = HashTable;