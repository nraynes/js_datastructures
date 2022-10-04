const DLLNode = require('./doublyLinkedListNode');

describe('Doubly Linked List Node', () => {

  describe('Should be able to be instantiated using the new keyword.', () => {

    test('Should be able to make an empty node.', () => {
      const myNode = new DLLNode();
      expect(myNode.data).toBe(undefined);
      expect(myNode.next).toBe(null);
      expect(myNode.prev).toBe(null);
    })

    test('Should be able to make a node with data', () => {
      const myNode = new DLLNode('Test Item');
      expect(myNode.data).toBe('Test Item');
      expect(myNode.next).toBe(null);
      expect(myNode.prev).toBe(null);
    })

    test('Should throw an error if next is not an node instance.', () => {
      try {
        const myNode = new DLLNode('Test Item', 'Test');
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
    })

    test('Should throw an error if prev is not an node instance.', () => {
      try {
        const myNode = new DLLNode('Test Item', new DLLNode(), 'test');
      } catch (e) {
        expect(e).toEqual(expect.any(String));
      }
    })
  })

  describe('Should have an accessible data property.', () => {

    test('Should be able to access data property directly.', () => {
      const myNode = new DLLNode('Test Item');
      expect(myNode.data).toBe('Test Item');
    })

    test('Should be able to manipulate data directly.', () => {
      const myNode = new DLLNode('Test Item');
      expect(myNode.data).toBe('Test Item');
      myNode.data = 'Changed Item'
      expect(myNode.data).toBe('Changed Item');
    })

  })

  describe('Should have an accessible next property.', () => {

    test('Should be able to access next property directly.', () => {
      const myNode = new DLLNode('Test Item', new DLLNode('Test Item 2'));
      expect(myNode.next).toEqual(expect.objectContaining({ data: 'Test Item 2', next: null, prev: null }));
    })

    test('Should be able to manipulate next directly.', () => {
      const myNode = new DLLNode('Test Item', new DLLNode('Test Item 2'));
      expect(myNode.next).toEqual(expect.objectContaining({ data: 'Test Item 2', next: null, prev: null }));
      myNode.next = new DLLNode('Changed Item');
      expect(myNode.next).toEqual(expect.objectContaining({ data: 'Changed Item', next: null, prev: null }));
    })

  })
  
  describe('Should have an accessible prev property.', () => {

    test('Should be able to access prev property directly.', () => {
      const myNode = new DLLNode('Test Item', null, new DLLNode('Test Item'));
      expect(myNode.prev).toEqual(expect.objectContaining({ data: 'Test Item', next: null, prev: null }));
    })

    test('Should be able to manipulate prev directly.', () => {
      const myNode = new DLLNode('Test Item', null, new DLLNode('Test Item'));
      expect(myNode.prev).toEqual(expect.objectContaining({ data: 'Test Item', next: null, prev: null }));
      myNode.prev = new DLLNode('Changed Item');
      expect(myNode.prev).toEqual(expect.objectContaining({ data: 'Changed Item', next: null, prev: null }));
    })

  })

})