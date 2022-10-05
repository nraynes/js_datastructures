[Back](../../../README.md)

## Hash Table

The hash table is a data structure that makes searching by key very efficient. The basic operation of a hash table is when you supply a key-value pair, the key is put through a hash function to turn it into an index value for where it should go in an array of a preset size. This way the index is gotten with the key itself and you can access the item directly. This will give you a time complexity of O(1). However, there are often collisions with hash tables since they have to be a preset size. This means that sometimes a different key will output the same index value as another key already in the table and want to take the spot from that original key. There are multple ways to solve this problem however this implementation uses buckets to solve the issue. These buckets are essentially just linked lists that are used to store multiple values that have the same index hash. So when you are looking for a value and it's hashed index has multiple other values in there, you then begin to search linearly through the bucket (linked list) to find the value you are looking for. This makes your time complexity O(1) only when the item you are searching for is at the beginning of the bucket, otherwise it is O(n). A hash table can be programmed to increase its set size and rehash all of the data values using the new size if the buckets become too large. This will be O(n) because the larger the size of the table the longer it will take to rehash all of the values. This will however alleviate the time complexity issues from the buckets because it keeps the buckets to a specific size. Here is how you can import the hash table.

**ES6:**    

    import { HashTable } from 'complete_data_structures';

    const myTable = new HashTable()

**CommonJS:**    

    const { HashTable } = require('complete_data_structures');

    const myTable = new HashTable();

When you declare a new hash table, you cannot currently instantiate it with an item. This feature will be added later on. However, you can give your table a custom size if you'd like. The default size is 128. Here is how you set the size yourself.

    const { HashTable } = require('complete_data_structures');

    const myTable = new HashTable(256);

This will set the size of this new hash table to 256. What this means is that this hash table is now capable of holding 256 buckets, however, all elements will be empty to start and a bucket will only be created in the table when some data is put into it.

**Methods:**

All of the properties in the hash table are private and use getter and setter methods to provide access when needed. This provides encapsulation and makes sure that values can't accidently be set to the wrong thing (Imagine trying to set the size to a Array!). Here are the methods that are supported by the stack implementation:

***getTable***

This method is simple, you call it and it returns the entire hash table.    
EXAMPLE:

    const myTable = new HashTable();

    myTable.getTable();
    // Expected Output: [ *128 Empty Items* ]

***size***

This will return the amount of items currently in the hash table.
EXAMPLE:

    const myTable = new HashTable();

    myTable.insert('SomeKey1', 'SomeVal1');
    myTable.insert('SomeKey2', 'SomeVal2');
    myTable.insert('SomeKey3', 'SomeVal3');
    myTable.insert('SomeKey4', 'SomeVal4');

    myTable.size();
    // Expected Output: 4

***insert***

This will insert a key-value pair into the table. The key will be hashed to acquire the index, and the key-value pair will be placed in a bucket at that index. If no bucket is present, one will be created to hold the item. If you try to insert an item with the same key as an item already in the table, it will return true to indicate that this is a duplicate and the item will not be added.
EXAMPLE:

    const myTable = new HashTable();

    myTable.insert('SomeKey1', 'SomeVal1');
    myTable.insert('SomeKey2', 'SomeVal2');
    myTable.insert('SomeKey3', 'SomeVal3');
    myTable.insert('SomeKey4', 'SomeVal4');

    myTable.find('SomeKey1')
    // Expected Output: 'SomeVal1'

    myTable.insert('SomeKey4', 'SomeOtherVal4');
    // Expected Output: true
    // This item will not be added because "SomeKey4" already exists in the table.

***find***

This will look for a key in the table that you provide and return the value associated with that key. Will return null if the key was not found.
EXAMPLE:

    const myTable = new HashTable();

    myTable.insert('SomeKey1', 'SomeVal1');

    myTable.find('SomeKey1')
    // Expected Output: 'SomeVal1'

***remove***

This will remove an item from the table that has the key you supply and return the value that was associated with that key. It will return null if the key was not found.
EXAMPLE:

    const myTable = new HashTable();

    myTable.insert('SomeKey1', 'SomeVal1');

    myTable.find('SomeKey1')
    // Expected Output: 'SomeVal1'

    myTable.remove('SomeKey1')
    // Expected Output: 'SomeVal1'

    myTable.find('SomeKey1')
    // Expected Output: null

    myTable.remove('SomeKey1')
    // Expected Output: null
    