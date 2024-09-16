"use strict"

let todoArray = []

let inputNode = document.getElementById('todoList')
let resultNode = document.getElementById('todoList_result')

// todoList를 출력해주는 함수
function printResult(array) {
    let result = ''
    array.forEach((value, index) => {
        result += `<lable>${value}</lable>`
    })
    resultNode.innerHTML = result
}

function addList() {
    let todo = inputNode.value
    todoArray.push(todo)
    printResult(todoArray)
}