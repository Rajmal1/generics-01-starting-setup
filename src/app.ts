const names: Array<string> = [];

const promisse: Promise<string> = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("This is done");
    }, 2000);
  } catch (error) {
    reject(error);
  }
});

promisse.then((data) => {
  data.split(" ");
});
