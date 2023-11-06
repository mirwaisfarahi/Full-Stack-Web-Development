const sumZero = (nums = [-1,1,3,4]) => {
    const storage = new Set();

  for (const num of nums) {
    const complement = -num;
    if (storage.has(complement)) {
      return [complement, num];
    }
    storage.add(num);
  }

  return undefined;
};

console.log(sumZero());