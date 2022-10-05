# Complete Data Structures

All common data structures implemented in one package. All data structures are FULLY TESTED. Just grab the data structure you need and start using it right away!    
You can also import the different components used in each data structure, such as linked list node or hash table buckets. Here is an example:

**ES6**

    import { SLLNode, DLLNode, CLLNode, BucketNode, Bucket } from 'complete_data_structures';

**CommonJS**

    const { SLLNode, DLLNode, CLLNode, BucketNode, Bucket } = require('complete_data_structures');


## Installation:

    npm install complete_data_structures

## Current Features

  - [Stack](./src/linear/stack/stack.md)
  - [Queue](./src/linear/queue/queue.md)
  - [Deque](./src/linear/deque/deque.md)
  - [Singly Linked List](./src/linear/singlyLinkedList/singlyLinkedList.md)
  - [Doubly Linked List](./src/linear/doublyLinkedList/doublyLinkedList.md)
  - [Circular Linked List](./src/linear/circularLinkedList/circularLinkedList.md)

## Future Updates

These are the next items to be worked on for future updates.
  - The next data structure to be implemented will be a fully tested directed graph.
  - Dijkstra's Algorithm will be baked into the directed graph as a helper function.
  - HashTable and Bucket classes will improved upon to include features such as:
    - instantiating and with multiple items.
    - inserting multiple items with one command.
    - The ability to set a maximum size of the table.
    - isEmpty and isFull functions
    - Method to find the number of items in the table with a certain value and supply an array with their keys.
    - Method to remove all items containing a certain value.

## Version History

**v1.1.7**
  - Added type checking error tests to all data structures.
  - Added tests for HashTable, Bucket, and BucketNode.

**v1.1.6**
  - Added a simple hash table data structure, implemented with linked list buckets.
  - Fixed a problem with not being able to import doubly linked list or doubly linked list node.

**v1.1.5**
Added markdown files for singly linked list, doubly linked list, and circular linked list.

**v1.1.4**
Fixed README so that links to detailed data structure descriptions would work.

**v1.1.3:**
This update includes the following changes:
  - Some tests for the doubly linked list were changed to include extra edge cases.
  - Added a true circular linked list that has been fully tested. It does exactly the same thing as the original circular linked list except it works by having a reference to the head node on the tail node.
  - Made a proper README with different markdown files for stack, queue, and deque data structures.

**v1.1.2:**
All linear data structure are complete in this version. This includes:
  - Stack
  - Queue
  - Deque (Double Ended Queue)
  - Singly Linked List
  - Circular Linked List
  - Doubly Linked List