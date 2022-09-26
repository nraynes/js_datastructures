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
    })

    // Make tests for adding multiple items, adding an array of items, adding an empty array, adding an array literal, and changing the size property.

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
    })

    // Make tests for adding multiple items, adding an array of items, adding an empty array, adding an array literal, and changing the size property.

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

  })

})