const matchAllResult = "11a22b".matchAll(/(\d)(\D)/g);

console.log(matchAllResult.next());
console.log(matchAllResult.next());
console.log(matchAllResult.next());

console.log(1n + 1n); // big int
console.log(typeof 1n);

Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject("not ready"),
  Promise.resolve("ok"),
]).then((result) => {
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]);
});

console.log(globalThis === global);
// console.log(globalThis === window);

const obj = {
  a: "hello",
  b: "not Hello",
  c: {
    d: "deep",
  },
};

console.log(obj.c?.d);
console.log(obj.d?.toString());
console.log("" ?? "hello"); // ""
console.log(undefined ?? "hello"); // hello( only null , undefined )
console.log("" || "aa"); // aa
