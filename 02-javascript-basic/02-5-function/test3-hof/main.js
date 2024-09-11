//지역변수 전역변수
"use strict";

//test1 ............ local variable va global variable
let data1 = 10  // global variable.

function myFun(arg1) {
  let data2 = 20
  // 함수 내부에서 global, local variable 이용 가능
  console.log(`${data1}, ${data2}, ${arg1}`)
}

myFun(30) // 10, 20, 30

// 변수 사용 가능 여부
console.log(data1)  // 10 -> 정상적으로 데이터 얻기 가능. global variable이니까. 
console.log(arg1)   // arg1 is not defined -> 매개변수는 그 함수 내에서 선언된 local variable이다. --> 여기서 오류남으로 주석처리를 안해준다면 아래 코드 실행 x
console.log(data2)  // data2 is not defined

// 그렇다면 전역변수를 사용하는게 좋은 것인가? 절대 아님.
// 변수가 사용되는 공간에 따라 (여러곳에서 사용하면 전역, 어떤 한 내부에서 사용하면 지역 변수를 사용할 것) 유연하게 사용하는 것이 중요함

// hof ...........
function test1() { console.log('test1') }
function test2() { console.log('test2') }

function myFun2(arg) {
  arg() // 함수 호출
  return test2
}

let result = myFun2(test1)
result()

// 함수를 어떤 함수의 매개변수에, 그 함수의 결과로 리턴
// 그곳에서만 사용하는 함수를 굳이 정식으로 선언할 필요가 있을까?

function myFun3(arg) {
  arg()
  return () => console.log('test2')
}

let result3 = myFun3(() => console.log('test1'))
result3()
