const Stack = require('./stack');

describe('Stack Data Structure', () => {

  describe('Should be able to be initialized with the new keyword.', () => {

    test('Should be able to be initialized without parameters to get an empty stack.', () => {
      const myStack = new Stack();
      expect(myStack.size()).toBe(0);
    })

    test('Should be able to be initialized with single item using parameter.', () => {
      const myStack = new Stack('Test Item');
      expect(myStack.size()).toBe(1);
    })

    test('Should initialize with multiple items in order from left to right so that the last parameter is on top.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myStack.size()).toBe(4);
      expect(myStack.peek()).toBe('Test Item 4');
    })

    test('Should be able to initialize with a maximum size if the second parameter is passed a number.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 5);
      myStack.push('Test Item 5');
      expect(myStack.size()).toBe(5);
      expect(myStack.peek()).toBe('Test Item 5')
      myStack.push('Test Item 6');
      expect(myStack.size()).toBe(5);
      expect(myStack.peek()).toBe('Test Item 5')
    })

    test('Should be able to initialize without a maximum size if the second parameter is passed a zero.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 0);
      myStack.push('Test Item 5');
      expect(myStack.size()).toBe(5);
      expect(myStack.peek()).toBe('Test Item 5')
      myStack.push('Test Item 6');
      expect(myStack.size()).toBe(6);
      expect(myStack.peek()).toBe('Test Item 6')
    })

    test('Should be able to initialize with an empty array to the stack if an empty array is passed.', () => {
      const myStack = new Stack([]);
      expect(myStack.peek()).toStrictEqual([]);
      expect(myStack.size()).toBe(1)
    })

    test('Should be able to initialize with an array containing items to the stack if the third parameter is set to true.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 0, true);
      expect(myStack.peek()).toEqual(expect.arrayContaining(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']));
      expect(myStack.size()).toBe(1)
    })

    test('Should throw an error if any of the parameters do not match the correct type.', () => {
      try {
        const myStack = new Stack('Test', 'Test');
      } catch (e) {
        expect(e).toEqual(expect.any(String))
      }
      try {
        const myStack = new Stack('Test', 0, 'Test');
      } catch (e) {
        expect(e).toEqual(expect.any(String))
      }
    })

  })

  describe('Should have a method to set maximum size after a stack is instantiated.', () => {

    test('Should be able to set a maximum size.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myStack.size()).toBe(4);
      expect(myStack.peek()).toBe('Test Item 4');
      myStack.push('Test Item 5');
      expect(myStack.size()).toBe(5);
      expect(myStack.peek()).toBe('Test Item 5');
      myStack.setMax(5);
      myStack.push('Test Item 6');
      expect(myStack.size()).toBe(5);
      expect(myStack.peek()).toBe('Test Item 5');
    })

    test('Should remove all items from the top of the stack that bring a stack over its new maximum size.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myStack.size()).toBe(4);
      expect(myStack.peek()).toBe('Test Item 4');
      myStack.push('Test Item 5');
      expect(myStack.size()).toBe(5);
      expect(myStack.peek()).toBe('Test Item 5');
      myStack.setMax(3);
      myStack.push('Test Item 6');
      expect(myStack.size()).toBe(3);
      expect(myStack.peek()).toBe('Test Item 3');
    })

    test('Should remove the max size limit if a zero is passed.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myStack.size()).toBe(4);
      expect(myStack.peek()).toBe('Test Item 4');
      myStack.push('Test Item 5');
      expect(myStack.size()).toBe(5);
      expect(myStack.peek()).toBe('Test Item 5');
      myStack.setMax(5);
      myStack.push('Test Item 6');
      expect(myStack.size()).toBe(5);
      expect(myStack.peek()).toBe('Test Item 5');
      myStack.setMax(0);
      myStack.push('Test Item 6');
      expect(myStack.size()).toBe(6);
      expect(myStack.peek()).toBe('Test Item 6');
    })

    test('Should throw an error if the wrong type is supplied.', () => {
      try {
        const myStack = new Stack();
        myStack.setMax(true)
      } catch (e) {
        expect(e).toEqual(expect.any(String))
      }
    })

  })

  describe('Should not be able to access list property directly.', () => {
    
    test('Should return with undefined if list property is accessed directly.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myStack.list).toBe(undefined);
    })

  })

  describe('Should have a method to get the maximum size of the stack.', () => {

    test('Should return null if there is no maximum size.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myStack.getMax()).toBe(null)
    })

    test('Should return with the maximum size.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 5);
      expect(myStack.getMax()).toBe(5)
    })

  })

  describe('Should have a push method that adds to the stack.', () => {

    test('Should take in a value and put it at the top of the stack.', () => {
      const myStack = new Stack();
      myStack.push('Test Item');
      expect(myStack.peek()).toBe('Test Item')
      myStack.push('Test Item 2');
      expect(myStack.peek()).toBe('Test Item 2')
      myStack.push('Test Item 3');
      expect(myStack.peek()).toBe('Test Item 3')
      myStack.push('Test Item 4');
      expect(myStack.peek()).toBe('Test Item 4')
    })

    test('Should be able to push multiple items to the stack in order if an array is passed.', () => {
      const myStack = new Stack();
      myStack.push(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myStack.peek()).toBe('Test Item 4')
      expect(myStack.size()).toBe(4)
    })

    test('Should be able to push an empty array to the stack if an empty array is passed.', () => {
      const myStack = new Stack();
      myStack.push([]);
      expect(myStack.peek()).toStrictEqual([])
      expect(myStack.size()).toBe(1)
    })

    test('Should be able to push an array containing items to the stack if the second parameter is set to true.', () => {
      const myStack = new Stack();
      myStack.push(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], true);
      expect(myStack.peek()).toEqual(expect.arrayContaining(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']));
      expect(myStack.size()).toBe(1)
    })

    test('Should throw an error if incorrect type is passed for the second parameter.', () => {
      const myStack = new Stack();
      try {
        myStack.push([],54);
      } catch (e) {
        expect(e).toEqual(expect.any(String))
      }
    })

  })

  describe('Should have a peek method to return the top item in the stack.', () => {

    test('Should acquire the top item in a stack with items in it.', () => {
      const myStack = new Stack();
      myStack.push('Test Item');
      expect(myStack.peek()).toBe('Test Item')
    })

    test('Should return a null value if the stack is empty.', () => {
      const myStack = new Stack();
      expect(myStack.peek()).toBe(null)
    })

  })

  describe('Should have a pop method to remove an item from the top of the stack.', () => {

    test('Should remove the top item from a stack and return it.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myStack.pop()).toBe('Test Item 4')
      expect(myStack.peek()).toBe('Test Item 3')
      expect(myStack.pop()).toBe('Test Item 3')
      expect(myStack.peek()).toBe('Test Item 2')
    })

    test('Should leave the stack unchanged if pop is used on empty stack.', () => {
      const myStack = new Stack();
      expect(myStack.peek()).toBe(null)
      myStack.pop()
      expect(myStack.peek()).toBe(null)
    })

  })

  describe('Should have isEmpty method to return whether or not stack is empty.', () => {

    test('Should return true if the stack is empty.', () => {
      const myStack = new Stack();
      expect(myStack.isEmpty()).toBe(true)
    })

    test('Should return false if the stack is not empty.', () => {
      const myStack = new Stack();
      myStack.push('Test Item');
      expect(myStack.isEmpty()).toBe(false)
    })

  })

  describe('Should have an isFull method to return whether or not a stack is full.', () => {

    test('Should return true if the stack is full.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 4);
      expect(myStack.isFull()).toBe(true)
    })

    test('Should return false if the stack is not full.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 5);
      expect(myStack.isFull()).toBe(false)
    })

    test('Should return null if the stack is does not have a maximum size.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myStack.isFull()).toBe(null)
    })

  })

  describe('Should have a size method to return the amount of items in a stack.', () => {

    test('Should return 0 if the stack is empty.', () => {
      const myStack = new Stack();
      expect(myStack.size()).toBe(0)
    })

    test('Should return with the size of the stack as an integer.', () => {
      const myStack = new Stack();
      myStack.push('Test Item');
      expect(myStack.size()).toBe(1)
      myStack.push('Test Item 2');
      expect(myStack.size()).toBe(2)
      myStack.push('Test Item 3');
      expect(myStack.size()).toBe(3)
      myStack.push('Test Item 4');
      expect(myStack.size()).toBe(4)
    })

  })

  describe('Should be able to get the stack by calling the getStack getter method.', () => {

    test('Should return with the whole stack.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myStack.getStack()).toEqual(expect.arrayContaining(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']));
    })

    test('Should return with an empty array if stack is empty.', () => {
      const myStack = new Stack();
      expect(myStack.getStack()).toEqual(expect.arrayContaining([]));
    })

  })

  describe('Should have a reverse function that reverses the order of the stack.', () => {

    test('Should reverse the order of the stack.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      myStack.reverse();
      expect(myStack.getStack()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
    })

    test('Should reverse the order of the stack back to its original form if called twice.', () => {
      const myStack = new Stack(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      myStack.reverse();
      expect(myStack.getStack()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
      myStack.reverse();
      expect(myStack.getStack()).toEqual(expect.arrayContaining(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']));
    })

    test('Should do nothing if the stack is empty.', () => {
      const myStack = new Stack();
      myStack.reverse();
      expect(myStack.getStack()).toEqual(expect.arrayContaining([]));
    })

  })

})