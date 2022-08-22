// for of

let data = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let el of data) {
  sum += el;
}
console.log(sum);

let frequency = {};
for (let letter of "mississippi") {
  frequency[letter] ? frequency[letter]++ : (frequency[letter] = 1);
}

console.log(frequency);

let text = "Na na na na na na na nana Batman";
let wordSet = new Set(text.split(" "));
console.log(wordSet);

let wordList = (() => {
  let temp = [];
  for (let word of wordSet) {
    temp.push(word);
  }
  return temp;
})();

console.log(wordList);

const User = {
  name: "hello",
  age: 22,
  phoneNumber: "010-1234-1234",
};

for (let info in User) {
  console.log(User[info]);
}
