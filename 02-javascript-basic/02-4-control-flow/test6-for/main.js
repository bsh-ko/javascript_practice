"use strict"

for (let i = 0; i < 3; i++ ) {
    console.log(`Hello ${i}`);
}

for (let i = 3; i < 3; i-- ) {
    console.log(`World ${i}`);
}

for (let data =1, data2 = 10; data1 <=5 && data2 > 5; data1++, data2 -= 2) {

}

let sum = 0
for (let i = 1; i <= 10; i++) {
    sum += i
}
console.log(sum)

let sum2 = 0
for (let i = 1; i <= 10; i++) {
    if(i % 2 !==0) {
        sum2 += i
    }
}
console.log(sum)

