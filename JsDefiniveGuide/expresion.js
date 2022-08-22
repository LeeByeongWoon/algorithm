`use strict`;

let f = null;
let n = 0;
try {
  f(n++);
} catch (e) {
  console.log(n); //1 예외 전에 증가함
}
f?.(n++); // 단축평가되어 증가하지 않음.

let a = [1, 2, 3, 4, 5, 6];

delete a[0];

let b; // let b = void 0 === undefined

console.log(a);
console.log(a[0]);
console.log(4 ** 3);
console.log((-3) ** 2);
console.log(1 + {});

console.log("ZOO" > "asdb"); // ascii upper < ascii lower

let data = [7, 8, 9];
console.log(3 in data); // property value
