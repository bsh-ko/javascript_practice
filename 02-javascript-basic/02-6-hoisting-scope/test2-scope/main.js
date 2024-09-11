"use strict";

//중복 선언
var data1 = 10
let data2 = 10
const data3 = 10

var data1 = '홍길동'
// let data2 = '홍길동'   //error
// const data3 = '홍길동' //error

// 동일 스코프에서 중복 선언은 var에 한해서 지원된다

// ---------
// scope가 다른 위치에서 중복 선언
let data4 = '홍길동' //global scope

const myFun = () => {
  let data4 = '김길동' //local scope
  console.log(`in function ${data4}`)
}

myFun()
console.log(`in function ${data4}`) // -> 김길동으로 나올까 ?  >> 홍길동으로 나옴 <<


//==>스코프가 다르다면 변수 중복 선언 가능하다. let, const 도...
//local 우선이다..
//변수명을 의미있는 단어로 주는 것이 기본임으로..
//변수명을 중복해서 local 변수를 자주 만든다..
