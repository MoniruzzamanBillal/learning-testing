import { it, expect } from "vitest";
import { addNum } from "./AddNum";

// it("should return sum of array", () => {
//   const res = addNum([1, 2, 3]);
//   expect(6).toBe(6);
// });

// AAA pattern
// Arrange , Action , Assertion
it("should return sum of array!!!", () => {
  const numData = [2, 4, 6, 8];

  const expectedRes = numData.reduce((acc, curr) => acc + curr, 0);

  const resSum = addNum(numData);

  expect(resSum).toBe(expectedRes);
});

it("should return sum of array , even if provide array of strings!!!", () => {
  const numData = ["1", "3", "4"];

  const expectedRes = numData.reduce((acc, curr) => +acc + +curr, 0);

  const resSum = addNum(numData);

  expect(resSum).toBe(expectedRes);
});

// ! for error
it("should throw an error if no argument is passed !!!", () => {
  try {
    const res = addNum();
  } catch (error) {
    expect(error).toBeDefined();
  }
});
