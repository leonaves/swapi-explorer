export default (array, chunkSize = Infinity, mapper) => {
  const newArray = [];

  for(let i = 0; i < array.length; i += chunkSize) {
    newArray.push(array.slice(i, i + chunkSize));
  }

  return newArray.map(mapper);
};
