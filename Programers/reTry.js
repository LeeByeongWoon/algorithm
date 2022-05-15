// 유저 한명은 한번에 한명씩만 신고가능
// 한유저를 여러번 신고할 수 있지만 중복 처리됨.
// k번 이상 신고된 유저는 정지되며 모든 유저에게 메일로 알림
// 신고한 내용을 취합하여 마지막에 한꺼번에 정지 처리후 메일 발송함
// id 배열 = id_list 신고당한id 배열 = report 정지 기준 횟수 k

// 소문자로만 이루어져있음 , 중복값 없음
let id_list = ["muzi", "frodo", "apeach", "neo"];
let id_list2 = ["ryan", "con"];
//이용자아이디 신고한아이디
let report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
];
let report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];

let k = 2;
const answer = new Array(id_list.length);
answer.fill(0);
const report_list = {}; //

id_list.map((user) => {
    report_list[user] = []; //key로 userid를 value로 빈 배열을 가지는 객체
});
report.map((user) => {
    const [user_id, report_id] = user.split(" ");
    if (!report_list[report_id].includes(user_id)) {
        report_list[report_id].push(user_id);
    }
});
console.log(report_list);
