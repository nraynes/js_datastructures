[Back](../../../README.md)

## Deque

A deque is a double ended queue. This means that you can insert and remove from both sides. Other than that it is exactly the same as a queue. Below is how you create a new deque.

**ES6:**    

    import { Deque } from 'complete_data_structures';

    const myDeque = new Deque()

**CommonJS:**    

    const { Deque } = require('complete_data_structures');

    const myDeque = new Deque();

You can also supply parameters to create a deque with preloaded items. You can create a deque with one item in it like this:    

    const myDeque = new Deque('SomeVariable');

Or if you want to insert multiple items into your new deque, you can do so by passing in an array of items (Items will be input from left to right, so the array you supply will be reversed in the deque. Items will be inserted into the back of the queue like normal):

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

But what if you want to add an empty array? Well you can do this too by just supplying an empty array:

    const myDeque = new Deque([]);

And finally if you want to add an array containing items as one item without it adding the contents of the array into individual items, you can set the third parameter to true, supplying a 0 for the second parameter:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3'], 0, true);

But why the third parameter? Well thats because the second parameter allows you to set a maximum size for the deque so that it can't exceed a certain limit. If you supply a number greater than 0 it will then set the maximum size of the deque to that number. If you supply a value of 0 or some other falsy value then the maximum size will be removed and the deque will be free to grow as large as it wants. If you supply a number to set as the maximum size, if there are any values in the deque that cause it to exceed the new maximum size then they will be removed automatically when you set the maximum size so be careful when doing this to a list that has items already in it. This also applies to when you try to initialize a deque with items, if the size of the array you provided exceeds the maximum size your trying to set, it will not add all the items. If the deque gets items cut off of it due to a maximum size being set, it cuts them from the front of the deque. Here is an example of initializing with a maximum size.

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3'], 8);

Here the maximum size is set to 8 so the deque can never have more than 8 items in it at one time.    

**Methods:**

All of the properties in the deque are private and use getter and setter methods to provide access when needed. This provides encapsulation and makes sure that values can't accidently be set to the wrong thing (Imagine trying to set the maximum size to a Array!). Here are the methods that are supported by the deque implementation:

***getDeque***

This method is simple, you call it and it returns the entire deque. Will return null if the deque is empty.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.getDeque();
    // Expected Output: ['SomeVar3', 'SomeVar2', 'SomeVar1']

***enqueueRear***

This allows you to queue an item to the back of the deque. NOTE: This does not return anything.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.enqueueRear('SomeVar4');
    // Expected Output: undefined
    // Current Deque: ['SomeVar4', 'SomeVar3', 'SomeVar2', 'SomeVar1']

You can also queue multple items at once by supplying an array of items or supply an empty array to push an empty array to the deque in the same way you can when you create the deque. The second parameter being set to true allows you to push a literal array containing items to the deque.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.enqueueRear(['SomeVar4', 'SomeVar5], true);
    // Expected Output: undefined
    // Current Deque: [['SomeVar4', 'SomeVar5], 'SomeVar4', 'SomeVar3', 'SomeVar2', 'SomeVar1']

***enqueueFront***

This allows you to queue an item to the front of the deque. NOTE: This does not return anything.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.enqueueFront('SomeVar4');
    // Expected Output: undefined
    // Current Deque: ['SomeVar3', 'SomeVar2', 'SomeVar1', 'SomeVar4']

You can also queue multple items at once by supplying an array of items or supply an empty array to push an empty array to the deque in the same way you can when you create the deque. The second parameter being set to true allows you to push a literal array containing items to the deque.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.enqueueFront(['SomeVar4', 'SomeVar5], true);
    // Expected Output: undefined
    // Current Deque: ['SomeVar4', 'SomeVar3', 'SomeVar2', 'SomeVar1', ['SomeVar4', 'SomeVar5]]

***dequeueFront***

This method will remove the item that is at the front of the deque and return it. It will return null if the deque is empty.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.dequeueFront();
    // Expected Output: 'SomeVar1'
    // Current Deque: ['SomeVar3', 'SomeVar2']

***dequeueRear***

This method will remove the item that is at the front of the deque and return it. It will return null if the deque is empty.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.dequeueRear();
    // Expected Output: 'SomeVar3'
    // Current Deque: ['SomeVar2', 'SomeVar1']

***peekFront***

This method will return the item at the front of the deque without removing it. It will return null if the deque is empty.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.peekFront();
    // Expected Output: 'SomeVar1'
    // Current Deque: ['SomeVar3', 'SomeVar2', 'SomeVar1']

***peekRear***

This method will return the item at the front of the deque without removing it. It will return null if the deque is empty.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.peekRear();
    // Expected Output: 'SomeVar3'
    // Current Deque: ['SomeVar3', 'SomeVar2', 'SomeVar1']

***isEmpty***

This will return whether or not the deque is empty.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.isEmpty()
    // Expected Output: false

OR    

    const myDeque = new Deque();

    myDeque.isEmpty()
    // Expected Output: true

***isFull***

As the name implies, checks if the deques size is at the maximum size. It will return null if there is no maximum size set.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3'], 3);

    myDeque.isFull()
    // Expected Output: true

OR    

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3'], 4);

    myDeque.isEmpty()
    // Expected Output: false

OR    

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.isEmpty()
    // Expected Output: null

***getMax***

Will return the maximum size if one is set. Will return null if no maximum size is set.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3'], 4);

    myDeque.getMax()
    // Expected Output: 4

***setMax***

Will set the maximum size if a number greater than 0 is supplied. Will remove the maximum if a 0 or other falsy value is supplied. Does not return anything. Will cut the deque if the size is currently greater than the new maximum.    
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.setMax(4)
    // Expected Output: undefined

***size***

Returns the size of the deque.
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.size()
    // Expected Output: 3

***reverse***

Will reverse the order of the deque. Does not return anything.
EXAMPLE:

    const myDeque = new Deque(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myDeque.reverse()
    // Expected Output: undefined
    // Current Deque: ['SomeVar1', 'SomeVar2', 'SomeVar3']