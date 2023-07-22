// utils/countAge32.js
function countItemsWithAge32(data) {
  const items = data.split(', ');
  let count = 0;
  for (const item of items) {
    if (item.includes('age=32')) {
      count++;
    }
  }
  return count;
}

module.exports = {
  countItemsWithAge32,
};
