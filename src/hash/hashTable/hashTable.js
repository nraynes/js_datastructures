const SLL = require('../../linear/singlyLinkedList/singlyLinkedList');

hash = (size, value) => {
  const asciiValues = [...value].map((char) => (char.charCodeAt(0)));
  const total = asciiValues.reduce((acc, val) => acc += val, 0);
  const index = Math.floor(total % (size));
  return index;
}


class Hashtable {
  constructor (size = 20) {
    this.table = [];
    for (let i = 0; i < size; i++) {
      this.table.push(new SLL())
    }
  }

  contains = (key) => {
    // Reject if input is not string.
    if (typeof key !== 'string') throw new Error('Key must be of type string.')

    // Hash the value into an index.
    const index = hash(this.table.length, key);

    // Find the value in the array at the index.
    const valueList = this.table[index];
    if (valueList.contains(key)) return true
    return null;
  }

  addItem = (key, value) => {
    // Reject if input is not string.
    if (typeof key !== 'string') throw new Error('Key must be of type string.')

    // Hash the key into an index.
    const index = hash(this.table.length, key);

    // First check to see if the key is already in the hash table.
    const valueCheck = this.contains(key);

    // Place the value at the index.
    if (!valueCheck) this.table[index].push(key)
  }

  removeItem = (key) => {
    // Reject if input is not string.
    if (typeof key !== 'string') throw new Error('Key must be of type string.')

    // Hash the value into an index.
    const index = hash(this.table.length, key);

    // Find the value in the array at the index.
    this.table[index].removeData(key);
  }
}

module.exports = Hashtable;