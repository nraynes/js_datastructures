const Stack = require('./stack');

describe('Stack Data Structure', () => {

  describe('Should be able to be initialized with the new keyword.', () => {

    test('Should be able to be initialized without parameters to get an empty stack.', () => {
      const itemStack = new Stack();
      expect(itemStack.size()).toBe(0);
    })

    test('Should be able to be initialized with single item using parameter.', () => {
      const itemStack = new Stack('Test Item');
      expect(itemStack.size()).toBe(1);
    })

    test('Should be able to be initialized with multiple items using parameters.', () => {
      const itemStack = new Stack('Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4');
      expect(itemStack.size()).toBe(4);
    })

    test('Should initialize with multiple items in order from left to right so that the last parameter is on top.', () => {
      const itemStack = new Stack('Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4');
      expect(itemStack.top()).toBe('Test Item 4');
    })

  })

  describe('Should have a push method that adds to the stack.', () => {

    test('Should take in a value and put it at the top of the stack.', () => {
      const itemStack = new Stack();
      itemStack.push('Test Item');
      expect(itemStack.top()).toBe('Test Item')
      itemStack.push('Test Item 2');
      expect(itemStack.top()).toBe('Test Item 2')
      itemStack.push('Test Item 3');
      expect(itemStack.top()).toBe('Test Item 3')
      itemStack.push('Test Item 4');
      expect(itemStack.top()).toBe('Test Item 4')
    })

  })

  describe('Should have a top method to return the top item in the stack.', () => {

    test('Should acquire the top item in a stack with items in it.', () => {
      const itemStack = new Stack();
      itemStack.push('Test Item');
      expect(itemStack.top()).toBe('Test Item')
    })

    test('Should return a null value if the stack is empty.', () => {
      const itemStack = new Stack();
      expect(itemStack.top()).toBe(null)
    })

  })

  describe('Should have a pop method to remove an item from the top of the stack.', () => {

    test('Should remove the top item from a stack.', () => {
      const itemStack = new Stack();
      itemStack.push('Test Item');
      itemStack.push('Test Item 2');
      itemStack.push('Test Item 3');
      itemStack.push('Test Item 4');
      itemStack.pop()
      expect(itemStack.top()).toBe('Test Item 3')
      itemStack.pop()
      expect(itemStack.top()).toBe('Test Item 2')
    })

    test('Should leave the stack unchanged if pop is used on empty stack.', () => {
      const itemStack = new Stack();
      expect(itemStack.top()).toBe(null)
      itemStack.pop()
      expect(itemStack.top()).toBe(null)
    })

  })

  describe('Should have isEmpty method to return whether or not stack is empty.', () => {

    test('Should return true if the stack is empty.', () => {
      const itemStack = new Stack();
      expect(itemStack.isEmpty()).toBe(true)
    })

    test('Should return false if the stack is not empty.', () => {
      const itemStack = new Stack();
      itemStack.push('Test Item');
      expect(itemStack.isEmpty()).toBe(false)
    })

  })

  describe('Should have a size method to return the amount of items in a stack.', () => {

    test('Should return 0 if the stack is empty.', () => {
      const itemStack = new Stack();
      expect(itemStack.size()).toBe(0)
    })

    test('Should return with the size of the stack as an integer.', () => {
      const itemStack = new Stack();
      itemStack.push('Test Item');
      expect(itemStack.size()).toBe(1)
      itemStack.push('Test Item 2');
      expect(itemStack.size()).toBe(2)
      itemStack.push('Test Item 3');
      expect(itemStack.size()).toBe(3)
      itemStack.push('Test Item 4');
      expect(itemStack.size()).toBe(4)
    })

  })

})