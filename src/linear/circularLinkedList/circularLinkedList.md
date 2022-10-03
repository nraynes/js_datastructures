[Back](../../../README.md)

## Circular Linked List

A circular linked list is exactly the same as a singly linked list except on the tail node there is a pointer to the head node for the next value, effectively forming a circle. A circular linked list is a list of nodes where each node has a pointer to the next node. The first node is an object, and contains some data and a pointer to the next node, if there is no next node then it is just null. The reason why it is called a "circular" linked list is because it can only be traversed in one direction. There are also doubly linked lists and circular linked lists that can be traversed in different ways. A linked list can contain any number of nodes and each node can contain any type of data. There is also usually a pointer to the tail of the list for easy access to it (Since if you didn't have the pointer you would need to traverse the whole list to get it every single time). A circular linked list might look something like this in diagram:

        {                                  {                                  {
    |- >  data: 'Some data 1'      / - - >   data: 'Some data 2'      / - - >   data: 'Some data 3'
    |     next: Pointer - - - - - /          next: Pointer - - - - - /          next: Pointer -----
    |   }                                  }                                  }                   |
    |_____________________________________________________________________________________________| 

You can create a new circular linked list with the following code.

**ES6:**    

    import { CLL } from 'complete_data_structures';

    const myCLL = new CLL()

**CommonJS:**    

    const { CLL } = require('complete_data_structures');

    const myCLL = new CLL();

You can also supply parameters to create a linked list with preloaded items. You can create a linked list with one item in it like this:    

    const myCLL = new CLL('SomeVariable');

Or if you want to insert multiple items into your new linked list, you can do so by passing in an array of items:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

But what if you want to add an empty array? Well you can do this too by just supplying an empty array:

    const myCLL = new CLL([]);

And finally if you want to add an array containing items as one item without it adding the contents of the array into individual items, you can set the third parameter to true, supplying a 0 for the second parameter:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3'], 0, true);

But why the third parameter? Well thats because the second parameter allows you to set a maximum size for the linked list so that it can't exceed a certain limit. If you supply a number greater than 0 it will then set the maximum size of the linked list to that number. If you supply a value of 0 or some other falsy value then the maximum size will be removed and the linked list will be free to grow as large as it wants. If you supply a number to set as the maximum size, if there are any values in the linked list that cause it to exceed the new maximum size then they will be removed automatically when you set the maximum size so be careful when doing this to a list that has items already in it. This also applies to when you try to initialize a linked list with items, if the size of the array you provided exceeds the maximum size your trying to set, it will not add all the items. If the linked list gets items cut off of it due to a maximum size being set, it cuts them from the tail of the linked list. Here is an example of initializing with a maximum size.

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3'], 8);

Here the maximum size is set to 8 so the linked list can never have more than 8 items in it at one time. 

**Methods:**

All of the properties in the linked list are private and use getter and setter methods to provide access when needed. This provides encapsulation and makes sure that values can't accidently be set to the wrong thing (Imagine trying to set the maximum size to a Array!). Here are the methods that are supported by the linked list implementation:

***getList***

This method is simple, you call it and it returns the entire linked list. Will return null if the list is empty.    
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.getList();
    // Expected Output: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar2',
            next: {
                data: 'SomeVar3',
                next: Ref (Head)
            }
        }
    }

***next***

When you instantiate a new linked list it will start with a state set to the head node. The next method will move the pointer to the next node if there is one and return its data. This is how you traverse through the list. On the last node, if you call next it will loop back to the head node.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.next();
    // Expected Output: 'SomeVar2'
    myStack.next();
    // Expected Output: 'SomeVar3'
    myStack.next();
    // Expected Output: 'SomeVar1'
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar2',
            next: {
                data: 'SomeVar3',
                next: Ref (Head)
            }
        }
    }

***current***

This will not move the pointer and just return the data from the node that the pointer is currently pointing to.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.current();
    // Expected Output: 'SomeVar1'
    myStack.next();
    // Expected Output: 'SomeVar2'
    myStack.current();
    // Expected Output: 'SomeVar2'
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar2',
            next: {
                data: 'SomeVar3',
                next: Ref (Head)
            }
        }
    }

***reset***

This will reset the pointer back to the head node. This does not return anything.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.current();
    // Expected Output: 'SomeVar1'
    myStack.next();
    // Expected Output: 'SomeVar2'
    myStack.current();
    // Expected Output: 'SomeVar2'
    myStack.reset();
    // Expected Output: undefined
    myStack.current();
    // Expected Output: 'SomeVar1'
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar2',
            next: {
                data: 'SomeVar3',
                next: Ref (Head)
            }
        }
    }

***getTail***

This will simply get the data from the tail node and return it.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.getTail();
    // Expected Output: 'SomeVar3'
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar2',
            next: {
                data: 'SomeVar3',
                next: Ref (Head)
            }
        }
    }

***size***

This will just return the current size of the list.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.size();
    // Expected Output: 3

***addToTail***

This will add an item to the tail of the list. You can also pass an array of items to add multiple items at once, or pass an empty array to add a node with an empty array, or set the second parameter to true if you want to add an array of items as a literal array of items. This works in the same way as when you instantiate a new linked list. This method does not return anything.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.getTail();
    // Expected Output: 'SomeVar3'
    myStack.addToTail('SomeVar4');
    // Expected Output: undefined
    myStack.getTail();
    // Expected Output: 'SomeVar4'
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar2',
            next: {
                data: 'SomeVar3',
                next: {
                    data: 'SomeVar4',
                    next: Ref (Head)
                }
            }
        }
    }

