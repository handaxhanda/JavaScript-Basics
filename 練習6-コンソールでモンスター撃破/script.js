'use strict';

let enemy = 100;
let count = 0;
window.alert('戦闘開始');
while (enemy > 0) {
    const attack = Math.floor(Math.random() * 30) + 1;
    console.log('敵に' + attack + 'のダメージ');
    enemy -= attack;
    count += 1;
}
console.log('敵を倒した');