import { readFileSync } from "fs";
//node.js의 fs모듈을 사용해 파일을 읽어온다

var input = readFileSync("/dev/stdin").toString().split(" ");
//fs모듈을 사용해 ('/dev/stdin')안에 있는 파일을 읽어서 input에 넣는다
//읽어온 값은 array로 저장된다
//입력받은걸 코딩하기 편하게 바꿔서 쓰면된다

var a = parseInt(input[0]);
var b = parseInt(input[1]);
//input에 저장된 값을 바꿔서 사용하면 된다
//위의 .toString()을 보면 알 수 있듯이 값들이 문자로 저장되어 있기 때문에
//parseInt 을 써서 숫자로 변환 해줘야 한다

console.log(a * b);
//출력
