/**
 * Checks to see if an input is a date object or is formatted as a date object.
 * @param {Any} val
 * @param {Boolean} checkExact
 * @returns {Boolean}
 */
 const isDate = (val, checkExact = false) => {
  if (val instanceof Date) return true;
  if (typeof val === 'string') {
    if (checkExact) return false;
    val = val.replaceAll(' ', '');
  }
  return new Date(`${`${parseInt(-Math.abs(val), 10)}` !== 'NaN' ? `${val}padding` : val}`).toString() !== 'Invalid Date';
};

/**
 * Checks to see if something is an object.
 * @param {Any} val
 * @param {Boolean} checkEmpty
 * @returns {Object}
 */
const isObject = (val, checkEmpty = false) => {
  const isObj = val !== null && !isDate(val) && !Array.isArray(val) && typeof val === 'object';
  return (checkEmpty && isObj ? isObj && Object.keys(val).length : isObj) ? true : false;
};

/**
 * Takes a value and converts it to a standard format for comparison.
 * @param {Any} val
 * @param {Object} val
 * @returns {Number || String} 
 */
const convertValue = (val, options) => (typeof val === 'function'
  ? 1
  : isDate(val)
    ? new Date(`${val}`).getTime()
    : typeof val === 'string'
      ? options && options.caseInsensitive
        ? val.trim().toLowerCase()
        : val.trim()
      : val);

/**
 * Takes two objects and checks to see if everything in the first object is also in the second object.
 * Can pass options to make it case insensitive or check for absolute equality (meaning the objects have to be exactly the same).
 * @param {Object} object1
 * @param {Object} object2
 * @param {Object} options
 * @returns {Boolean}
 */
const compareObjects = (object1, object2, options = {}) => {
  if (!object1
    || !object2
    || !isObject(object1)
    || !isObject(object2)
    || ((options && options.totalEquality) && Object.keys(object1).length !== Object.keys(object2).length)
  ) return false;
  const object1Keys = Object.keys(object1);
  for (let i = 0; i < object1Keys.length; i++) {
    let value1 = object1[object1Keys[i]];
    let value2 = object2[object1Keys[i]];
    if (value2 === undefined && value1 !== undefined) return false;
    if (isObject(value1)) {
      if (!compareObjects(value1, value2, options)) return false;
    } else if (Array.isArray(value1)) {
      if (!compareArrays(value1, value2)) return false;
    } else {
      const testValue1 = convertValue(value1, options);
      const testValue2 = convertValue(value2, options);
      if (testValue1 !== testValue2) return false;
    }
  }
  return true;
};

/**
 * Takes in two arrays and checks to see if they are the same.
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */
const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const a = [...arr1].sort();
  const b = [...arr2].sort();
  for (let i = 0; i < a.length; i++) {
    const curA = a[i];
    const curB = b[i];
    if (isObject(curA) && isObject(curB)) {
      if (!compareObjects(curA, curB)) return false;
    } else if (Array.isArray(curA) && Array.isArray(curB)) {
      if (!compareArrays(curA, curB)) return false;
    } else if (isDate(curA) && isDate(curB)) {
      if (`${curA}` !== `${curB}`) return false;
    } else if (curA !== curB) return false;
  }
  return true;
};

const compare = (val1, val2) => {
  if (Array.isArray(val1)) {
    if (Array.isArray(val2)) {
      return compareArrays(val1, val2);
    }
    return false;
  } else if (isObject(val1)) {
    if (isObject(val2)) {
      return compareObjects(val1, val2, { totalEquality: true });
    }
    return false;
  } else if (isDate(val1)) {
    if (isDate(val2)) {
      return val1.getTime() === val2.getTime();
    }
    return false;
  } else {
    return val1 === val2;
  }
}

module.exports = compare;
