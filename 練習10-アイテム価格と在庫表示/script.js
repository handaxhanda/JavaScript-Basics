'use strict';
let jsbook = { title: 'javascript入門', price: 2500, stock: 3 };
for (let p in jsbook) {
    console.log(p + '=' + jsbook[p]);
} 