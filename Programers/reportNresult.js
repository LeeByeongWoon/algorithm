// 유저 한명은 한번에 한명씩만 신고가능
// 한유저를 여러번 신고할 수 있지만 중복 처리됨.
// k번 이상 신고된 유저는 정지되며 모든 유저에게 메일로 알림
// 신고한 내용을 취합하여 마지막에 한꺼번에 정지 처리후 메일 발송함

// id 배열 = id_list 신고당한id 배열 = report 정지 기준 횟수 k

// 소문자로만 이루어져있음 , 중복값 없음
let id_list = ["muzi", "frodo", "apeach", "neo"];
let id_list2 = ["ryan", "con"];
//이용자아이디 신고한아이디
let report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
let report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];

let k = 2;

let a = new Set();
a.has;
// 중복 체크 하고,
function solution(id_list, report, k) {
    // 결과
    var answer = [];
    // 신고자: 신고당한 사람
    const reported = {};
    const reportTimes = {};
    // 신고자 : set();
    id_list.forEach((user) => (reported[user] = new Set()));
    // 신고자: 신고당한사람 (set으로 중복값 걸러짐)
    for (let i = 0; i < id_list.length; i++) {
        answer.push(0);
    }
    report.forEach((users) => {
        // 공백기준으로 신고자, 신고당한사람 분리(구조파괴 문법)
        const [declarer, reported_user] = users.split(" ");
        // reported에 set으로 신고당한사람 추가 (중복 제거)
        reported[declarer].add(reported_user);
        // 값이 없을경우 0으로 초기화 해서 숫자형으로 변경
    });
    for (const key in reported) {
        reported[key].forEach((rep) => {
            if (reportTimes[rep] === undefined) reportTimes[rep] = 0;
            // 횟수 증가
            reportTimes[rep] += 1;
        });
    }

    // report 당한 횟수 검증
    for (const key1 in reported) {
        reported[key1].forEach((data) => {
            if (reportTimes[data] >= k) {
                answer[id_list.indexOf(key1)] += 1;
            }
        });
    }
    return answer;
}
console.log(solution(id_list, report, k));
