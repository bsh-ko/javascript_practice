"use strict";
let data1 = 10
data2 = 20

console.log(data1, data2)

function myFun() {
    // "use strict";

    let data3 = 10
    data4 = 20
    console.log(data3, data4)
}
myFun()

/*
    data2에서 let(예약어)을 쓰지 않았지만 error가 뜨지 않는다.
    함수 myFun()에 "use strict"; 를 정의해서 함수 내에서 엄격모드 실행
    -> 함수 안에서의 let 선언하지 않았던게 오류가 난다.

    자바스크립트 맨 첫 줄에 (전체에) 정의한다면
    -> data2에서 오류가 나고 그 아래에 것은 아예 가동이 되지 않는다.

*/ 