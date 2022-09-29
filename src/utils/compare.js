const compare = (val1, val2) => (JSON.stringify({ test: val1 }) === JSON.stringify({ test: val2 }));

module.exports = compare;
