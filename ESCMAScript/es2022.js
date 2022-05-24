const a = "hi";
const b = "galaxy";
class hello {
  name = "name";
  #age = 28; //private
  static isHuman = false;
  [a + b] = "hello jito";
}

console.log(hello.isHuman);
console.log(new hello().higalaxy);
console.log([1, 2, 3, 4].at(-1)); //인덱싱
console.log("hello".at(-1)); // o
console.log(Object.hasOwn({ x: 3 }, "x"));
const e = new Error("error", { cause: "원인" });
console.log(e.cause);
