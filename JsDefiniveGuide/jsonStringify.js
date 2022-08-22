import FormData from "form-data";
const Person = {
  name: "hello",
  age: 12,
  address: "seoul jung gu",
  job: "programmer",
};

console.log(Person);
console.log(JSON.stringify(Person));
console.log(typeof JSON.stringify(Person));

const formData = new FormData();
formData.append("documents", JSON.stringify(Person), {
  type: "application/json",
});
console.log(formData);
