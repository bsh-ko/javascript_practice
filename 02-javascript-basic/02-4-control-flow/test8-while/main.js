"use strict"

// 1~ 10까지 더하기
let no = 1 //따로 변수 설정
let sum = 0
while( no <= 10) {  //for문과는 다르게 while문 안에 변수 선언을 할 수 없음
    sum += no
    no++
}
console.lot(`sum : ${sum}`)  //벡터 너무 편하다. + 안써도 되고.. 

while(false) {
    console.log('while body')
    //어차피 실행 안될텐데 ? --> 라는 뜻으로 vscode에서 흐릿하게 표현되는 코드
}

do {
    console.log('do while body')
}while(false)   //do-while 반복문은 무조건 한 번은 실행되기 때문에 흐릿하게 표현이 안됨

let i = 1
while(i <= 9) {
    console.log(`2 X ${i} = ${2 * i}`);
    i++;    //자꾸 습관으로 ;를 찍는데, 자바스크립트 안에서는 ;를 사용하지 않아도 됨
}