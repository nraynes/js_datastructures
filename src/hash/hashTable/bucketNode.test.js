const BucketNode = require('./bucketNode');

describe('Bucket Node Tests (Simple Linked List Node)', () => {
    
  describe('Should be able to instantiate a new node with the new keyword.', () => {
    
    test('Should be able to create a new node with a key value pair.', () => {
        const myNode = new BucketNode('SomeKey', 'SomeVal');

        expect(myNode.key).toBe('SomeKey');
        expect(myNode.value).toBe('SomeVal');
    })

    test('Should be able to create with a next value.', () => {
        const myNode = new BucketNode('SomeKey', 'SomeVal', new BucketNode('SomeKey1', 'SomeVal1'));

        expect(myNode.next.key).toBe('SomeKey1');
        expect(myNode.next.value).toBe('SomeVal1');
    })

    test('Should have null values if not instantiated with something.', () => {
        const myNode = new BucketNode();

        expect(myNode.key).toBe(null);
        expect(myNode.value).toBe(null);
        expect(myNode.next).toBe(null);

    })

    test('Should throw an error if the wrong type is supplied.', () => {
      try {
        const myNode = new BucketNode(999);
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
      try {
        const myNode = new BucketNode('Key', 'Some Value', 'Test');
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
    })

  })

})