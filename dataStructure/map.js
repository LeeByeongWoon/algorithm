let map = new Map();
map.set("name", "kevin");
map.set("age", 28);
console.log(map.get("age"));

const roomTypeMap = new Map([
    ["01", "공일"],
    ["02", "공이"],
    ["03", "공삼"],
    ["04", "공사"],
    ["05", "공오"],
]);

let newMap = new Map().set("name", "paul").set("age", 34);
console.log(newMap.get("name"));

// has 키 확인, size = length , delete(value) = 삭제 clear() = 모든 값 삭제
console.log(newMap.entries());
console.log(newMap.values());
