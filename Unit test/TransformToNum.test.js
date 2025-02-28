import { expect, it } from "vitest";
import { transformToNum } from "./TransformToNum";

it("should return a number if string is passed !!!", () => {
  const result = transformToNum("3");

  expect(result).toBeTypeOf("number");
});
