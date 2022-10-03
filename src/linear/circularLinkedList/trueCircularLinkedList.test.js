const TrueCLL = require('./trueCLL');
const flat = require('../../utils/flat');

describe('True Circular Linked List Data Structure', () => {

  describe('Should be able to instantiate a circular linked list with the new keyword.', () => {

    test('Should be able to instantiate an empty circular linked list.', () => {
      const myCLL = new TrueCLL();
      expect(flat(myCLL.getList())).toBe(null);
    })

    test('Should be able to instantiate a circular linked list with a single root node when passed a parameter.', () => {
      const myCLL = new TrueCLL('Test Item');
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
    })

    test('Should be able to instantiate a circular linked list with multiple nodes when passed an array.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
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

    test('Should be able to instantiate a circular linked list with a single node containing an empty array when an empty array is passed.', () => {
      const myCLL = new TrueCLL([]);
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: [],
        next: null
      }));
    })

    test('Should be able to instantiate a circular linked list with a maximum size when a number is passed to the second parameter.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3'], 3);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      myCLL.addToTail('Test Item 4');
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
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

    test('Should only be able to add the items in an array up to the maximum size specified if one is passed.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3'], 1);
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
    })

    test('Should be able to instantiate a circular linked list with no maximum size if a zero is passed to the second parameter.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3'], 0);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      myCLL.addToTail('Test Item 4');
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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

    test('Should be able to instantiate a circular linked list with a single node containing an array containing items if the third parameter is set to true.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3'], 0, true);
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: ['Test Item', 'Test Item 2', 'Test Item 3'],
        next: null
      }));
    })

  })

  describe('Should have a tail pointer and a method to get the tail.', () => {

    test('Should have a method to get the tail.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(myCLL.getTail()).toBe('Test Item 3');
    })

    test('Tail should update when new items are added to the tail or tail changes.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(myCLL.getTail()).toBe('Test Item 3');
      myCLL.addToTail('Test Item 4')
      expect(myCLL.getTail()).toBe('Test Item 4');
      myCLL.addToTail('Test Item 5')
      expect(myCLL.getTail()).toBe('Test Item 5');
      myCLL.insertAt(5, 'Test Item 6')
      expect(myCLL.getTail()).toBe('Test Item 6');
      myCLL.insertAt(6, 'Test Item 7')
      expect(myCLL.getTail()).toBe('Test Item 7');
      myCLL.removeTail()
      expect(myCLL.getTail()).toBe('Test Item 6');
      myCLL.removeTail()
      expect(myCLL.getTail()).toBe('Test Item 5');
      myCLL.removeAt(4)
      expect(myCLL.getTail()).toBe('Test Item 4');
      myCLL.removeAt(3)
      expect(myCLL.getTail()).toBe('Test Item 3');
      myCLL.removeData('Test Item 3')
      expect(myCLL.getTail()).toBe('Test Item 2');
      myCLL.addToTail(['Test Item 10', 'Test Item 10', 'Test Item 10'])
      myCLL.removeData('Test Item 10')
      expect(myCLL.getTail()).toBe('Test Item 2');
    })

  })

  describe('Should have a method to return the whole list.', () => {

    test('Should be able to call getList to get the entire list.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
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
      const myCLL = new TrueCLL();
      expect(flat(myCLL.getList())).toBe(null);
    })

  })

  describe('Should have a method to add a node to the tail of the list.', () => {

    test('Should be able to add a node to the end of the list.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      myCLL.addToTail('Test Item 4');
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3'], 3);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      myCLL.addToTail('Test Item 4');
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
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
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      expect(myCLL.size()).toBe(3);
      myCLL.addToTail();
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
    })

    test('Should be able to add multiple items to the list if an array is passed.', () => {
      const myCLL = new TrueCLL('Placeholder');
      myCLL.addToTail(['Test Item', 'Test Item 2', 'Test Item 3'])
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
    })

    test('Should be able to add an empty array if an empty array is passed.', () => {
      const myCLL = new TrueCLL('Placeholder');
      myCLL.addToTail([]);
      expect(flat(myCLL.getList(), 2)).toEqual(expect.objectContaining({
        data: 'Placeholder',
        next: expect.objectContaining({
          data: [],
          next: null
        })
      }))
      expect(myCLL.size()).toBe(2);
    })

    test('Should be able to add an array with Items if the second parameter is set to true.', () => {
      const myCLL = new TrueCLL('Placeholder');
      myCLL.addToTail(['Test Item', 'Test Item 2'], true);
      expect(flat(myCLL.getList(), 2)).toEqual(expect.objectContaining({
        data: 'Placeholder',
        next: expect.objectContaining({
          data: ['Test Item', 'Test Item 2'],
          next: null
        })
      }))
      expect(myCLL.size()).toBe(2);
    })

  })

  describe('Should have a method to add a node to the head of the list.', () => {

    test('Should be able to add a node to the beginning of the list.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      myCLL.addToHead('Test Item 4');
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3'], 3);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      myCLL.addToHead('Test Item 4');
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
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
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      expect(myCLL.size()).toBe(3);
      myCLL.addToHead();
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
    })

    test('Should be able to add multiple items to the list if an array is passed.', () => {
      const myCLL = new TrueCLL('Placeholder');
      myCLL.addToHead(['Test Item', 'Test Item 2', 'Test Item 3'])
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
    })

    test('Should be able to add an empty array if an empty array is passed.', () => {
      const myCLL = new TrueCLL('Placeholder');
      myCLL.addToHead([]);
      expect(flat(myCLL.getList(), 2)).toEqual(expect.objectContaining({
        data: [],
        next: expect.objectContaining({
          data: 'Placeholder',
          next: null
        })
      }))
      expect(myCLL.size()).toBe(2);
    })

    test('Should be able to add an array with Items if the second parameter is set to true.', () => {
      const myCLL = new TrueCLL('Placeholder');
      myCLL.addToHead(['Test Item', 'Test Item 2'], true);
      expect(flat(myCLL.getList(), 2)).toEqual(expect.objectContaining({
        data: ['Test Item', 'Test Item 2'],
        next: expect.objectContaining({
          data: 'Placeholder',
          next: null
        })
      }))
      expect(myCLL.size()).toBe(2);
    })

  })

  describe('Should have a method to get the size of the list.', () => {

    test('Should be able to call size to get the size of the list.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(myCLL.size()).toBe(3);
    })

    test('Should return with 1 if the list only has one item.', () => {
      const myCLL = new TrueCLL('Test Item');
      expect(myCLL.size()).toBe(1);
    })

    test('Should return with 0 if the list is empty.', () => {
      const myCLL = new TrueCLL();
      expect(myCLL.size()).toBe(0);
    })
    
  })

  describe('Should have a method to get the maximum size of a list if there is one.', () => {

    test('Should have a getMax method to get the maximum size of the list if it exists.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3'], 5);
      expect(myCLL.getMax()).toBe(5);
    })

    test('Should return null if there is no maximum size.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(myCLL.getMax()).toBe(null);
    })

  })

  describe('Should have a method to set the maximum size after a list is instantiated.', () => {

    test('Should be able to set the maximum size of the list.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      myCLL.addToTail('Test Item 4');
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      myCLL.setMax(4);
      myCLL.addToTail('Test Item 5');
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      myCLL.addToTail('Test Item 4');
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      myCLL.setMax(4);
      myCLL.addToTail('Test Item 5');
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      myCLL.setMax(0);
      myCLL.addToTail('Test Item 5');
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      myCLL.setMax(2);
      expect(flat(myCLL.getList(), 2)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: null
        })
      }));
      myCLL.setMax(1);
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null,
      }));
    })

  })

  describe('Should have a method isEmpty to see if the list is empty.', () => {

    test('Should return true if list is empty.', () => {
      const myCLL = new TrueCLL();
      expect(myCLL.isEmpty()).toBe(true);
    })

    test('Should return false if list is not empty.', () => {
      const myCLL = new TrueCLL('Test Item');
      expect(myCLL.isEmpty()).toBe(false);
    })

  })

  describe('Should have a method isFull to see if the list is full.', () => {
    
    test('Should return true if the list size is at maximum.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3'], 3);
      expect(myCLL.isFull()).toBe(true);
    })

    test('Should return false if the list size is not at maximum.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3'], 4);
      expect(myCLL.isFull()).toBe(false);
    })

    test('Should return null if the list has no maximum.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3']);
      expect(myCLL.isFull()).toBe(null);
    })

  })

  describe('Should have a contains method to see if the list contains a certain datapoint.', () => {

    test('Should return with the index number of the datapoint found if it exists.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myCLL.contains('Test Item')).toBe(0)
      expect(myCLL.contains('Test Item 2')).toBe(1)
      expect(myCLL.contains('Test Item 3')).toBe(2)
      expect(myCLL.contains('Test Item 4')).toBe(3)
    })

    test('Should return with null if the list does not contain datapoint.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myCLL.contains('Test Item 5')).toBe(null);
    })

    test('Should return with an array of all the index values for each datapoint found if multiple exist in the list.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4', 'Test Item 3', 'Test Item 5', 'Test Item 3']);
      expect(myCLL.contains('Test Item 3')).toEqual(expect.arrayContaining([2,4,6]))
    })

    test('Should be able to check if list contains exact objects, dates, or arrays if the second parameter is set to true.', () => {
      const myCLL = new TrueCLL([
        'Test Item',
        { myKeyOne: true, myKeyTwo: new Date(44)},
        'Test Item 3',
        new Date(838),
        ['Item One', new Date(77), { myKeyFour: 99, myKeyFive: null }, 778],
        new Date(838)
      ]);
      expect(myCLL.contains('Test Item')).toBe(0);
      expect(myCLL.contains('Test Item', true)).toBe(0);
      expect(myCLL.contains({ myKeyOne: true, myKeyTwo: new Date(44)})).toBe(null);
      expect(myCLL.contains({ myKeyOne: true }, true)).toBe(null);
      expect(myCLL.contains({ myKeyOne: true, myKeyTwo: new Date(44)}, true)).toBe(1);
      expect(myCLL.contains('Test Item 3')).toBe(2);
      expect(myCLL.contains('Test Item 3', true)).toBe(2);
      expect(myCLL.contains(new Date(838))).toBe(null);
      expect(myCLL.contains(new Date(838), true)).toEqual(expect.arrayContaining([3, 5]));
      expect(myCLL.contains(['Item One', new Date(77), { myKeyFour: 99, myKeyFive: null }, 778])).toBe(null);
      expect(myCLL.contains(['Item One', new Date(77)], true)).toBe(null);
      expect(myCLL.contains(['Item One', new Date(77), { myKeyFour: 99, myKeyFive: null }, 778], true)).toBe(4);
    })

  })

  describe('Should have a getAt method that returns an item at a specific index.', () => {

    test('Should be able to get an item at a specific index.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myCLL.getAt(2)).toBe('Test Item 3');
      expect(myCLL.getAt(0)).toBe('Test Item');
    })

    test('Should return null if index provided is higher than the current size of the list.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myCLL.getAt(4)).toBe(null);
    })

    test('Should return null if a negative number is provided.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myCLL.getAt(-1)).toBe(null);
    })

    test('Should always return null if the list is empty.', () => {
      const myCLL = new TrueCLL();
      expect(myCLL.getAt(6)).toBe(null);
      expect(myCLL.getAt(2)).toBe(null);
      expect(myCLL.getAt(0)).toBe(null);
      expect(myCLL.getAt(3)).toBe(null);
    })

  })

  describe('Should have a reverse function to reverse the order of the list.', () => {

    test('Should be able to reverse a linked list.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      myCLL.reverse()
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      const myCLL = new TrueCLL();
      expect(flat(myCLL.getList())).toBe(null);
      myCLL.reverse()
      expect(flat(myCLL.getList())).toBe(null);
    })

    test('Should do nothing if the list only has one item.', () => {
      const myCLL = new TrueCLL('Test Item');
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
      myCLL.reverse()
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
    })

  })

  describe('Should have a method to insert data at a specific index.', () => {

    test('Should be able to use insertAt to insert data at a specific index.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(2, 'Inserted Data');
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert data at the head.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(0, 'Inserted Data');
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert data at the tail.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(4, 'Inserted Data');
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(5);
    })

    test('Should not do anything if the number passed is negative or greater than the size of the list plus one.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(5, 'Inserted Data');
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(-1, 'Inserted Data');
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
    })

    test('Should be able to use insertAt to insert multiple datapoints at a specific index if an array is passed.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(2, ['Inserted Data 1', 'Inserted Data 2']);
      expect(flat(myCLL.getList(), 6)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(6);
    })

    test('Should be able to use insertAt to insert an empty array at a specific index if an empty array is passed.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(2, []);
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert an array containing items at a specific index if the third parameter is set to true.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(2, ['Inserted Data 1', 'Inserted Data 2'], true);
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert multiple datapoints at the head if an array is passed.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(0, ['Inserted Data 1', 'Inserted Data 2']);
      expect(flat(myCLL.getList(), 6)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(6);
    })

    test('Should be able to use insertAt to insert an empty array at the head if an empty array is passed.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(0, []);
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert an array containing items at the head if the third parameter is set to true.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(0, ['Inserted Data 1', 'Inserted Data 2'], true);
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert multiple datapoints at the tail if an array is passed.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(4, ['Inserted Data 1', 'Inserted Data 2']);
      expect(flat(myCLL.getList(), 6)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(6);
    })

    test('Should be able to use insertAt to insert an empty array at the tail if an empty array is passed.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(4, []);
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(5);
    })

    test('Should be able to use insertAt to insert an array containing items at the tail if the third parameter is set to true.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      myCLL.insertAt(4, ['Inserted Data 1', 'Inserted Data 2'], true);
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(5);
    })

  })

  describe('Should have a method to remove the data at a specfic index.', () => {

    test('Should be able to remove a node at a specific index and return it.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      expect(myCLL.removeAt(2)).toBe('Test Item 3');
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 4',
            next: null
          })
        })
      }));
      expect(myCLL.size()).toBe(3)
    })

    test('Should return null and do nothing to the list if it is empty.', () => {
      const myCLL = new TrueCLL();
      expect(flat(myCLL.getList())).toBe(null);
      expect(myCLL.removeAt(3)).toBe(null);
      expect(flat(myCLL.getList())).toBe(null);
    })

    test('Should return null and do nothing to the list if a negative number or a number greater than the size of the list is entered.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      expect(myCLL.removeAt(4)).toBe(null);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      expect(myCLL.removeAt(-1)).toBe(null);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
    })

    test('Should remove the head and return it if the list only contains 1 item and/or zero is supplied.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2']);
      expect(flat(myCLL.getList(), 2)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: null
        })
      }));
      expect(myCLL.size()).toBe(2);
      expect(myCLL.removeAt(0)).toBe('Test Item');
      expect(myCLL.size()).toBe(1);
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: null
      }));
      expect(myCLL.removeAt(0)).toBe('Test Item 2');
      expect(myCLL.size()).toBe(0);
      expect(flat(myCLL.getList())).toEqual(null);
    })

  })

  describe('Should have a method to remove data from the tail.', () => {

    test('Should be able to remove a node from the tail of the list and return it.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      expect(myCLL.removeTail()).toBe('Test Item 4');
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: expect.objectContaining({
          data: 'Test Item 2',
          next: expect.objectContaining({
            data: 'Test Item 3',
            next: null
          }) 
        })
      }));
      expect(myCLL.size()).toBe(3);
    })

    test('Should return the remove the head and return it if the list only contains 1 item.', () => {
      const myCLL = new TrueCLL('Test Item');
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
      expect(myCLL.size()).toBe(1);
      expect(myCLL.removeTail()).toBe('Test Item');
      expect(myCLL.size()).toBe(0);
      expect(flat(myCLL.getList())).toBe(null);
    })

    test('Should return null and do nothing to the list if the list is empty.', () => {
      const myCLL = new TrueCLL();
      expect(flat(myCLL.getList())).toBe(null);
      expect(myCLL.removeTail()).toBe(null);
      expect(flat(myCLL.getList())).toBe(null);
    })

  })

  describe('Should have a method to remove data from the head.', () => {

    test('Should be able to remove a node from the head of the list and return it.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      expect(myCLL.removeHead()).toBe('Test Item');
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: expect.objectContaining({
          data: 'Test Item 3',
          next: expect.objectContaining({
            data: 'Test Item 4',
            next: null
          })
        }) 
      }));
      expect(myCLL.size()).toBe(3);
    })

    test('Should remove the head and return it if the list only contains 1 item.', () => {
      const myCLL = new TrueCLL('Test Item');
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: 'Test Item',
        next: null
      }));
      expect(myCLL.size()).toBe(1);
      expect(myCLL.removeHead()).toBe('Test Item');
      expect(myCLL.size()).toBe(0);
      expect(flat(myCLL.getList())).toBe(null);
    })

    test('Should return null and do nothing to the list if the list is empty.', () => {
      const myCLL = new TrueCLL();
      expect(flat(myCLL.getList())).toBe(null);
      expect(myCLL.removeHead()).toBe(null);
      expect(flat(myCLL.getList())).toBe(null);
    })
    
  })

  describe('Should have a method to remove all data matching a given input.', () => {

    test('Should be able to remove all nodes matching a given input and return how many datapoints were deleted.', () => {
      const myCLL = new TrueCLL(['Test Item 2', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      expect(myCLL.removeData('Test Item 2')).toBe(2);
      expect(flat(myCLL.getList(), 2)).toEqual(expect.objectContaining({
        data: 'Test Item 3',
        next: expect.objectContaining({
          data: 'Test Item 4',
          next: null
        })
      }));
      expect(myCLL.size()).toBe(2);
      expect(myCLL.removeData('Test Item 4')).toBe(1);
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: 'Test Item 3',
        next: null
      }));
      expect(myCLL.size()).toBe(1);
      myCLL.addToTail(['Test Item 10', 'Test Item 10', 'Test Item 10']);
      expect(myCLL.size()).toBe(4)
      expect(myCLL.removeData('Test Item 10')).toBe(3);
      expect(myCLL.size()).toBe(1);
    })

    test('Should return null and do nothing to the list if it is empty.', () => {
      const myCLL = new TrueCLL();
      expect(flat(myCLL.getList())).toBe(null);
      expect(myCLL.removeData('Test')).toBe(null);
      expect(flat(myCLL.getList())).toBe(null);
    })

    test('Should return null if the given input is not found.', () => {
      const myCLL = new TrueCLL(['Test Item', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
      expect(myCLL.removeData('Test')).toBe(null);
      expect(flat(myCLL.getList(), 4)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(4);
    })

    test('Should be able to make matching more thorough when the second parameter is set to true.', () => {
      const myCLL = new TrueCLL(['Test Item 2', ['Test Item 2', 'Test Item 5', 54, true], new Date(888), ['Test Item 2', 'Test Item 5', 54, true], { myKey: 'myValue' }]);
      expect(flat(myCLL.getList(), 5)).toEqual(expect.objectContaining({
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
      expect(myCLL.size()).toBe(5);
      expect(myCLL.removeData(['Test Item 2', 'Test Item 5', 54, true])).toBe(null);
      expect(myCLL.size()).toBe(5);
      expect(myCLL.removeData(['Test Item 2', 'Test Item 5', 54, true], true)).toBe(2);
      expect(flat(myCLL.getList(), 3)).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: expect.objectContaining({
          data: new Date(888),
          next: expect.objectContaining({
            data: { myKey: 'myValue' },
            next: null
          })
        })
      }));
      expect(myCLL.size()).toBe(3);
      expect(myCLL.removeData({ myKey: 'myValue' })).toBe(null);
      expect(myCLL.size()).toBe(3);
      expect(myCLL.removeData({ myKey: 'myValue' }, true)).toBe(1);
      expect(flat(myCLL.getList(), 2)).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: expect.objectContaining({
          data: new Date(888),
          next: null
        })
      }));
      expect(myCLL.size()).toBe(2);
      expect(myCLL.removeData(new Date(888))).toBe(null);
      expect(myCLL.size()).toBe(2);
      expect(myCLL.removeData(new Date(888), true)).toBe(1);
      expect(flat(myCLL.getList(), 1)).toEqual(expect.objectContaining({
        data: 'Test Item 2',
        next: null
      }));
      expect(myCLL.size()).toBe(1);
    })

  })

  describe('Should have a way to traverse through the list.', () => {

    test('Should have a method to traverse through the list and supply the next working item.', () => {
      const myCLL = new TrueCLL(['Test Item 1', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myCLL.next()).toBe('Test Item 2');
      expect(myCLL.next()).toBe('Test Item 3');
      expect(myCLL.next()).toBe('Test Item 4');
      myCLL.addToTail('Test Item 5')
      expect(myCLL.next()).toBe('Test Item 5');
      myCLL.removeTail()
      expect(myCLL.next()).toBe('Test Item 2');
      myCLL.addToHead('Test Item 0')
      expect(myCLL.next()).toBe('Test Item 3');
      myCLL.removeHead()
      expect(myCLL.next()).toBe('Test Item 4');
    })

    test('Should have a method to get the current working item.', () => {
      const myCLL = new TrueCLL(['Test Item 1', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myCLL.current()).toBe('Test Item 1');
      expect(myCLL.next()).toBe('Test Item 2');
      expect(myCLL.current()).toBe('Test Item 2');
      expect(myCLL.next()).toBe('Test Item 3');
      expect(myCLL.current()).toBe('Test Item 3');
      expect(myCLL.next()).toBe('Test Item 4');
      expect(myCLL.current()).toBe('Test Item 4');
      expect(myCLL.next()).toBe('Test Item 1');
      expect(myCLL.current()).toBe('Test Item 1');
    })

    test('Should have a way to get back to the head.', () => {
      const myCLL = new TrueCLL(['Test Item 1', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myCLL.next()).toBe('Test Item 2');
      expect(myCLL.next()).toBe('Test Item 3');
      expect(myCLL.next()).toBe('Test Item 4');
      myCLL.addToTail('Test Item 5')
      expect(myCLL.next()).toBe('Test Item 5');
      myCLL.removeTail()
      expect(myCLL.next()).toBe('Test Item 2');
      myCLL.addToHead('Test Item 0')
      expect(myCLL.next()).toBe('Test Item 3');
      myCLL.removeHead()
      expect(myCLL.next()).toBe('Test Item 4');
      myCLL.reset()
      expect(myCLL.next()).toBe('Test Item 2');
      expect(myCLL.next()).toBe('Test Item 3');
      expect(myCLL.next()).toBe('Test Item 4');
      myCLL.addToTail('Test Item 5')
      expect(myCLL.next()).toBe('Test Item 5');
      myCLL.removeTail()
      expect(myCLL.next()).toBe('Test Item 2');
      myCLL.addToHead('Test Item 0')
      expect(myCLL.next()).toBe('Test Item 3');
      myCLL.removeHead()
      expect(myCLL.next()).toBe('Test Item 4');
    })

    test('Should circle back to the head when the end of the list is reached.', () => {
      const myCLL = new TrueCLL(['Test Item 1', 'Test Item 2', 'Test Item 3', 'Test Item 4']);
      expect(myCLL.next()).toBe('Test Item 2');
      expect(myCLL.next()).toBe('Test Item 3');
      expect(myCLL.next()).toBe('Test Item 4');
      expect(myCLL.next()).toBe('Test Item 1');
      expect(myCLL.next()).toBe('Test Item 2');
      expect(myCLL.next()).toBe('Test Item 3');
      expect(myCLL.next()).toBe('Test Item 4');
      myCLL.addToTail('Test Item 5')
      expect(myCLL.next()).toBe('Test Item 5');
      myCLL.addToHead('Test Item 0')
      expect(myCLL.next()).toBe('Test Item 0');
      expect(myCLL.next()).toBe('Test Item 1');
      myCLL.removeHead()
      expect(myCLL.next()).toBe('Test Item 2');
    })

  })

})