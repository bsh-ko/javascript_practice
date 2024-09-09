"use strict";

let data = 8
let result; //undefined

if( data % 4 == 0 ) {
    result = '4의 배수입니다'
} else {
    result = '4의 배수가 아닙니다'
}
console.log(result)

//위 코드를 3항연산자로
let result2 = (data % 4 == 0 ) ? "4의 배수입니다." : "4의 배수가 아닙니다."

//참 거짓으로 나뉠때는 삼항연산자로 줄여서 쓰는 것이 편함 