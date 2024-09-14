"use strict";

let array1 = [10, 20]
let array2 = [30, 40]

//두 배열 데이터를 합쳐서 새로운 배열로 만들기
let array3 = array1.concat(array2) //array1에 array2를 붙힌다
console.log(array3)//(4) [10, 20, 30, 40]

//배열의 모든 데이터를 구분자로 결합해서 하나의 문자열로 만들기 -> 사이사이마다 원하는 것 삽입 
let result1 = array3.join('a')
console.log(result1)//10a20a30a40

//배열에 데이터 추가, 맨뒤, 맨앞... 
array3.push(100)    //가장 나중 순번에 추가
array3.unshift(200) //가장 첫 번째 순번에 추가
console.log(array3)//(6) [200, 10, 20, 30, 40, 100]

//한꺼번에 여러 개 추가 가능
array3.push(1000, 2000)
array3.unshift(3000, 4000)
console.log(array3)//(10) [3000, 4000, 200, 10, 20, 30, 40, 100, 1000, 2000]

//배열에 데이터 삭제, 맨앞, 맨뒤.. 
array3.pop()    //맨 뒤 삭제
array3.shift()      //맨 앞 삭제
console.log(array3)//(8) [4000, 200, 10, 20, 30, 40, 100, 1000]

//splice - 추가
//매개변수 : 인덱스 - 갯수 - 데이터
let array = [10, 20, 30, 40]
//갯수를 0으로 하면 삭제 데이터 없다는 의미.. 결국 추가.. 
array.splice(2, 0, 'hello') //array[2]에서 0개를 삭제하고 'hello'추가
console.log(array)//(5) [10, 20, 'hello', 30, 40]
//여러개 추가.. 
array.splice(2, 0, 'one', 'two')
console.log(array)//(7) [10, 20, 'one', 'two', 'hello', 30, 40]

//교체.... 갯수에 0 이상의 숫자.. 그 갯수만큼 삭제후 추가..
array.splice(2, 3, 'html', 'css', 'js')
console.log(array)//(7) [10, 20, 'html', 'css', 'js', 30, 40]

//삭제.. 추가하는 데이터를 지정하지 않으면 된다.. 
array.splice(2, 3)
console.log(array)//(4) [10, 20, 30, 40]

//slice : 위치지정하고 여러 개 획득할 때.. 여러 개임으로 반환값은 배열
//데이터 획득.......................
let result2 = array.slice(1, 4)
console.log(result2)//(3) [20, 30, 40]

//숫자를 하나만 지정하면 그 위치부터 나머지 다... 
let result3 = array.splice(2)
console.log(result3)//(2) [30, 40]