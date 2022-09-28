const SLL = require('./singlyLinkedList');

describe('Singly Linked List Data Structure', () => {

  describe('Should be able to instantiate a singly linked list with the new keyword.', () => {

    test('Should be able to instantiate an empty singly linked list.', () => {
      const mySLL = new SLL();
      expect(mySLL.getList()).toBe(null);
    })

    test('Should be able to instantiate a singly linked list with a single root node when passed a parameter.', () => {
      const mySLL = new SLL('Test Item');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
    })

    test('Should be able to instantiate a singly linked list with multiple nodes when passed an array.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
    })

    test('Should be able to instantiate a singly linked list with a single node containing an empty array when an empty array is passed.', () => {
      const mySLL = new SLL([]);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: [],
        next: null
      }));
    })

    test('Should be able to instantiate a singly linked list with a maximum size when a number is passed to the second parameter.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3'], 3);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      mySLL.addToTail('Test Item 4');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
    })

    test('Should be only add the items in an array up to the maximum size specified if one is passed.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3'], 1);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
    })

    test('Should be able to instantiate a singly linked list with no maximum size if a zero is passed to the second parameter.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3'], 0);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      mySLL.addToTail('Test Item 4');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
    })

    test('Should be able to instantiate a singly linked list with a single node containing an array containing items if the third parameter is set to true.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3'], 0, true);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: ['Test Item', 'Test Item 2', 'Test Item 3'],
        next: null
      }));
    })

  })

  describe('Should have a tail pointer and a method to get the tail.', () => {

    test('Should have a method to get the tail.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getTail()).toBe('Test Item 3');
    })

    test('Tail should update when new items are added to the tail or tail changes.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getTail()).toBe('Test Item 3');
      mySLL.addToTail('Test Item 4')
      expect(mySLL.getTail()).toBe('Test Item 4');
      mySLL.addToTail('Test Item 5')
      expect(mySLL.getTail()).toBe('Test Item 5');
      mySLL.insertAt(5, 'Test Item 6')
      expect(mySLL.getTail()).toBe('Test Item 6');
      mySLL.insertAt(6, 'Test Item 7')
      expect(mySLL.getTail()).toBe('Test Item 7');
      mySLL.removeTail()
      expect(mySLL.getTail()).toBe('Test Item 6');
      mySLL.removeTail()
      expect(mySLL.getTail()).toBe('Test Item 5');
      mySLL.removeAt(4)
      expect(mySLL.getTail()).toBe('Test Item 4');
      mySLL.removeAt(3)
      expect(mySLL.getTail()).toBe('Test Item 3');
      mySLL.removeData('Test Item 3')
      expect(mySLL.getTail()).toBe('Test Item 2');
      mySLL.addToTail(['Test Item 10', 'Test Item 10', 'Test Item 10'])
      mySLL.removeData('Test Item 10')
      expect(mySLL.getTail()).toBe('Test Item 2');
    })

  })

  describe('Should have a method to return the whole list.', () => {

    test('Should be able to call getList to get the entire list.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
    })

    test('Should return null when the list is empty.', () => {
      const mySLL = new SLL();
      expect(mySLL.getList()).toBe(null);
    })

  })

  describe('Should have a method to add a node to the tail of the list.', () => {

    test('Should be able to add a node to the end of the list.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      mySLL.addToTail('Test Item 4');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
    })

    test('Should not add to list if it is at maximum size.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3'], 3);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      mySLL.addToTail('Test Item 4');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
    })

    test('Should be able to add a node with no data to the end of the list.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      expect(mySLL.size()).toBe(3);
      mySLL.addToTail();
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: undefined,
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
    })

    test('Should be able to add multiple items to the list if an array is passed.', () => {
      const mySLL = new SLL('Placeholder');
      mySLL.addToTail(['Test Item', 'Test Item 2', 'Test Item 3'])
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Placeholder',
        next: expect.objectContaining({
          data: 'Test Item',
          next: expect.objectContaining({
            data: 'Test Item 2',
            next: expect.objectContaining({
              data: 'Test Item 3',
              next: null
            }) 
          })
        })
      }));
      expect(mySLL.size()).toBe(4);
    })

    test('Should be able to add an empty array if an empty array is passed.', () => {
      const mySLL = new SLL('Placeholder');
      mySLL.addToTail([]);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Placeholder',
        next: expect.objectContaining({
          data: [],
          next: null
        })
      }))
      expect(mySLL.size()).toBe(2);
    })

    test('Should be able to add an array with Items if the second parameter is set to true.', () => {
      const mySLL = new SLL('Placeholder');
      mySLL.addToTail(['Test Item', 'Test Item 2'], true);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Placeholder',
        next: expect.objectContaining({
          data: ['Test Item', 'Test Item 2'],
          next: null
        })
      }))
      expect(mySLL.size()).toBe(2);
    })

  })

  describe('Should have a method to add a node to the head of the list.', () => {

    test('Should be able to add a node to the beginning of the list.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      mySLL.addToHead('Test Item 4');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 4',
        next: expect.objectContaining({
          data: 'Test Item',
          next: expect.objectContaining({
            data: 'Test Item 2',
            next: expect.objectContaining({
              data: 'Test Item 3',
              next: null
            })
          }) 
        })
      }));
    })

    test('Should not add to list if list is at maximum size.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3'], 3);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      mySLL.addToHead('Test Item 4');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
    })

    test('Should be able to add a node with no data to the beginning of the list.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      expect(mySLL.size()).toBe(3);
      mySLL.addToHead();
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: undefined,
        next: expect.objectContaining({
          data: 'Test Item',
          next: expect.objectContaining({
            data: 'Test Item 2',
            next: expect.objectContaining({
              data: 'Test Item 3',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
    })

    test('Should be able to add multiple items to the list if an array is passed.', () => {
      const mySLL = new SLL('Placeholder');
      mySLL.addToHead(['Test Item', 'Test Item 2', 'Test Item 3'])
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 3',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item',
            next: expect.objectContaining({
              data: 'Placeholder',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
    })

    test('Should be able to add an empty array if an empty array is passed.', () => {
      const mySLL = new SLL('Placeholder');
      mySLL.addToHead([]);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: [],
        next: expect.objectContaining({
          data: 'Placeholder',
          next: null
        })
      }))
      expect(mySLL.size()).toBe(2);
    })

    test('Should be able to add an array with Items if the second parameter is set to true.', () => {
      const mySLL = new SLL('Placeholder');
      mySLL.addToHead(['Test Item', 'Test Item 2'], true);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: ['Test Item', 'Test Item 2'],
        next: expect.objectContaining({
          data: 'Placeholder',
          next: null
        })
      }))
      expect(mySLL.size()).toBe(2);
    })

  })

  describe('Should have a method to get the size of the list.', () => {

    test('Should be able to call size to get the size of the list.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.size()).toBe(3);
    })

    test('Should return with 1 if the list only has one item.', () => {
      const mySLL = new SLL('Test Item');
      expect(mySLL.size()).toBe(1);
    })

    test('Should return with 0 if the list is empty.', () => {
      const mySLL = new SLL();
      expect(mySLL.size()).toBe(0);
    })
    
  })

  describe('Should have a method to get the maximum size of a list if there is one.', () => {

    test('Should have a getMax method to get the maximum size of the list if it exists.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3'], 5);
      expect(mySLL.getMax()).toBe(5);
    })

    test('Should return null if there is no maximum size.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getMax()).toBe(null);
    })

  })

  describe('Should have a method to set the maximum size after a list is instantiated.', () => {

    test('Should be able to set the maximum size of the list.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      mySLL.addToTail('Test Item 4');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      mySLL.setMax(4);
      mySLL.addToTail('Test Item 5');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
    })

    test('Should be able to remove the maximum size of the list if a zero is passed.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      mySLL.addToTail('Test Item 4');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      mySLL.setMax(4);
      mySLL.addToTail('Test Item 5');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      mySLL.setMax(0);
      mySLL.addToTail('Test Item 5');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: expect.objectContaining({
                data: 'Test Item 5',
                next: null
              })
            })
          }) 
        })
      }));
    })

    test('Should remove all elements at the tail of the list that go over the new maximum size.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      mySLL.setMax(2);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: null
        })
      }));
      mySLL.setMax(1);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null,
      }));
    })

  })

  describe('Should have a method isEmpty to see if the list is empty.', () => {

    test('Should return true if list is empty.', () => {
      const mySLL = new SLL();
      expect(mySLL.isEmpty()).toBe(true);
    })

    test('Should return false if list is not empty.', () => {
      const mySLL = new SLL('Test Item');
      expect(mySLL.isEmpty()).toBe(false);
    })

  })

  describe('Should have a method isFull to see if the list is full.', () => {
    
    test('Should return true if the list size is at maximum.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3'], 3);
      expect(mySLL.isFull()).toBe(true);
    })

    test('Should return false if the list size is not at maximum.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3'], 4);
      expect(mySLL.isFull()).toBe(false);
    })

    test('Should return null if the list has no maximum.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(mySLL.isFull()).toBe(null);
    })

  })

  describe('Should have a contains method to see if the list contains a certain datapoint.', () => {

    test('Should return with the index number of the datapoint found if it exists.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.contains('Test Item')).toBe(0)
      expect(mySLL.contains('Test Item 2')).toBe(1)
      expect(mySLL.contains('Test Item 3')).toBe(2)
      expect(mySLL.contains('Test Item 4')).toBe(3)
    })

    test('Should return with null if the list does not contain datapoint.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.contains('Test Item 5')).toBe(null);
    })

    test('Should return with an array of all the index values for each datapoint found if multiple exist in the list.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4', 'Test Item 3', 'Test Item 5', 'Test Item 3']);
      expect(mySLL.contains('Test Item 3')).toEqual(expect.arrayContaining([2,4,6]))
    })

    test('Should be able to check if list contains exact objects, dates, or arrays if the second parameter is set to true.', () => {
      const mySLL = new SLL([
        'Test Item',
        { myKeyOne: true, myKeyTwo: new Date(44)},
        'Test Item 3',
        new Date(838),
        ['Item One', new Date(77), { myKeyFour: 99, myKeyFive: null }, 778],
        new Date(838)
      ]);
      expect(mySLL.contains('Test Item')).toBe(0);
      expect(mySLL.contains('Test Item', true)).toBe(0);
      expect(mySLL.contains({ myKeyOne: true, myKeyTwo: new Date(44)})).toBe(null);
      expect(mySLL.contains({ myKeyOne: true }, true)).toBe(null);
      expect(mySLL.contains({ myKeyOne: true, myKeyTwo: new Date(44)}, true)).toBe(1);
      expect(mySLL.contains('Test Item 3')).toBe(2);
      expect(mySLL.contains('Test Item 3', true)).toBe(2);
      expect(mySLL.contains(new Date(838))).toBe(null);
      expect(mySLL.contains(new Date(838), true)).toEqual(expect.arrayContaining([3, 5]));
      expect(mySLL.contains(['Item One', new Date(77), { myKeyFour: 99, myKeyFive: null }, 778])).toBe(null);
      expect(mySLL.contains(['Item One', new Date(77)], true)).toBe(null);
      expect(mySLL.contains(['Item One', new Date(77), { myKeyFour: 99, myKeyFive: null }, 778], true)).toBe(4);
    })

  })

  describe('Should have a getAt method that returns an item at a specific index.', () => {

    test('Should be able to get an item at a specific index.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getAt(2)).toBe('Test Item 3');
      expect(mySLL.getAt(0)).toBe('Test Item');
    })

    test('Should return null if index provided is higher than the current size of the list.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getAt(4)).toBe(null);
    })

    test('Should return null if a negative number is provided.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getAt(-1)).toBe(null);
    })

    test('Should always return null if the list is empty.', () => {
      const mySLL = new SLL();
      expect(mySLL.getAt(6)).toBe(null);
      expect(mySLL.getAt(2)).toBe(null);
      expect(mySLL.getAt(0)).toBe(null);
      expect(mySLL.getAt(3)).toBe(null);
    })

  })

  describe('Should have a reverse function to reverse the order of the list.', () => {

    test('Should be able to reverse a linked list.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      mySLL.reverse()
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 4',
        next: expect.objectContaining({
          data: 'Test Item 3',
          next: expect.objectContaining({
            data: 'Test Item 2',
            next: expect.objectContaining({
              data: 'Test Item',
              next: null
            })
          }) 
        })
      }));
    })

    test('Should do nothing if the list is empty.', () => {
      const mySLL = new SLL();
      expect(mySLL.getList()).toBe(null);
      mySLL.reverse()
      expect(mySLL.getList()).toBe(null);
    })

    test('Should do nothing if the list only has one item.', () => {
      const mySLL = new SLL('Test Item');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
      mySLL.reverse()
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
    })

  })

  describe('Should have a method to insert data at a specific index.', () => {

    test('Should be able to use insertAt to insert data at a specific index.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(2, 'Inserted Data');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Inserted Data',
            next: expect.objectContaining({
              data: 'Test Item 3',
              next: expect.objectContaining({
                data: 'Test Item 4',
                next: null
              })
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert data at the head.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(0, 'Inserted Data');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Inserted Data',
        next: expect.objectContaining({
          data: 'Test Item',
          next: expect.objectContaining({
            data: 'Test Item 2',
            next: expect.objectContaining({
              data: 'Test Item 3',
              next: expect.objectContaining({
                data: 'Test Item 4',
                next: null
              })
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert data at the tail.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(4, 'Inserted Data');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: expect.objectContaining({
                data: 'Inserted Data',
                next: null
              })
            })
          })
        })
      }));
      expect(mySLL.size()).toBe(5);
    })

    test('Should not do anything if the number passed is negative or greater than the size of the list plus one.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(5, 'Inserted Data');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(-1, 'Inserted Data');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
    })

    test('Should be able to use insertAt to insert multiple datapoints at a specific index if an array is passed.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(2, ['Inserted Data 1', 'Inserted Data 2']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Inserted Data 1',
            next: expect.objectContaining({
              data: 'Inserted Data 2',
              next: expect.objectContaining({
                data: 'Test Item 3',
                next: expect.objectContaining({
                  data: 'Test Item 4',
                  next: null
                })
              })
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(6);
    })

    test('Should be able to use insertAt to insert an empty array at a specific index if an empty array is passed.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(2, []);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: [],
            next: expect.objectContaining({
              data: 'Test Item 3',
              next: expect.objectContaining({
                data: 'Test Item 4',
                next: null
              })
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert an array containing items at a specific index if the third parameter is set to true.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(2, ['Inserted Data 1', 'Inserted Data 2'], true);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: ['Inserted Data 1', 'Inserted Data 2'],
            next: expect.objectContaining({
              data: 'Test Item 3',
              next: expect.objectContaining({
                data: 'Test Item 4',
                next: null
              })
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert multiple datapoints at the head if an array is passed.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(0, ['Inserted Data 1', 'Inserted Data 2']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Inserted Data 1',
        next: expect.objectContaining({
          data: 'Inserted Data 2',
          next: expect.objectContaining({
            data: 'Test Item',
            next: expect.objectContaining({
              data: 'Test Item 2',
              next: expect.objectContaining({
                data: 'Test Item 3',
                next: expect.objectContaining({
                  data: 'Test Item 4',
                  next: null
                })
              })
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(6);
    })

    test('Should be able to use insertAt to insert an empty array at the head if an empty array is passed.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(0, []);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: [],
        next: expect.objectContaining({
          data: 'Test Item',
          next: expect.objectContaining({
            data: 'Test Item 2',
            next: expect.objectContaining({
              data: 'Test Item 3',
              next: expect.objectContaining({
                data: 'Test Item 4',
                next: null
              })
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert an array containing items at the head if the third parameter is set to true.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(0, ['Inserted Data 1', 'Inserted Data 2'], true);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: ['Inserted Data 1', 'Inserted Data 2'],
        next: expect.objectContaining({
          data: 'Test Item',
          next: expect.objectContaining({
            data: 'Test Item 2',
            next: expect.objectContaining({
              data: 'Test Item 3',
              next: expect.objectContaining({
                data: 'Test Item 4',
                next: null
              })
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert multiple datapoints at the tail if an array is passed.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(4, ['Inserted Data 1', 'Inserted Data 2']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: expect.objectContaining({
                data: 'Inserted Data 1',
                next: expect.objectContaining({
                  data: 'Inserted Data 2',
                  next: null
                })
              })
            })
          })
        })
      }));
      expect(mySLL.size()).toBe(6);
    })

    test('Should be able to use insertAt to insert an empty array at the tail if an empty array is passed.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(4, []);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: expect.objectContaining({
                data: [],
                next: null
              })
            })
          })
        })
      }));
      expect(mySLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert an array containing items at the tail if the third parameter is set to true.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      mySLL.insertAt(4, ['Inserted Data 1', 'Inserted Data 2'], true);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: expect.objectContaining({
                data: ['Inserted Data 1', 'Inserted Data 2'],
                next: null
              })
            })
          })
        })
      }));
      expect(mySLL.size()).toBe(5);
    })

  })

  describe('Should have a method to remove the data at a specfic index.', () => {

    test('Should be able to remove a node at a specific index and return it.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      expect(mySLL.removeAt(2)).toBe('Test Item 3');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 4',
            next: null
          })
        })
      }));
      expect(mySLL.size()).toBe(3)
    })

    test('Should return null and do nothing to the list if it is empty.', () => {
      const mySLL = new SLL();
      expect(mySLL.getList()).toBe(null);
      expect(mySLL.removeAt(3)).toBe(null);
      expect(mySLL.getList()).toBe(null);
    })

    test('Should return null and do nothing to the list if a negative number or a number greater than the size of the list is entered.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      expect(mySLL.removeAt(4)).toBe(null);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      expect(mySLL.removeAt(-1)).toBe(null);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
    })

    test('Should remove the head and return it if the list only contains 1 item and/or zero is supplied.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: null
        })
      }));
      expect(mySLL.size()).toBe(2);
      expect(mySLL.removeAt(0)).toBe('Test Item');
      expect(mySLL.size()).toBe(1);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: null
      }));
      expect(mySLL.removeAt(0)).toBe('Test Item 2');
      expect(mySLL.size()).toBe(0);
      expect(mySLL.getList()).toEqual(null);
    })

  })

  describe('Should have a method to remove data from the tail.', () => {

    test('Should be able to remove a node from the tail of the list and return it.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      expect(mySLL.removeTail()).toBe('Test Item 4');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      expect(mySLL.size()).toBe(3);
    })

    test('Should return the remove the head and return it if the list only contains 1 item.', () => {
      const mySLL = new SLL('Test Item');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
      expect(mySLL.size()).toBe(1);
      expect(mySLL.removeTail()).toBe('Test Item');
      expect(mySLL.size()).toBe(0);
      expect(mySLL.getList()).toBe(null);
    })

    test('Should return null and do nothing to the list if the list is empty.', () => {
      const mySLL = new SLL();
      expect(mySLL.getList()).toBe(null);
      expect(mySLL.removeTail()).toBe(null);
      expect(mySLL.getList()).toBe(null);
    })

  })

  describe('Should have a method to remove data from the head.', () => {

    test('Should be able to remove a node from the head of the list and return it.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      expect(mySLL.removeHead()).toBe('Test Item');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: expect.objectContaining({
          data: 'Test Item 3',
          next: expect.objectContaining({
            data: 'Test Item 4',
            next: null
          })
        }) 
      }));
      expect(mySLL.size()).toBe(3);
    })

    test('Should return the remove the head and return it if the list only contains 1 item.', () => {
      const mySLL = new SLL('Test Item');
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
      expect(mySLL.size()).toBe(1);
      expect(mySLL.removeHead()).toBe('Test Item');
      expect(mySLL.getList()).toBe(null);
      expect(mySLL.size()).toBe(0);
    })

    test('Should return null and do nothing to the list if the list is empty.', () => {
      const mySLL = new SLL();
      expect(mySLL.getList()).toBe(null);
      expect(mySLL.removeHead()).toBe(null);
      expect(mySLL.getList()).toBe(null);
    })
    
  })

  describe('Should have a method to remove all data matching a given input.', () => {

    test('Should be able to remove all nodes matching a given input and return how many datapoints were deleted.', () => {
      const mySLL = new SLL(['Test Item 2', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      expect(mySLL.removeData('Test Item 2')).toBe(2);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 3',
        next: expect.objectContaining({
          data: 'Test Item 4',
          next: null
        })
      }));
      expect(mySLL.size()).toBe(2);
      expect(mySLL.removeData('Test Item 4')).toBe(1);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 3',
        next: null
      }));
      expect(mySLL.size()).toBe(1);
      mySLL.addToTail(['Test Item 10', 'Test Item 10', 'Test Item 10']);
      expect(mySLL.size()).toBe(4)
      expect(mySLL.removeData('Test Item 10')).toBe(3);
      expect(mySLL.size()).toBe(1);
    })

    test('Should return null and do nothing to the list if it is empty.', () => {
      const mySLL = new SLL();
      expect(mySLL.getList()).toBe(null);
      expect(mySLL.removeData('Test')).toBe(null);
      expect(mySLL.getList()).toBe(null);
    })

    test('Should return null if the given input is not found.', () => {
      const mySLL = new SLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
      expect(mySLL.removeData('Test')).toBe(null);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: expect.objectContaining({
              data: 'Test Item 4',
              next: null
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(4);
    })

    test('Should be able to make matching more thorough when the second parameter is set to true.', () => {
      const mySLL = new SLL(['Test Item 2', ['Test Item 2', 'Test Item 5', 54, true], new Date(888), ['Test Item 2', 'Test Item 5', 54, true], { myKey: 'myValue' }]);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: expect.objectContaining({
          data: ['Test Item 2', 'Test Item 5', 54, true],
          next: expect.objectContaining({
            data: new Date(888),
            next: expect.objectContaining({
              data: ['Test Item 2', 'Test Item 5', 54, true],
              next: expect.objectContaining({
                data: { myKey: 'myValue' },
                next: null
              })
            })
          }) 
        })
      }));
      expect(mySLL.size()).toBe(5);
      expect(mySLL.removeData(['Test Item 2', 'Test Item 5', 54, true])).toBe(null);
      expect(mySLL.size()).toBe(5);
      expect(mySLL.removeData(['Test Item 2', 'Test Item 5', 54, true], true)).toBe(2);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: expect.objectContaining({
          data: new Date(888),
          next: expect.objectContaining({
            data: { myKey: 'myValue' },
            next: null
          })
        })
      }));
      expect(mySLL.size()).toBe(3);
      expect(mySLL.removeData({ myKey: 'myValue' })).toBe(null);
      expect(mySLL.size()).toBe(3);
      expect(mySLL.removeData({ myKey: 'myValue' }, true)).toBe(1);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: expect.objectContaining({
          data: new Date(888),
          next: null
        })
      }));
      expect(mySLL.size()).toBe(2);
      expect(mySLL.removeData(new Date(888))).toBe(null);
      expect(mySLL.size()).toBe(2);
      expect(mySLL.removeData(new Date(888), true)).toBe(1);
      expect(mySLL.getList()).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: null
      }));
      expect(mySLL.size()).toBe(1);
    })

  })

})