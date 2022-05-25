// Number
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE * 2);

// 비교연산은 일반 숫자와 섞어 쓸 수 있지만, 산술연산은 불가능
// console.log(BigInt(Number.MAX_VALUE) * 2n);

// ^es6
console.log(Number.parseInt("123"));
console.log(Number.parseFloat("123.123"));
console.log(Number.isNaN("123.123")); /// x === NAN 불가능
console.log(Number.isFinite(123));
console.log(Number.isInteger(123.123));
console.log(Number.isSafeInteger(Number.MAX_VALUE * 2));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);

console.log(Date.now());
console.log(new Date());
console.log(new Date().getTime());
console.log(new Date().toISOString());

// String
console.log("\xA9");
console.log("\u03c0");
console.log("\u{1f600}");
console.log("hello" > "be");
const s = "hello, world!";
console.log(s.endsWith("!"));
console.log(s.includes("or"));
console.log(s.replace("llo", "ya"));
console.log(s.normalize("NFD")); //정규화 NFD NFKC NFKD
console.log(s.charAt(0));
console.log(s.at(0)); //Iterable index (array,string ...)
console.log(s.charCodeAt(0));
console.log(s.codePointAt(0));

console.log("x".padStart(3));
console.log("x".padEnd(3));
console.log("x".padStart(4, "*"));
console.log("   trim ".trim());
console.log("   trim ".trimStart());
console.log("   trim ".trimEnd());

console.log("hello".concat("!"));
console.log("hello".repeat(5));
console.log(String.raw`\n`.length);

console.log(/^HTML/.test("HTML")); // result boolean
console.log("HTML".search(/^HTML/)); // fist match index
console.log("testing: 1, 2, 3".match(/\d+/g)); // return matched RegEx array
console.log("testing: 1, 2, 3".replace(/\d+/g, "#")); // match str replace
console.log("testing: 1, 2, 3".split(/\D+/)); // [ '', '1', '2', '3' ]

let array_1 = ["a", "b", "c"];
let array_2 = [];
let array_3 = [];
array_2 = Array.from(array_1); // 깊은복사
array_3 = [...array_1]; // 깊은 복사
let array_4 = array_1; // 앝은복사 같은 주소 참조
console.log(array_3 === array_1);
console.log(array_2 === array_1);
console.log(array_4 === array_1);

// change types

console.log("7" + "3"); //"73"
console.log("7" * "3"); // 21
console.log(NaN + " Object"); // "NaN Object" NaN to string
let n = 17;
console.log("0b" + n.toString(2));

console.log((123456.789).toFixed(2)); //123456.79
console.log((123456.789).toExponential(2)); //1.23e+5
console.log(parseInt("10001", 2)); // 2 => 10
console.log(typeof ("aa" + {}));
console.log(typeof new Date().getTime());
console.log([99].toString());
console.log(Number([99]));
console.log(new Date().valueOf()); // num
