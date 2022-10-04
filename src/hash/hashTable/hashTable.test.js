const HashTable = require('./hashTable');

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



  })

  describe('Should have a way to insert a key value pair into the table.', () => {



  })

  describe('Should have a way to find a value in the table with a given key.', () => {
    


  })

  describe('Should have a way to remove a value from the table with a given key.', () => {
    


  })

  describe('Should have a way to get the current amount of items in the table.', () => {



  })

})