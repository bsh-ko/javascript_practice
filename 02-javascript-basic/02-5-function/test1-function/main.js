// 함수 선언 및 이용 방법

console.log('step1')

// 호출이 되어야 함수 실행
function myFun1() {
    console.log('execute function body')
}
console.log('step2')

// 함수 호출
myFun1()    // 함수 실행이 모두 끝나야 밑줄 실행
console.log('step3')

// 함수는 일종의 코드 재사용이다
// 함수를 하나 선언하고 그 함수의 업무가 필요한 곳에서 반복 실행
myFun1()   


// argument, return value
function myFun2(arg1, arg2) {
    console.log(`arg1 : ${arg1}, arg2 : ${arg2}`)
}
myFun2(10, 20)

//default parameter
function myFun3(arg1, ar2 = 0) {
    console.log(`arg1 : ${arg1}, arg2 : ${arg2}`)
}

console.log('``````````````')
myFun3()    //arg1 : undefined, arg2 : 0
myFun3(10)    //arg1 : 10, arg2 : 0
myFun3(10, 20)    //arg1 : 10, arg2 : 20
