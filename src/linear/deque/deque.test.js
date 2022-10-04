const Deque = require('./deque');

describe('Deque Data Structure', () => {

  describe('Should be able to be initialized with the new keyword.', () => {

    test('Should be able to instantiate an empty deque.', () => {
      const myDeque = new Deque();
      expect(myDeque.peekRear()).toBe(null);
    })

    test('Should be able to instantiate a deque with one item using one parameter.', () => {
      const myDeque = new Deque('Test Item');
      expect(myDeque.peekRear()).toBe('Test Item');
    })

    test('Should be able to instantiate a deque with multiple items using an array.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.peekRear()).toBe('Test Item');
      expect(myDeque.size()).toBe(4)
    })

    test('Should be able to instantiate a deque with an empty array if an empty array is passed.', () => {
      const myDeque = new Deque([]);
      expect(myDeque.peekRear()).toStrictEqual([]);
    })

    test('Should be able to instantiate a deque with an array containing items if the third parameter is set to true.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 0, true);
      expect(myDeque.peekRear()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
      expect(myDeque.size()).toBe(1);
    })

    test('Should be able to instantiate a deque with a maximum size using a second parameter.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 5);
      expect(myDeque.peekRear()).toBe('Test Item');
      expect(myDeque.size()).toBe(4)
      myDeque.enqueueFront('Test Item 5');
      expect(myDeque.size()).toBe(5)
      myDeque.enqueueFront('Test Item 6');
      expect(myDeque.size()).toBe(5)
    })

    test('Should not be able to instantiate a deque with a maximum size of 0.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 0);
      expect(myDeque.peekRear()).toBe('Test Item');
      expect(myDeque.size()).toBe(4)
      myDeque.enqueueFront('Test Item 5');
      expect(myDeque.size()).toBe(5)
      myDeque.enqueueFront('Test Item 6');
      expect(myDeque.size()).toBe(6)
    })
    
    test('Should throw an error if any of the parameters do not match the correct type.', () => {
      try {
        const myDeque = new Deque('Test', 'Test');
      } catch (e) {
        expect(e).toEqual(expect.any(String))
      }
      try {
        const myDeque = new Deque('Test', 0, 'Test');
      } catch (e) {
        expect(e).toEqual(expect.any(String))
      }
    })

  })

  describe('Should have a method to set the max size after a deque has been instantiated.', () => {

    test('Should be able to set the maximum size.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.peekRear()).toBe('Test Item');
      expect(myDeque.size()).toBe(4)
      myDeque.enqueueFront('Test Item 5');
      expect(myDeque.size()).toBe(5)
      myDeque.setMax(5);
      myDeque.enqueueFront('Test Item 6');
      expect(myDeque.size()).toBe(5)
    })

    test('Should be able to clip off all of the next items in the deque that go over the new maximum size.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.peekRear()).toBe('Test Item');
      expect(myDeque.size()).toBe(4)
      myDeque.enqueueFront('Test Item 5');
      expect(myDeque.size()).toBe(5)
      myDeque.setMax(3);
      myDeque.enqueueFront('Test Item 6');
      expect(myDeque.size()).toBe(3)
    })

    test('Should be able to remove the max size limit if a 0 is passed.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.peekRear()).toBe('Test Item');
      expect(myDeque.size()).toBe(4)
      myDeque.enqueueFront('Test Item 5');
      expect(myDeque.size()).toBe(5)
      myDeque.setMax(5);
      myDeque.enqueueFront('Test Item 6');
      expect(myDeque.size()).toBe(5)
      myDeque.setMax(0);
      myDeque.enqueueFront('Test Item 6');
      expect(myDeque.size()).toBe(6)
    })

    test('Should throw an error if the wrong type is supplied.', () => {
      try {
        const myDeque = new Deque();
        myDeque.setMax(true)
      } catch (e) {
        expect(e).toEqual(expect.any(String))
      }
    })

  })

  describe('Should have a method to get the maximum size of the deque.', () => {

    test('Should return null if there is no maximum size.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.getMax()).toBe(null)
    })

    test('Should return with the maximum size.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 5);
      expect(myDeque.getMax()).toBe(5)
    })

  })

  describe('Should not be able to access list property directly.', () => {
    
    test('Should return with undefined if list property is accessed directly.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.list).toBe(undefined);
    })

  })

  describe('Should be able to access deque with getter method.', () => {

    test('Should be able to get the whole deque by accessing the getDeque getter method.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.getDeque()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
    })

    test('Should return an empty array if the deque is empty.', () => {
      const myDeque = new Deque();
      expect(myDeque.getDeque()).toEqual(expect.arrayContaining([]));
    })

  })

  describe('Should have a peekRear method to see what is next in the deque from the rear.', () => {

    test('Should return null if the deque is empty.', () => {
      const myDeque = new Deque();
      expect(myDeque.peekRear()).toBe(null);
    })

    test('Should return the next item in the deque from the rear if deque is not empty.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.peekRear()).toBe('Test Item');
    })

  })

  describe('Should have a peekFront method to see what is next in the deque from the front.', () => {

    test('Should return null if the deque is empty.', () => {
      const myDeque = new Deque();
      expect(myDeque.peekFront()).toBe(null);
    })

    test('Should return the next item in the deque from the front if deque is not empty.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.peekFront()).toBe('Test Item 4');
    })

  })

  describe('Should have a method to get the current size of a deque.', () => {

    test('Should return 0 if the deque is empty.', () => {
      const myDeque = new Deque();
      expect(myDeque.size()).toBe(0);
    })

    test('Should be able to return the size of the deque.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.size()).toBe(4);
    })
    
  })

  describe('Should have a method to enqueue an item from the front.', () => {

    test('Should be able to enqueue an item to the front of the deque.', () => {
      const myDeque = new Deque();
      expect(myDeque.size()).toBe(0)
      myDeque.enqueueFront('Test Item');
      expect(myDeque.size()).toBe(1)
      myDeque.enqueueFront('Test Item 2');
      expect(myDeque.size()).toBe(2)
      myDeque.enqueueFront('Test Item 3');
      expect(myDeque.size()).toBe(3)
      myDeque.enqueueFront('Test Item 4');
      expect(myDeque.peekRear()).toBe('Test Item');
      expect(myDeque.size()).toBe(4)
    })

    test('Should be able to enqueue multiple items in order from left to right using an array.', () => {
      const myDeque = new Deque();
      myDeque.enqueueFront(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.peekRear()).toBe('Test Item');
      expect(myDeque.size()).toBe(4)
    })

    test('Should be able to enqueue an empty array if an empty array is passed.', () => {
      const myDeque = new Deque();
      myDeque.enqueueFront([]);
      expect(myDeque.peekRear()).toStrictEqual([]);
      expect(myDeque.size()).toBe(1)
    })

    test('Should be able to enqueue an array containing items if the second parameter is set to true.', () => {
      const myDeque = new Deque();
      myDeque.enqueueFront(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], true);
      expect(myDeque.peekRear()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
      expect(myDeque.size()).toBe(1)
    })

    test('Should throw an error if incorrect type is passed for the second parameter.', () => {
      const myDeque = new Deque();
      try {
        myDeque.enqueueFront([],54);
      } catch (e) {
        expect(e).toEqual(expect.any(String))
      }
    })

  })

  describe('Should have a method to enqueue an item from the rear.', () => {

    test('Should be able to enqueue an item to the rear of the deque.', () => {
      const myDeque = new Deque();
      expect(myDeque.size()).toBe(0)
      myDeque.enqueueRear('Test Item');
      expect(myDeque.size()).toBe(1)
      myDeque.enqueueRear('Test Item 2');
      expect(myDeque.size()).toBe(2)
      myDeque.enqueueRear('Test Item 3');
      expect(myDeque.size()).toBe(3)
      myDeque.enqueueRear('Test Item 4');
      expect(myDeque.peekFront()).toBe('Test Item');
      expect(myDeque.size()).toBe(4)
    })

    test('Should be able to enqueue multiple items in order from left to right using an array.', () => {
      const myDeque = new Deque();
      myDeque.enqueueRear(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.peekFront()).toBe('Test Item');
      expect(myDeque.size()).toBe(4)
    })

    test('Should be able to enqueue an empty array if an empty array is passed.', () => {
      const myDeque = new Deque();
      myDeque.enqueueRear([]);
      expect(myDeque.peekFront()).toStrictEqual([]);
      expect(myDeque.size()).toBe(1)
    })

    test('Should be able to enqueue an array containing items if the second parameter is set to true.', () => {
      const myDeque = new Deque();
      myDeque.enqueueRear(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], true);
      expect(myDeque.peekFront()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
      expect(myDeque.size()).toBe(1)
    })

    test('Should throw an error if incorrect type is passed for the second parameter.', () => {
      const myDeque = new Deque();
      try {
        myDeque.enqueueRear([],54);
      } catch (e) {
        expect(e).toEqual(expect.any(String))
      }
    })

  })

  describe('Should have a method to dequeue an item from the rear.', () => {

    test('Should be able to dequeue the next item in the deque from the rear and return that item.', () => {
      const myDeque = new Deque();
      myDeque.enqueueFront('Test Item');
      myDeque.enqueueFront('Test Item 2');
      myDeque.enqueueFront('Test Item 3');
      myDeque.enqueueFront('Test Item 4');
      expect(myDeque.size()).toBe(4)
      expect(myDeque.peekRear()).toBe('Test Item');
      expect(myDeque.dequeueRear()).toBe('Test Item');
      expect(myDeque.size()).toBe(3)
      expect(myDeque.peekRear()).toBe('Test Item 2');
    })

    test('Should return null if the deque is empty.', () => {
      const myDeque = new Deque();
      expect(myDeque.dequeueRear()).toBe(null);
    })

  })

  describe('Should have a method to dequeue an item from the front.', () => {

    test('Should be able to dequeue the next item in the deque from the front and return that item.', () => {
      const myDeque = new Deque();
      myDeque.enqueueFront('Test Item');
      myDeque.enqueueFront('Test Item 2');
      myDeque.enqueueFront('Test Item 3');
      myDeque.enqueueFront('Test Item 4');
      expect(myDeque.size()).toBe(4)
      expect(myDeque.peekFront()).toBe('Test Item 4');
      expect(myDeque.dequeueFront()).toBe('Test Item 4');
      expect(myDeque.size()).toBe(3)
      expect(myDeque.peekFront()).toBe('Test Item 3');
    })

    test('Should return null if the deque is empty.', () => {
      const myDeque = new Deque();
      expect(myDeque.dequeueFront()).toBe(null);
    })

  })

  describe('Should have a method to check if the deque is empty.', () => {

    test('Should return true if the deque is empty.', () => {
      const myDeque = new Deque();
      expect(myDeque.isEmpty()).toBe(true);
    })

    test('Should return false if the deque is not empty.', () => {
      const myDeque = new Deque('Test Item');
      expect(myDeque.isEmpty()).toBe(false);
    })

  })

  describe('Should have a method to check if the deque is full.', () => {

    test('Should return true if the deque is full.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 4);
      expect(myDeque.isFull()).toBe(true);
    })

    test('Should return false if the deque is not full.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4'], 5);
      expect(myDeque.isFull()).toBe(false);
    })

    test('Should return null if the deque has no maximum size.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myDeque.isFull()).toBe(null);
    })

  })

  describe('Should have a method to reverse the deque.', () => {

    test('Should reverse the order of the deque.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      myDeque.reverse();
      expect(myDeque.getDeque()).toEqual(expect.arrayContaining(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']));
    })

    test('Should reverse the order of the deque back to its original form if called twice.', () => {
      const myDeque = new Deque(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      myDeque.reverse();
      expect(myDeque.getDeque()).toEqual(expect.arrayContaining(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']));
      myDeque.reverse();
      expect(myDeque.getDeque()).toEqual(expect.arrayContaining(['Test Item 4', 'Test Item 3', 'Test Item 2', 'Test Item']));
    })

    test('Should do nothing if the deque is empty.', () => {
      const myDeque = new Deque();
      myDeque.reverse();
      expect(myDeque.getDeque()).toEqual(expect.arrayContaining([]));
    })

  })

})