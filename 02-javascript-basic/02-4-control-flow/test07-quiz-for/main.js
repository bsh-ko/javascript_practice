"use strict";

for (let i = 1; i < 10; i++ ) {
    document.write(`<div><h3>${i}단</h3><br>`)
    for(let j = 1; j < 10; j++) {
        document.write(`${i}X${j}=${i*j}<br>`)
    }
    document.write('</div>')
}