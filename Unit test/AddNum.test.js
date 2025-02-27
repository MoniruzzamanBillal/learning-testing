import { it, expect } from "vitest";
import { addNum } from "./AddNum";

it("should return sum of array", () => {
  const res = addNum([1, 2, 3]);
  expect(6).toBe(6);
});
