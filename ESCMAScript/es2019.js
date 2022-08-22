console.log(Object.entries({ a: "hello", b: "bye" }));
console.log(
  Object.fromEntries([
    ["a", "hello"],
    ["b", "bye"],
  ])
);
// entry 만들어서 풀어버리면 편할듯????
console.log(["abc", "def", ["gh", ["ijk"]]].flat());
console.log(["abc", "def", ["gh", ["ijk"]]].flat(2));
console.log(["abc", "def", ["gh", ["ijk"]]].flat(Infinity));

["abc", "def"].map((v) => v.split("")); // [['a', 'b', 'c'], ['d', 'e', 'f']]
["abc", "def"].map((v) => v.split("")).flat(); // ['a', 'b', 'c', 'd', 'e', 'f']
["abc", "def"].flatMap((v) => v.split("")); // ['a', 'b', 'c', 'd', 'e', 'f']

"    abc    ".trim(); // 'abc'
"    abc    ".trimStart(); // 'abc    '
"    abc    ".trimEnd(); // '    abc'
"    abc    ".trimRight(); // '    abc'
"    abc    ".trimLeft(); // 'abc    '

try {
  new Error("hello");
} catch {
  console.error("에러가 나든지 말든지");
}
