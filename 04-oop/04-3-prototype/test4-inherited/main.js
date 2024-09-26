"use strict"

// 공통 코드를 개발하는 개발자 입장에서
// 다른 개발자들이 만드는 모든 도형에 공통으로 들어가는 멤버
function Shape(name) {
    //생성자 함수, new Shape()로 객체를 생성하게 되면 자동으로 객체가 하나 만들어지고
    //생성자 함수를 거치면서 그 객체에 변수, 함수가 등록된다
    //객체 생성 시점에 자동으로 만들어지는 객체를 지칭
    this.name = name
}

Shape.prototype.draw = function() {
    console.log(`${this.name} 도형을 그립니다`)
}
console.dir(new Shape('rect1'))

// 후배 개발자 입장에서 선입 개발자가 만들어놓은 Shape를 상속받아서
// 자신이 구체적으로 만들어야 하는 도형을 개발하겠다는 입장 !!
function Rectangle(name, width, height) {
    // name 데이터가 객체에 유지되어야 한다
    // 객체별로 name 데이터가 다르게 유지 -> this에 등록
    // 아래처럼 작성해서 객체별로 데이터가 유지되게 할 수도 있지만
    //   ㄴ---- this.name = name

    // 다른 생성자 함수에 name이 작성되어 있으니, 그걸 그대로 이용하는 것이 좋다 -> 코드 중복이 되기 때문
    // 자신이 호출되어 객체가 생성될 때 다른 생성자 함수(상위)도 같이 호출되어
    // 자신의 this에 그 생성자 함수(상위)에 등록된 멤버가 들어오도록 !
    Shape.apply(this, [name])   //Shape 생성자 함수 호출, name을 매개변수로 지정해서

    //width, height 데이터가 객체에 유지되어야 한다
    //객체 여러 개에 공통 값인가?? ===> prototype에 등록
    //객체별로 다르게 유지되어야하는 값인가?? ===> this에 등록
    this.width = width
    this.height = height
}
let rect1 = new Rectangle('rect1', 100, 200)
//name을 Rectangle에서 직접 준비하지 않았다.
//Shape 생성자 함수를 같이 실행시킨거다. 
//Shape에 등록한 것이 Rectangle에서 자신의 것처럼 사용하고 있다.
// ㄴ==> 상속 개념
console.log(rect1.name, rect1.width, rect1.height)  //rect1 100 200
// 상위를 지정해서(Shape), 객체 생성 시점에 상위 생성자 함수까지 호출이 되었지만
// 상위의 prototype까지 상속되지는 않는다
// rect1.draw() -> error

//어떤 생성자 함수를 상속하고자 할 떄, 그 함수의 prototype까지 상속되게 하고자 한다면
Rectangle.prototype = new Shape()   //prototype 교체
Rectangle.prototype.calcArea = function() {
    console.log(`area : ${this.width * this.height}`)
}
let rect2 = new Rectangle('rect2', 100, 200)
console.log(rect2.name, rect2.width, rect2.height)
rect2.draw()
rect2.calcArea()

console.dir(rect2)
// this- name, width, height
// prototype - name, calcArea
// prototype - prototype -draw

/*
    상위 프로토 타입을 상속받고자 할 때
    위 처럼 상위 객체를 나의 프로토타입으로 등록해도 되고
    Rectangle.prototype = new Shape()
*/ 

//  상위 의 프로토타입을 나의 프로토타입으로 지정해도 되고
Rectangle.prototype = shape.prototype
let rect3 = new Rectangle('rect3', 100, 200)
console.log(rect3.name, rect3.width, rect3.height)  //rect3 100 200
rect3.draw()    //rect3 도형을 그립니다
rect3.calcArea() // area : 2000

console.dir(rect3)
