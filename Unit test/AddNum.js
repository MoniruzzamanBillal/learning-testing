export const addNum = (nums) => {
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return sum;
};
