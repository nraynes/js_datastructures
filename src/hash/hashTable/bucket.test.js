const Bucket = require('./bucket');

describe('Bucket Tests (Simple Linked List)', () => {
    
  describe('Should be able to instantiate a new bucket with the new keyword.', () => {
    
    test('Should be able to create a bucket.', () => {
      const myBucket = new Bucket();

      expect(myBucket.head).toBe(null);
    })

    test('Should be able to create a new bucket with an item.', () => {
      const myBucket = new Bucket('SomeKey', 'SomeVal');

      expect(myBucket.head.key).toBe('SomeKey');
      expect(myBucket.head.value).toBe('SomeVal');
    })

    test('Should not create an item if the key is missing.', () => {
      const myBucket = new Bucket(null, 'SomeVal');

      expect(myBucket.head).toBe(null);
    })

    test('Should not create an item if the value is missing.', () => {
      const myBucket = new Bucket('SomeKey');

      expect(myBucket.head).toBe(null);
    })

    test('Should throw an error if the wrong type is supplied!', () => {
      try {
        const myBucket = new Bucket(999);
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
    })

  })

  describe('Should have a way to add a key value pair to the bucket.', () => {

    test('Should be able to add an item to the bucket.', () => {
      const myBucket = new Bucket();

      expect(myBucket.head).toBe(null);
      myBucket.add('SomeKey', 'SomeVal');
      expect(myBucket.head.key).toBe('SomeKey');
      expect(myBucket.head.value).toBe('SomeVal');
      myBucket.add('SomeKey1', 'SomeVal1');
      expect(myBucket.head.next.key).toBe('SomeKey1');
      expect(myBucket.head.next.value).toBe('SomeVal1');
    })

    test('Should not add a node if the key is missing.', () => {
      const myBucket = new Bucket();

      expect(myBucket.head).toBe(null);
      myBucket.add('SomeKey', 'SomeVal');
      expect(myBucket.head.key).toBe('SomeKey');
      expect(myBucket.head.value).toBe('SomeVal');
      myBucket.add(null, 'SomeVal1');
      expect(myBucket.head.next).toBe(null);
    })

    test('Should add a node with an null value if the value is missing.', () => {
      const myBucket = new Bucket();

      expect(myBucket.head).toBe(null);
      myBucket.add('SomeKey', 'SomeVal');
      expect(myBucket.head.key).toBe('SomeKey');
      expect(myBucket.head.value).toBe('SomeVal');
      myBucket.add('SomeKey1');
      expect(myBucket.head.next.key).toBe('SomeKey1');
      expect(myBucket.head.next.value).toBe(null);
    })

    test('Should not add a node if both parameters are missing.', () => {
      const myBucket = new Bucket();

      expect(myBucket.head).toBe(null);
      myBucket.add('SomeKey', 'SomeVal');
      expect(myBucket.head.key).toBe('SomeKey');
      expect(myBucket.head.value).toBe('SomeVal');
      myBucket.add();
      expect(myBucket.head.next).toBe(null);
    })

    test('Should return true if the key provided is a duplicate.', () => {
      const myBucket = new Bucket();

      expect(myBucket.head).toBe(null);
      myBucket.add('SomeKey', 'SomeVal');
      expect(myBucket.head.key).toBe('SomeKey');
      expect(myBucket.head.value).toBe('SomeVal');
      myBucket.add('SomeKey1', 'SomeVal1');
      expect(myBucket.head.next.key).toBe('SomeKey1');
      expect(myBucket.head.next.value).toBe('SomeVal1');
      expect(myBucket.add('SomeKey1', 'SomeVal2')).toBe(true);
      expect(myBucket.head.next.next).toBe(null);
    })

    test('Should throw an error if the wrong type is supplied!', () => {
      try {
        const myBucket = new Bucket();
        myBucket.add(999);
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
    })

  })

  describe('Should have a way to find a value in the bucket using the key.', () => {

    test('Should return the nodes value for a given key if found.', () => {
      const myBucket = new Bucket();

      myBucket.add('SomeKey1', 'SomeVal1');
      myBucket.add('SomeKey2', 'SomeVal2');
      myBucket.add('SomeKey3', 'SomeVal3');
      myBucket.add('SomeKey4', 'SomeVal4');
      expect(myBucket.find('SomeKey3')).toBe('SomeVal3');
    })

    test('Should return null if the key was not found.', () => {
      const myBucket = new Bucket();

      myBucket.add('SomeKey1', 'SomeVal1');
      myBucket.add('SomeKey2', 'SomeVal2');
      myBucket.add('SomeKey3', 'SomeVal3');
      myBucket.add('SomeKey4', 'SomeVal4');
      expect(myBucket.find('SomeKey6')).toBe(null);
    })

    test('Should return null if the key is missing.', () => {
      const myBucket = new Bucket();

      myBucket.add('SomeKey1', 'SomeVal1');
      myBucket.add('SomeKey2', 'SomeVal2');
      myBucket.add('SomeKey3', 'SomeVal3');
      myBucket.add('SomeKey4', 'SomeVal4');
      expect(myBucket.find()).toBe(null);
    })

    test('Should throw an error if the wrong type is supplied!', () => {
      try {
        const myBucket = new Bucket();
        myBucket.find(999);
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
    })

  })

  describe('Should have a way to remove a node in the bucket if found using the key.', () => {

    test('Should be able to remove a node and return the data if a given key is found.', () => {
      const myBucket = new Bucket();

      myBucket.add('SomeKey1', 'SomeVal1');
      myBucket.add('SomeKey2', 'SomeVal2');
      myBucket.add('SomeKey3', 'SomeVal3');
      myBucket.add('SomeKey4', 'SomeVal4');
      expect(myBucket.remove('SomeKey3')).toBe('SomeVal3');
      expect(myBucket.find('SomeKey3')).toBe(null);
    })

    test('Should be able to remove a node from the head and return the data if a given key is found.', () => {
      const myBucket = new Bucket();

      myBucket.add('SomeKey1', 'SomeVal1');
      myBucket.add('SomeKey2', 'SomeVal2');
      myBucket.add('SomeKey3', 'SomeVal3');
      myBucket.add('SomeKey4', 'SomeVal4');
      expect(myBucket.remove('SomeKey1')).toBe('SomeVal1');
      expect(myBucket.find('SomeKey1')).toBe(null);
    })

    test('Should be able to remove a node from the tail and return the data if a given key is found.', () => {
      const myBucket = new Bucket();

      myBucket.add('SomeKey1', 'SomeVal1');
      myBucket.add('SomeKey2', 'SomeVal2');
      myBucket.add('SomeKey3', 'SomeVal3');
      myBucket.add('SomeKey4', 'SomeVal4');
      expect(myBucket.remove('SomeKey4')).toBe('SomeVal4');
      expect(myBucket.find('SomeKey4')).toBe(null);
    })

    test('Should return undefined if the key was not found.', () => {
      const myBucket = new Bucket();

      myBucket.add('SomeKey1', 'SomeVal1');
      myBucket.add('SomeKey2', 'SomeVal2');
      myBucket.add('SomeKey3', 'SomeVal3');
      myBucket.add('SomeKey4', 'SomeVal4');
      expect(myBucket.remove('SomeKey6')).toBe(undefined);
    })

    test('Should return null if the key is missing.', () => {
      const myBucket = new Bucket();

      myBucket.add('SomeKey1', 'SomeVal1');
      myBucket.add('SomeKey2', 'SomeVal2');
      myBucket.add('SomeKey3', 'SomeVal3');
      myBucket.add('SomeKey4', 'SomeVal4');
      expect(myBucket.remove()).toBe(null);
    })

    test('Should throw an error if the wrong type is supplied!', () => {
      try {
        const myBucket = new Bucket(999);
        myBucket.remove(999);
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
    })

  })

})