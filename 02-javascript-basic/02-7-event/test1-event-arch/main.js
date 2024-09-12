"use strict";

// html 문서 로딩 완료 이벤트, dom node가 메모리에 완성된 순간

window.addEventListener('load', () => {
  console.log('html문서 로딩 완료')
})  // 이 이벤트 안에서만 사용하면 화살표함수, 다른 곳에서도 사용하면 이름 선언

window.onload = () => { //위 코드와 같은 의미
  console.log('html문서 로딩 완료 ...2')
}

const myEventHandler = () => {
  console.log('myEventHandler .. button click')
}

let button1Node = document.getElementById('button1')
button1Node.addEventListener('click', () => {
  console.log('button 1 click')
})

let button2Node = document.getElementById('button2')
button2Node.onclick = () => {
  console.log('button 2 click')
}
