export function encryptMessage(message, callBack) {
  callBack(message);
}

export function encryptMessagePromise(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (message) {
        resolve(message);
      } else {
        reject(new Error("Failed !!"));
      }
    }, 2000);
  });
}
