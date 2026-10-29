'use strict';
let number = Math.floor(Math.random() * 6);
console.log('正解は' + number + 'です。');
let answer = parseInt(window.prompt('数当てゲーム。0-5の数を入力してね'));

while (number !== answer) {
    if (number < answer) {
        window.alert('もっと小さな数だよ');
    }

    else if (number > answer) {
        window.alert('もっと大きな数だよ');
    }
    else {
        window.alert('1から5の数を入力してね');
    }
    answer = parseInt(window.prompt('数当てゲーム。0-5の数を入力してね'));


}
window.alert('あたり！プログラムを終了します。');