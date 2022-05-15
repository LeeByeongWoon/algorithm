const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1);
//Set(5) { 1, 2, 3, 4, 5 }
let mySet = new Set();

// 추가
mySet.add(1);
mySet.add(5);
// 중복 제거
mySet.add(5);
mySet.add("some Text");

console.log(mySet);
//Set(3) { 1, 5, 'some Text' }
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 }); //다른 메모리주소를 참조하므로 들어감
console.log(mySet);
//Set(5) { 1, 5, 'some Text', { a: 1, b: 2 }, { a: 1, b: 2 } }

let myArr = Array.from(mySet);
//Array.from([1, 2, 3], x => x + x);
// expected output: Array [2, 4, 6]

console.log(myArr);
//[ 1, 5, 'some Text', { a: 1, b: 2 }, { a: 1, b: 2 } ]
let mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size);
//set to arr
console.log([...mySet2]);
let myArray = ["val1", "val2", "val3"];

let mySet3 = new Set(myArray);
console.log(mySet3);
const set2 = new Set([3, 4, 5, 6, 7, 8]);

let interserction = new Set([...set1].filter((x) => set2.has(x)));
console.log(interserction);
let difference = new Set([...set1].filter((x) => !set2.has(x)));
console.log(difference);

//add 추가 delete 삭제 clear 초기화 has:boolean 보유여부 forEach 순서대로 콜백 호출
