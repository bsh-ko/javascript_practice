"use strict";

let resultNode = document.getElementById('result')

let diary = [];

//화면에 배열의 결과를 출력하는 함수
function printResult(){
  let resultTxt = ''
  diary.forEach((value) => {
    resultTxt += `<li>${value}</li>`;
  })
  resultNode.innerHTML = resultTxt;
}

function writeDiary() { 
 //글을 입력받아 배열에 추가
 // 아직은 프롬포트로만 할 수 있는게 아쉽, 나중에 더 발전시킬 코드
  diary.push(prompt("오늘의 한 줄 일기를 써보세요 !"))
  console.log(diary)
  printResult()
}
function deleteDiary() {
  //가장 나중 글부터 제거
  diary.pop();
  printResult()
}

printResult()