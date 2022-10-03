[Back](../../../README.md)

## Queue

A queue is similar to a stack in that it is a list of items however differs in where items can be inserted from. Think of a queue as an line at the grocery store checkout, you can only insert a person at the beginning and remove from the end when they are done checking out. Items move through the queue much like they would in a grocery store checkout line where one item gets removed and the next item after it is next in line. This is called First In First Out (FIFO) where the first item that went in (meaning the item that was put in before all of the other items) will be the first one to be retrieved. This queue can hold many different values and different types of values at once just as the queue can.

**ES6:**    

    import { Queue } from 'complete_data_structures';

    const myQueue = new Queue()

**CommonJS:**    

    const { Queue } = require('complete_data_structures');

    const myQueue = new Queue();

You can also supply parameters to create a queue with preloaded items. You can create a queue with one item in it like this:    

    const myQueue = new Queue('SomeVariable');

Or if you want to insert multiple items into your new queue, you can do so by passing in an array of items (Items will be input from left to right, so the array you supply will be reversed in the queue):

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

But what if you want to add an empty array? Well you can do this too by just supplying an empty array:

    const myQueue = new Queue([]);

And finally if you want to add an array containing items as one item without it adding the contents of the array into individual items, you can set the third parameter to true, supplying a 0 for the second parameter:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3'], 0, true);

But why the third parameter? Well thats because the second parameter allows you to set a maximum size for the queue so that it can't exceed a certain limit. If you supply a number greater than 0 it will then set the maximum size of the queue to that number. If you supply a value of 0 or some other falsy value then the maximum size will be removed and the queue will be free to grow as large as it wants. If you supply a number to set as the maximum size, if there are any values in the queue that cause it to exceed the new maximum size then they will be removed automatically when you set the maximum size so be careful when doing this to a list that has items already in it. This also applies to when you try to initialize a queue with items, if the size of the array you provided exceeds the maximum size your trying to set, it will not add all the items. If the queue gets items cut off of it due to a maximum size being set, it cuts them from the front of the queue. Here is an example of initializing with a maximum size.

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3'], 8);

Here the maximum size is set to 8 so the queue can never have more than 8 items in it at one time.    

**Methods:**

All of the properties in the queue are private and use getter and setter methods to provide access when needed. This provides encapsulation and makes sure that values can't accidently be set to the wrong thing (Imagine trying to set the maximum size to a Array!). Here are the methods that are supported by the queue implementation:

***getQueue***

This method is simple, you call it and it returns the entire queue. Will return null if the queue is empty.    
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myQueue.getQueue();
    // Expected Output: ['SomeVar3', 'SomeVar2', 'SomeVar1']

***enqueue***

This allows you to queue an item to the back of the queue. NOTE: This does not return anything.    
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myQueue.enqueue('SomeVar4');
    // Expected Output: undefined
    // Current Queue: ['SomeVar4', 'SomeVar3', 'SomeVar2', 'SomeVar1']

You can also queue multple items at once by supplying an array of items or supply an empty array to push an empty array to the queue in the same way you can when you create the queue. The second parameter being set to true allows you to push a literal array containing items to the queue.    
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myQueue.enqueue(['SomeVar4', 'SomeVar5], true);
    // Expected Output: undefined
    // Current Queue: [['SomeVar4', 'SomeVar5], 'SomeVar4', 'SomeVar3', 'SomeVar2', 'SomeVar1']

***dequeue***

This method will remove the item that is at the front of the queue and return it. It will return null if the queue is empty.    
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myQueue.dequeue();
    // Expected Output: 'SomeVar1'
    // Current Queue: ['SomeVar3', 'SomeVar2']

***peek***

This method will return the item at the front of the queue without removing it. It will return null if the queue is empty.    
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myQueue.peek();
    // Expected Output: 'SomeVar1'
    // Current Queue: ['SomeVar3', 'SomeVar2', 'SomeVar1']

***isEmpty***

This will return whether or not the queue is empty.    
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myQueue.isEmpty()
    // Expected Output: false

OR    

    const myQueue = new Queue();

    myQueue.isEmpty()
    // Expected Output: true

***isFull***

As the name implies, checks if the queues size is at the maximum size. It will return null if there is no maximum size set.    
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3'], 3);

    myQueue.isFull()
    // Expected Output: true

OR    

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3'], 4);

    myQueue.isEmpty()
    // Expected Output: false

OR    

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myQueue.isEmpty()
    // Expected Output: null

***getMax***

Will return the maximum size if one is set. Will return null if no maximum size is set.    
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3'], 4);

    myQueue.getMax()
    // Expected Output: 4

***setMax***

Will set the maximum size if a number greater than 0 is supplied. Will remove the maximum if a 0 or other falsy value is supplied. Does not return anything. Will cut the queue if the size is currently greater than the new maximum.    
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myQueue.setMax(4)
    // Expected Output: undefined

***size***

Returns the size of the queue.
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myQueue.size()
    // Expected Output: 3

***reverse***

Will reverse the order of the queue. Does not return anything.
EXAMPLE:

    const myQueue = new Queue(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myQueue.reverse()
    // Expected Output: undefined
    // Current Queue: ['SomeVar1', 'SomeVar2', 'SomeVar3']