const Queue = require('./queue');

describe('Queue Data Structure', () => {

  describe('Should be able to be initialized with the new keyword.', () => {

    test('Should be able to instantiate an empty queue.', () => {
      const myQueue = new Queue();
      expect(myQueue.peek()).toBe(null);
    })

    test('Should be able to instantiate a queue with one item using one parameter.', () => {
      const myQueue = new Queue('Test Item');
      expect(myQueue.peek()).toBe('Test Item');
    })

    test('Should be able to instantiate a queue with multiple items using an array.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.peek()).toBe('Test Item');
      expect(myQueue.size()).toBe(4)
    })

    test('Should be able to instantiate a queue with an empty array if an empty array is passed.', () => {
      const myQueue = new Queue([]);
      expect(myQueue.peek()).toStrictEqual([]);
    })

    test('Should be able to instantiate a queue with an array containing items if the third parameter is set to true.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 0, true);
      expect(myQueue.peek()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
      expect(myQueue.size()).toBe(1);
    })

    test('Should be able to instantiate a queue with a maximum size using a second parameter.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 5);
      expect(myQueue.peek()).toBe('Test Item');
      expect(myQueue.size()).toBe(4)
      myQueue.enqueue('Test Item 5');
      expect(myQueue.size()).toBe(5)
      myQueue.enqueue('Test Item 6');
      expect(myQueue.size()).toBe(5)
    })

    test('Should not be able to instantiate a queue with a maximum size of 0.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 0);
      expect(myQueue.peek()).toBe('Test Item');
      expect(myQueue.size()).toBe(4)
      myQueue.enqueue('Test Item 5');
      expect(myQueue.size()).toBe(5)
      myQueue.enqueue('Test Item 6');
      expect(myQueue.size()).toBe(6)
    })
    
  })

  describe('Should have a method to set the max size after a queue has been instantiated.', () => {

    test('Should be able to set the maximum size.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.peek()).toBe('Test Item');
      expect(myQueue.size()).toBe(4)
      myQueue.enqueue('Test Item 5');
      expect(myQueue.size()).toBe(5)
      myQueue.setMax(5);
      myQueue.enqueue('Test Item 6');
      expect(myQueue.size()).toBe(5)
    })

    test('Should be able to clip off all of the next items in the queue that go over the new maximum size.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.peek()).toBe('Test Item');
      expect(myQueue.size()).toBe(4)
      myQueue.enqueue('Test Item 5');
      expect(myQueue.size()).toBe(5)
      myQueue.setMax(3);
      myQueue.enqueue('Test Item 6');
      expect(myQueue.size()).toBe(3)
    })

    test('Should be able to remove the max size limit if a 0 is passed.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.peek()).toBe('Test Item');
      expect(myQueue.size()).toBe(4)
      myQueue.enqueue('Test Item 5');
      expect(myQueue.size()).toBe(5)
      myQueue.setMax(5);
      myQueue.enqueue('Test Item 6');
      expect(myQueue.size()).toBe(5)
      myQueue.setMax(0);
      myQueue.enqueue('Test Item 6');
      expect(myQueue.size()).toBe(6)
    })

  })

  describe('Should have a method to get the maximum size of the queue.', () => {

    test('Should return null if there is no maximum size.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.getMax()).toBe(null)
    })

    test('Should return with the maximum size.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 5);
      expect(myQueue.getMax()).toBe(5)
    })

  })

  describe('Should not be able to access list property directly.', () => {
    
    test('Should return with undefined if list property is accessed directly.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.list).toBe(undefined);
    })

  })

  describe('Should be able to access queue with getter method.', () => {

    test('Should be able to get the whole queue by accessing the getQueue getter method.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.getQueue()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
    })

    test('Should return an empty array if the queue is empty.', () => {
      const myQueue = new Queue();
      expect(myQueue.getQueue()).toEqual(expect.arrayContaining([]));
    })

  })

  describe('Should have a peek method to see what is next in the queue.', () => {

    test('Should return null if the queue is empty.', () => {
      const myQueue = new Queue();
      expect(myQueue.peek()).toBe(null);
    })

    test('Should return the next item in the queue if queue is not empty.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.peek()).toBe('Test Item');
    })

  })

  describe('Should have a method to get the current size of a queue.', () => {

    test('Should return 0 if the queue is empty.', () => {
      const myQueue = new Queue();
      expect(myQueue.size()).toBe(0);
    })

    test('Should be able to return the size of the queue.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.size()).toBe(4);
    })
    
  })

  describe('Should have a method to enqueue an item.', () => {

    test('Should be able to enqueue an item to the back of the queue.', () => {
      const myQueue = new Queue();
      expect(myQueue.size()).toBe(0)
      myQueue.enqueue('Test Item');
      expect(myQueue.size()).toBe(1)
      myQueue.enqueue('Test Item 2');
      expect(myQueue.size()).toBe(2)
      myQueue.enqueue('Test Item 3');
      expect(myQueue.size()).toBe(3)
      myQueue.enqueue('Test Item 4');
      expect(myQueue.peek()).toBe('Test Item');
      expect(myQueue.size()).toBe(4)
    })

    test('Should be able to enqueue multiple items in order from left to right using an array.', () => {
      const myQueue = new Queue();
      myQueue.enqueue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.peek()).toBe('Test Item');
      expect(myQueue.size()).toBe(4)
    })

    test('Should be able to enqueue an empty array if an empty array is passed.', () => {
      const myQueue = new Queue();
      myQueue.enqueue([]);
      expect(myQueue.peek()).toStrictEqual([]);
      expect(myQueue.size()).toBe(1)
    })

    test('Should be able to enqueue an array containing items if the second parameter is set to true.', () => {
      const myQueue = new Queue();
      myQueue.enqueue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], true);
      expect(myQueue.peek()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
      expect(myQueue.size()).toBe(1)
    })

  })

  describe('Should have a method to dequeue an item.', () => {

    test('Should be able to dequeue the next item in the queue and return that item.', () => {
      const myQueue = new Queue();
      myQueue.enqueue('Test Item');
      myQueue.enqueue('Test Item 2');
      myQueue.enqueue('Test Item 3');
      myQueue.enqueue('Test Item 4');
      expect(myQueue.size()).toBe(4)
      expect(myQueue.peek()).toBe('Test Item');
      expect(myQueue.dequeue()).toBe('Test Item');
      expect(myQueue.size()).toBe(3)
      expect(myQueue.peek()).toBe('Test Item 2');
    })

    test('Should return null if the queue is empty.', () => {
      const myQueue = new Queue();
      expect(myQueue.dequeue()).toBe(null);
    })

  })

  describe('Should have a method to check if the queue is empty.', () => {

    test('Should return true if the queue is empty.', () => {
      const myQueue = new Queue();
      expect(myQueue.isEmpty()).toBe(true);
    })

    test('Should return false if the queue is not empty.', () => {
      const myQueue = new Queue('Test Item');
      expect(myQueue.isEmpty()).toBe(false);
    })

  })

  describe('Should have a method to check if the queue is full.', () => {

    test('Should return true if the queue is full.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 4);
      expect(myQueue.isFull()).toBe(true);
    })

    test('Should return false if the queue is not full.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 5);
      expect(myQueue.isFull()).toBe(false);
    })

    test('Should return null if the queue has no maximum size.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myQueue.isFull()).toBe(null);
    })

  })

  describe('Should have a method to reverse the queue.', () => {

    test('Should reverse the order of the queue.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      myQueue.reverse();
      expect(myQueue.getQueue()).toEqual(expect.arrayContaining(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']));
    })

    test('Should reverse the order of the queue back to its original form if called twice.', () => {
      const myQueue = new Queue(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      myQueue.reverse();
      expect(myQueue.getQueue()).toEqual(expect.arrayContaining(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']));
      myQueue.reverse();
      expect(myQueue.getQueue()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
    })

    test('Should do nothing if the queue is empty.', () => {
      const myQueue = new Queue();
      myQueue.reverse();
      expect(myQueue.getQueue()).toEqual(expect.arrayContaining([]));
    })

  })

})