"use strict";

for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        continue        //짝수일 때 console.log 아래 코드 실행 X (건너뜀)
    }

    console.log(`for body ${i}`)

    if(i === 7) {
        break           //7이 됐을 때 반복문 끝
    }
}

// for(let no1 = 0; no1 < 2; no1++) {
//     console.log(`step1 : ${no1}`)
//     for(let no2 = 0; no2 < 2; no2++) {
//         console.log(`step2 : ${no1}, ${no2}`)
//     }
// }
// ㄴ> 총 6개의 출력값
// 0 
// 0, 0
// 0, 1
// 1
// 1, 0
// 1, 1

for(let no1 = 0; no1 < 2; no1++) {
    console.log(`step1 : ${no1}`)
    for(let no2 = 0; no2 < 2; no2++) {
        console.log(`step2 : ${no1}, ${no2}`)
        break;  //no2가 ++되기 전에 반복문 탈출
    }
}
// ㄴ> 총 4개의 출력값
// 0 
// 0, 0
// 1
// 1, 0

aaa : for(let no1 = 0; no1 < 2; no1++) {
    console.log(`step1 : ${no1}`)
    for(let no2 = 0; no2 < 2; no2++) {
        console.log(`step2 : ${no1}, ${no2}`)
        break aaa
    }
}

// for에 라벨을 줌, 라벨명 aaa
// break가 aaa를 탈출하는 것이기 때문에 출력값은
// 0
// 0, 0