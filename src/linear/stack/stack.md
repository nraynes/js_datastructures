[Back](../../../README.md)

## Stack:

The stack is a data structure that acts almost like a stack of cards. When you set a stack of cards on a table, you can only draw from and place on the top of the stack. This is called LIFO (Last In First Out), and means that the last item put into the stack (meaning the item that was put in most recently) is going to be the first one that will be taken from the stack. You can load the stack with any value type of your choosing, and the stack can hold multiple different types of values at once.
You can create a new stack with the following code.    
    
**ES6:**    

    import { Stack } from 'complete_data_structures';

    const myStack = new Stack()

**CommonJS:**    

    const { Stack } = require('complete_data_structures');

    const myStack = new Stack();
    
You can also supply parameters to create a stack with preloaded items. You can create a stack with one item in it like this:    

    const myStack = new Stack('SomeVariable');

Or if you want to insert multiple items into your new stack, you can do so by passing in an array of items:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

But what if you want to add an empty array? Well you can do this too by just supplying an empty array:

    const myStack = new Stack([]);

And finally if you want to add an array containing items as one item without it adding the contents of the array into individual items, you can set the third parameter to true, supplying a 0 for the second parameter:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3'], 0, true);

But why the third parameter? Well thats because the second parameter allows you to set a maximum size for the stack so that it can't exceed a certain limit. If you supply a number greater than 0 it will then set the maximum size of the stack to that number. If you supply a value of 0 or some other falsy value then the maximum size will be removed and the stack will be free to grow as large as it wants. If you supply a number to set as the maximum size, if there are any values in the stack that cause it to exceed the new maximum size then they will be removed automatically when you set the maximum size so be careful when doing this to a list that has items already in it. This also applies to when you try to initialize a stack with items, if the size of the array you provided exceeds the maximum size your trying to set, it will not add all the items. If the stack gets items cut off of it due to a maximum size being set, it cuts them from the top of the stack. Here is an example of initializing with a maximum size.

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3'], 8);

Here the maximum size is set to 8 so the stack can never have more than 8 items in it at one time.    
    
**Methods:**

All of the properties in the stack are private and use getter and setter methods to provide access when needed. This provides encapsulation and makes sure that values can't accidently be set to the wrong thing (Imagine trying to set the maximum size to a Array!). Here are the methods that are supported by the stack implementation:

***getStack***

This method is simple, you call it and it returns the entire stack. Will return null if the stack is empty.    
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.getStack();
    // Expected Output: ['SomeVar1', 'SomeVar2', 'SomeVar3']

***push***

This allows you to push an item to the top of the stack much the same way you would do in an array. NOTE: This does not return anything.    
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.push('SomeVar4');
    // Expected Output: undefined
    // Current Stack: ['SomeVar1', 'SomeVar2', 'SomeVar3', 'SomeVar4']

You can also push multple items at once by supplying an array of items or supply an empty array to push an empty array to the stack in the same way you can when you create the stack. The second parameter being set to true allows you to push a literal array containing items to the stack.    
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.push(['SomeVar4', 'SomeVar5], true);
    // Expected Output: undefined
    // Current Stack: ['SomeVar1', 'SomeVar2', 'SomeVar3', 'SomeVar4', ['SomeVar4', 'SomeVar5]]

***pop***

This method will remove the item that is on the top of the stack and return it. It will return null if the stack is empty.    
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.pop();
    // Expected Output: 'SomeVar3'
    // Current Stack: ['SomeVar1', 'SomeVar2']

***peek***

This method will return the item at the top of the stack without removing it. It will return null if the stack is empty.    
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.peek();
    // Expected Output: 'SomeVar3'
    // Current Stack: ['SomeVar1', 'SomeVar2', 'SomeVar3']

***isEmpty***

This will return whether or not the stack is empty.    
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.isEmpty()
    // Expected Output: false

OR    

    const myStack = new Stack();

    myStack.isEmpty()
    // Expected Output: true

***isFull***

As the name implies, checks if the stacks size is at the maximum size. It will return null if there is no maximum size set.    
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3'], 3);

    myStack.isFull()
    // Expected Output: true

OR    

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3'], 4);

    myStack.isEmpty()
    // Expected Output: false

OR    

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.isEmpty()
    // Expected Output: null

***getMax***

Will return the maximum size if one is set. Will return null if no maximum size is set.    
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3'], 4);

    myStack.getMax()
    // Expected Output: 4

***setMax***

Will set the maximum size if a number greater than 0 is supplied. Will remove the maximum if a 0 or other falsy value is supplied. Does not return anything. Will cut the stack if the size is currently greater than the new maximum.    
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.setMax(4)
    // Expected Output: undefined

***size***

Returns the size of the stack.
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.size()
    // Expected Output: 3

***reverse***

Will reverse the order of the stack. Does not return anything.
EXAMPLE:

    const myStack = new Stack(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.reverse()
    // Expected Output: undefined
    // Current Stack: ['SomeVar3', 'SomeVar2', 'SomeVar1']