OR

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.getTail();
    // Expected Output: 'SomeVar3'
    myStack.addToTail(['SomeVar4', 'SomeVar5']);
    // Expected Output: undefined
    myStack.getTail();
    // Expected Output: 'SomeVar5'
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar2',
            next: {
                data: 'SomeVar3',
                next: {
                    data: 'SomeVar4',
                    next: {
                        data: 'SomeVar5',
                        next: Ref (Head)
                    }
                }
            }
        }
    }

OR

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.getTail();
    // Expected Output: 'SomeVar3'
    myStack.addToTail([]);
    // Expected Output: undefined
    myStack.getTail();
    // Expected Output: []
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar2',
            next: {
                data: 'SomeVar3',
                next: {
                    data: [],
                    next: Ref (Head)
                }
            }
        }
    }

OR

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.getTail();
    // Expected Output: 'SomeVar3'
    myStack.addToTail(['SomeVar4', 'SomeVar5'], true);
    // Expected Output: undefined
    myStack.getTail();
    // Expected Output: ['SomeVar4', 'SomeVar5']
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar2',
            next: {
                data: 'SomeVar3',
                next: {
                    data: ['SomeVar4', 'SomeVar5'],
                    next: Ref (Head)
                }
            }
        }
    }

***addToHead***

This method behaves exactly like the addToTail method except it adds items to the head of the list instead of the tail.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myStack.addToHead('SomeVar4');
    // Expected Output: undefined
    // Current List: {
        data: 'SomeVar4',
        next: {
            data: 'SomeVar1',
            next: {
                data: 'SomeVar2',
                next: {
                    data: 'SomeVar3',
                    next: Ref (Head)
                }
            }
        }
    }

***getMax***

Gets the maximum size of the list if there is one. Will return null if no maximum size is set.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3'], 4);

    myCLL.getMax()
    // Expected Output: 4

***setMax***

This will set the maximum size of the list. This will also remove any items from the tail of the list that go over the new maximum size you set. This method does not return anything.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myCLL.getMax()
    // Expected Output: null
    myCLL.setMax(4)
    // Expected Output: undefined
    myCLL.getMax()
    // Expected Output: 4

***isEmpty***

This will return whether or not the list is empty.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myCLL.isEmpty()
    // Expected Output: false

OR

    const myCLL = new CLL();

    myCLL.isEmpty()
    // Expected Output: true

***isFull***

This will check to see if the list is at the maximum size if one is set and return whether or not its full. If no maximum size is set it returns null.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myCLL.isFull()
    // Expected Output: null

OR

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3'], 3);

    myCLL.isFull()
    // Expected Output: true

OR

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3'], 4);

    myCLL.isFull()
    // Expected Output: false

***contains***

This will search through the list and find all of the nodes with data that match a given parameter. If nothing is found it will return null. It will return an array with all of the index numbers of each node found to have a match or if only one match was found it will return that index as a number. You can supply a boolean for the second parameter to tell it to do an extensive comparison. This will cause it to search for items by comparing the json string of each items data. This of course is a bit slower so if you don't have any array's, object's, or date's in your linked list then it's better to not have this parameter set as it will slow down the search a bit.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3', 'SomeVar3']);

    myCLL.contains('SomeVar2');
    // Expected Output: 1
    myCLL.contains('SomeVar7');
    // Expected Output: null
    myCLL.contains('SomeVar3');
    // Expected Output: [2, 3]

***getAt***

This will get the data from the node at the index number passed to it. Will return null if the number passed is negative or out of range.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);

    myCLL.getAt(1);
    // Expected Output: 'SomeVar2'
    myCLL.getAt(7);
    // Expected Output: null
    myCLL.getAt(-1);
    // Expected Output: null

***reverse***

This will reverse the linked lists order. This does not return anything.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);
    
    myCLL.reverse()
    // Expected Output: undefined
    // Current List: {
        data: 'SomeVar3',
        next: {
            data: 'SomeVar2',
            next: {
                data: 'SomeVar1',
                next: Ref (Head)
            }
        }
    }

***insertAt***

This will insert a node with data at a specific index. This does not return anything. The first parameter is the index you want to place the node at and the second parameter is data. You can add multiple items in the same way as addToHead and addToTail. The third parameter will tell the method to input your array as a literal array. You can also insert into the head or tail with this method.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);
    
    myCLL.insertAt(1, 'SomeVar0')
    // Expected Output: undefined
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar0',
            next: {
                data: 'SomeVar2',
                next: {
                    data: 'SomeVar3',
                    next: Ref (Head)
                }
            }
        }
    }

***removeAt***

This will remove a node at a specific index and return the data that was in that node. It will return null if a negative number or an out of range number is supplied. You can also remove the head or tail with this method.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);
    
    myCLL.removeAt(1)
    // Expected Output: 'SomeVar2'
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar3',
            next: Ref (Head)
        }
    }

***removeTail***

This will remove the tail node from the list and return the data that was in that node.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);
    
    myCLL.removeTail()
    // Expected Output: 'SomeVar3'
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar2',
            next: Ref (Head)
        }
    }

***removeHead***

This will remove the head node from the list and return the data that was in that node.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3']);
    
    myCLL.removeHead()
    // Expected Output: 'SomeVar1'
    // Current List: {
        data: 'SomeVar2',
        next: {
            data: 'SomeVar3',
            next: Ref (Head)
        }
    }

***removeData***

This will remove all the nodes that match the data provided. You can use extensive comparison with this method just like you can with contains by setting the second parameter to true. The return value is the number of nodes that were removed.
EXAMPLE:

    const myCLL = new CLL(['SomeVar1', 'SomeVar2', 'SomeVar3', 'SomeVar2', 'SomeVar2']);
    
    myCLL.removeData('SomeVar2')
    // Expected Output: 3
    // Current List: {
        data: 'SomeVar1',
        next: {
            data: 'SomeVar3',
            next: Ref (Head)
        }
    }