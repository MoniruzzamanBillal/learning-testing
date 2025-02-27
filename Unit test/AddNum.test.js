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
