"use strict"

//test1 ........... execution context
/** */
// let x = 10  

// function oneFun() {
//     let y = 20
//     console.log(x, y)
// }

// function twoFun(){
//     let z = 30
//     console.log(x, z)
// } 

// console.log(x)

// oneFun()

// twoFun()

// console.log(x)

// function outerFun() {
//     let y = 20

//     function innerFun() {
//         let z = 30
//         console.log(x, y, z)
//     }
//     innerFun()
// }

// outerFun()

// closure(클로져)가 필요한 상황
// 함수의 lexical 정보가 따로 저장되어야 하는 상황
function outerFun() {
    let y = 20

    function innerFun() {
        let z = 30
        console.log(x, y, z)
    }
    return innerFun
}

let resultFun = outerFun()
resultFun()