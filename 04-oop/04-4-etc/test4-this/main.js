"use strict"

// 생성자 함수내에서의 this
function User1(arg1) {
  //new 로 호출되므로 호출하자마자 빈 상태의 객체가 만들어지고
  //생성자 함수가 호출이 되는 동안 this는 그 빈 상태의 객체
  console.log(this)  //User1 {}
  
  this.data = arg1 // <- 값 넣어주기
  console.log(this) //User1 {data: '홍길동'}
}
let user1 = new User1('홍길동')
console.log(user1) //User1 {data: '홍길동'}

//객체 메서드의 this
function User2(arg1, arg2) {
  this.name = arg1
  this.age = arg2
  
  this.sayHello = function() {
    console.log(`Hello ${this.name} , ${this.age}`)
  }
}

let user2 = new User2('홍길동', 20)
let user3 = new User2('김길동', 30)

// 현 순간의 sayHello의 this는 user2로 호출하는 것이므로 user2
user2.sayHello()  //Hello 홍길동 , 20
// 현 순간의 sayHello의 this는 user2로 호출하는 것이므로 user3
user3.sayHello()  //Hello 김길동 , 30

//화살표 함수, 생성자 함수 내에 선언될 때 this
function User3() {
  this.data = 20
  this.fun1 = function() {
    console.log(this.data)  //20
  }

  //화살표함수 : 선언 시점에 상위 스코프의 this가 지정됨
  this.fun2 = () => {
    console.log(this.data)  //20
  }
}

let user4 = new User3() 
user4.fun1()
user4.fun2()

// object literal 로 만든 객체의 함수.. this
let obj = {
  data: 30,
  fun1 : function() {
    console.log(this.data)
  },
  fun2: () => {
    console.log(this.data)
  }
}

//function 예약어의 함수에서 this는 동적 결정이므로 객체가 만들어진 후 함수가 호출
obj.fun1()  //30
// 화살표 함수는 lexical this, 작성 시점에 상위스코프가 실행되어야 객체가 만들어진다
// 선언 시점에는 {}는 객체를 만들기 위한 정보에 지나지 않는다. 스코프가 아니다.
obj.fun2()  //undefined

//==>화살표 함수는 함수를 간단하게 선언하고 싶을때 자주 이용.
//==>this 를 함수내에서 사용하지 않는 경우에 쓸 것을 권장하고 있다..