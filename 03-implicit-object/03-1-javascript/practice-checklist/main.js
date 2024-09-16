"use strict"

let todoArray = []

let inputNode = document.getElementById('todoList')
let resultNode = document.getElementById('todoList_result')

// todoList를 출력해주는 함수
function printResult(array) {
    let result = ''
    array.forEach((value, index) => {
        result += `<input type='checkbox' class='todo-checkbox' data-index='${index}'/> ${value} <br />`
    })
    resultNode.innerHTML = result
}

function addList() {
    let todo = inputNode.value
    todoArray.push(todo)
    printResult(todoArray)
    inputNode.value = ''  // 입력 필드를 비워줌
}

function deleteList() {
    let checked = document.querySelectorAll('.todo-checkbox')
    checked.forEach(c => {
        if(c.checked) {
            let index = c.getAttribute('data-index')
            todoArray.splice(index, 1)
        }
    })
    // 삭제 후 다시 리스트를 출력
    printResult(todoArray)
}