// 산술 연산자
let data1 = 10 
let data2 = 4

console.log(data1 + data2) 
console.log(data1 - data2) 
console.log(data1 * data2) 
console.log(data1 / data2) 
console.log(data1 % data2) 

// 증감연산자 
let data3 = 10
data3++
console.log(data3)  //11
++data3
console.log(data3)  //12
data3--
console.log(data3)  //11
--data3
console.log(data3)  //10

//연산자 우선순위
let data4 = 10
let data5 = 10
let result1 = data4++
let result2 = ++data5
console.log(data4, result1) //11 10
console.log(data5, result2) //11 11

//할당 연산자
let a1 = 10
a1 = a1 + 10
console.log(a1) //20
a += 10
console.log(a1) //30

//+ 연산자
console.log(10 + 20)            //30
console.log('hello' + 'world')  //helloworld
console.log('hello' + 10)       //hello10
console.log('10' + '20')        //1020

//타입변형
console.log(10 + parseInt('20')) //30
console.log((10).toString()+ 20) //1020

//비교연산
let a2 = 10
let a3 = 10
console.log(a2 == a3)   //t
console.log(a2 != a3)   //f    
console.log(a2 === a3)  //t
console.log(a2 !== a3)  //f

a2 = 10
a3 = '10'
console.log(a2 == a3)   //t
console.log(a2 != a3)   //f
console.log(a2 === a3)  //f
console.log(a2 !== a3)  //f

console.log(5 < 10)//true
console.log(5 < '10')//true
console.log('hello' < 'world')//true
console.log('abc' < 'abd')//true
console.log('이길동' < '김길동')//false

let a4 = true
console.log(a4)
console.log(!a4)