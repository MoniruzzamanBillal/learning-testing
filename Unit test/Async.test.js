import { describe, expect, it } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./Async";

describe("CallBackFunction", () => {
  it("Should return encrpyted message !!!", async () => {
    let msg = "Message";

    const encryptedData = await new Promise((resolve, reject) => {
      encryptMessage(msg, (message) => resolve(message));
    });

    expect(encryptedData).toBeDefined();
  });

  //
});

//

describe("promise", () => {
  it("should return message ", async () => {
    let msg = "Message";
    const encryptedData = await encryptMessagePromise(msg);

    expect(encryptedData).toBeDefined();
  });
});
