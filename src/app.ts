// const names: Array<string> = [];

// const promisse: Promise<string> = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       resolve("This is done");
//     }, 2000);
//   } catch (error) {
//     reject(error);
//   }
// });

// promisse.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max" }, { age: 30 });

console.log(mergeObj.age);
