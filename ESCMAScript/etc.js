const obj = {
  a: "hello",
  b: {
    c: "new",
    d: 2,
  },
};
console.log(Object.getOwnPropertyDescriptor(obj)); //es2017
"zero".padEnd(10); // 'zero      '
"zero".padEnd(10, "babo"); // 'zerobaboba'
"zero".padEnd(6, "babo"); // 'zeroba'
"zero".padEnd(3); // 'zero' //es2017

console.log(5 ** 3); //Math.pow(5,3)
