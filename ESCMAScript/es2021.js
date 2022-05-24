console.log("hello,we are,challengers".replaceAll(",", " "));

Promise.any([Promise.reject(1), Promise.reject(3), Promise.resolve(5)]).then(
  (result) => console.log(result)
); //어떤 것이라도 성공할 시 resolve

// weakReferences << 가비지 컬렉터 관련 함수

let a = 0;
a ||= 2; // === a= a||2

console.log(1_000_000); // 1000000 구분자
