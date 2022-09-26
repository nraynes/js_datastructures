const SLLNode = require('./singlyLinkedListNode');

describe('Singly Linked List Node', () => {

  describe('Should be able to be instantiated using the new keyword.', () => {

    test('Should be able to make an empty node.', () => {
      const myNode = new SLLNode();
      expect(myNode.data).toBe(undefined);
      expect(myNode.next).toBe(null);
    })

    test('Should be able to make a node with data', () => {
      const myNode = new SLLNode('Test Item');
      expect(myNode.data).toBe('Test Item');
      expect(myNode.next).toBe(null);
    })

  })

  describe('Should have an accessible data property.', () => {

    test('Should be able to access data property directly.', () => {
      const myNode = new SLLNode('Test Item');
      expect(myNode.data).toBe('Test Item');
    })

    test('Should be able to manipulate data directly.', () => {
      const myNode = new SLLNode('Test Item');
      expect(myNode.data).toBe('Test Item');
      myNode.data = 'Changed Item'
      expect(myNode.data).toBe('Changed Item');
    })

  })

  describe('Should have an accessible next property.', () => {

    test('Should be able to access next property directly.', () => {
      const myNode = new SLLNode('Test Item', new SLLNode('Test Item 2'));
      expect(myNode.next).toEqual(expect.objectContaining({ data: 'Test Item 2', next: null }));
    })

    test('Should be able to manipulate next directly.', () => {
      const myNode = new SLLNode('Test Item', new SLLNode('Test Item 2'));
      expect(myNode.next).toEqual(expect.objectContaining({ data: 'Test Item 2', next: null }));
      myNode.next = new SLLNode('Changed Item');
      expect(myNode.next).toEqual(expect.objectContaining({ data: 'Changed Item', next: null }));
    })

  })
  
})