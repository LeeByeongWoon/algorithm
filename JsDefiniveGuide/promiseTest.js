const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("hello"), 2000);
});

const arr = [
  promise,
  promise,
  promise,
  promise,
  promise,
  promise,
  promise,
  promise,
];

arr.forEach((prm, index) => {
  promise.then((res) => console.log(`${index}: ${res}`));
});
