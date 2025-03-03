import { describe, expect, it } from "vitest";
import { ValidateEmail } from "./ValidateEmail";

describe("ValidateEmail", () => {
  it("should retrn valid email !!!", () => {
    const testMail = "abc@d.com";

    const resultFn = () => ValidateEmail(testMail);

    expect(resultFn).not.toThrow();
  });

  it("should throw error if  invalid email given!!!", () => {
    const testMail = "abc";

    const resultFn = () => ValidateEmail(testMail);

    expect(resultFn).toThrow();
  });

  it("should throw error if empty string is given!!!", () => {
    const testMail = "";

    const resultFn = () => ValidateEmail(testMail);

    expect(resultFn).toThrow();
  });
});
