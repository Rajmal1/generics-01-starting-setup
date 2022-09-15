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

const mergeObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergeObj.age);

interface Lenghty {
  length: number;
}

function coutAndDescribe<T extends Lenghty>(element: T): [T, string] {
  let descriptionText = "Got no value.";

  if (element.length === 1) {
    descriptionText = `Got 1 element`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

// console.log(coutAndDescribe("Hi there!"));
// console.log(coutAndDescribe(["Sports", "Cooking"]));
console.log(coutAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");
