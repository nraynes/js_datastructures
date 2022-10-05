const HashTable = require('./hashTable');
const BucketNode = require('./bucketNode');

describe('Hash Table Data Structure', () => {
    
  describe('Should be able to instantiate a new hash table with the new keyword.', () => {
    
    test('Should be able to create a new hash table with a default size of 128.', () => {
      const myTable = new HashTable();

      expect(myTable.getTable()).toEqual(expect.any(Array))
      expect(myTable.getTable().length).toBe(128);
    })

    test('Should be able to create a new hash table with a specified size.', () => {
      const myTable = new HashTable(77);

      expect(myTable.getTable()).toEqual(expect.any(Array))
      expect(myTable.getTable().length).toBe(77);
    })
    
    test('Should use the absolute value if a negative number is passed.', () => {
      const myTable = new HashTable(-77);

      expect(myTable.getTable()).toEqual(expect.any(Array))
      expect(myTable.getTable().length).toBe(77);
    })

    test('Should throw an error if something that isnt a number is passed.', () => {
      try {
        const myTable = new HashTable('Hello');
      } catch (e) {
        expect(e).toEqual(expect.any(String))
      }
    })

  })

  describe('Should have a way to get the whole table.', () => {

    test('Should return the whole table if getTable is called.', () => {
      const myTable = new HashTable();
      const gottenTable = myTable.getTable();
      expect(gottenTable).toEqual(expect.any(Array));
      expect(gottenTable.length).toBe(128);
    })

  })

  describe('Should have a way to insert a key value pair into the table.', () => {

    test('Should be able to add a key value pair into the table.', () => {
      const myTable = new HashTable();

      myTable.insert('SomeKey', 'SomeVal');
      expect(myTable.find('SomeKey')).toBe('SomeVal');
    })

    test('Should not add anything if no key is provided.', () => {
      const myTable = new HashTable();

      myTable.insert(undefined, 'SomeVal');
      expect(myTable.find('SomeKey')).toBe(null);
    })

    test('Should add a null value if the value supplied is empty.', () => {
      const myTable = new HashTable();

      myTable.insert('SomeKey');
      expect(myTable.find('SomeKey')).toBe(null);
    })

    test('Should throw an error if a wrong type is supplied.', () => {
      try {
        const myTable = new HashTable();
        myTable.insert(999, 'SomeVal');
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
    })

  })

  describe('Should have a way to find a value in the table with a given key.', () => {
    
    test('Should be able to find a value in the table with a given key.', () => {
      const myTable = new HashTable();

      myTable.insert('SomeKey', 'SomeVal');
      expect(myTable.find('SomeKey')).toBe('SomeVal');
    })

    test('Should return null if the value doesnt exist.', () => {
      const myTable = new HashTable();

      myTable.insert('SomeKey', 'SomeVal');
      expect(myTable.find('aNonExistingKey')).toBe(null);
    })

    test('Should return null if the key is missing.', () => {
      const myTable = new HashTable();

      myTable.insert('SomeKey', 'SomeVal');
      expect(myTable.find(undefined)).toBe(null);
    })

    test('Should throw an error if the wrong type is supplied.', () => {
      try {
        const myTable = new HashTable();
        myTable.find(999)
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
    })

  })

  describe('Should have a way to remove a value from the table with a given key.', () => {
    
    test('Should remove a node from the table and return it when supplied with a key.', () => {
      const myTable = new HashTable();

      myTable.insert('SomeKey', 'SomeVal');
      expect(myTable.remove('SomeKey')).toBe('SomeVal');
      expect(myTable.find('SomeKey')).toBe(null);
    })

    test('Should return null if the node with the key supplied does not exist.', () => {
      const myTable = new HashTable();

      expect(myTable.remove('SomeKey')).toBe(null);
    })

    test('Should return null if the key is missing.', () => {
      const myTable = new HashTable();

      expect(myTable.remove()).toBe(null);
    })

    test('Should throw an error if the wrong type is supplied.', () => {
      try {
        const myTable = new HashTable();
        myTable.remove(999);
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
    })

  })

  describe('Should have a way to get the current amount of items in the table.', () => {

    test('Should be able to get the current amount of items in the table.', () => {
      const myTable = new HashTable();
      myTable.insert('SomeKey1', 'SomeVal1');
      myTable.insert('SomeKey2', 'SomeVal2');
      myTable.insert('SomeKey3', 'SomeVal3');
      myTable.insert('SomeKey4', 'SomeVal4');
      expect(myTable.size()).toBe(4);
    })
    
    test('Should return 0 if the list is empty.', () => {
      const myTable = new HashTable();

      expect(myTable.size()).toBe(0);
    })

  })

})