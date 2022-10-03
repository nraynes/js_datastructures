[Back](../../../README.md)

## Singly Linked List

A singly linked list is a list of nodes where each node has a pointer to the next node. The first node is an object, and contains some data and a pointer to the next node, if there is no next node then it is just null. The reason why it is called a "Singly" linked list is because it can only be traversed in one direction. There are also doubly linked lists and circular linked lists that can be traversed in different ways. A linked list can contain any number of nodes and each node can contain any type of data. There is also usually a pointer to the tail of the list for easy access to it (Since if you didn't have the pointer you would need to traverse the whole list to get it every single time). A singly linked list might look something like this in diagram:

    {                                  {                                  {
      data: 'Some data 1'      / - - >   data: 'Some data 2'      / - - >   data: 'Some data 3'
      next: Pointer - - - - - /          next: Pointer - - - - - /          next: null
    }                                  }                                  }

**ES6:**    

    import { SLL } from 'complete_data_structures';

    const mySLL = new SLL()

**CommonJS:**    

    const { SLL } = require('complete_data_structures');

    const mySLL = new SLL();

You can also supply parameters to create a linked list with preloaded items. You can create a linked list with one item in it like this:    

    const mySLL = new SLL('SomeVariable');

Or if you want to insert multiple items into your new linked list, you can do so by passing in an array of items:

    const mySLL = new SLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

But what if you want to add an empty array? Well you can do this too by just supplying an empty array:

    const mySLL = new SLL([]);

And finally if you want to add an array containing items as one item without it adding the contents of the array into individual items, you can set the third parameter to true, supplying a 0 for the second parameter:

    const mySLL = new SLL(['SomeVar1', 'SomeVar2', 'SomeVar3'], 0, true);

But why the third parameter? Well thats because the second parameter allows you to set a maximum size for the linked list so that it can't exceed a certain limit. If you supply a number greater than 0 it will then set the maximum size of the linked list to that number. If you supply a value of 0 or some other falsy value then the maximum size will be removed and the linked list will be free to grow as large as it wants. If you supply a number to set as the maximum size, if there are any values in the linked list that cause it to exceed the new maximum size then they will be removed automatically when you set the maximum size so be careful when doing this to a list that has items already in it. This also applies to when you try to initialize a linked list with items, if the size of the array you provided exceeds the maximum size your trying to set, it will not add all the items. If the linked list gets items cut off of it due to a maximum size being set, it cuts them from the tail of the linked list. Here is an example of initializing with a maximum size.

    const mySLL = new SLL(['SomeVar1', 'SomeVar2', 'SomeVar3'], 8);

Here the maximum size is set to 8 so the linked list can never have more than 8 items in it at one time. 

**Methods:**

All of the properties in the linked list are private and use getter and setter methods to provide access when needed. This provides encapsulation and makes sure that values can't accidently be set to the wrong thing (Imagine trying to set the maximum size to a Array!). Here are the methods that are supported by the linked list implementation:

**Method descriptions are coming soon**