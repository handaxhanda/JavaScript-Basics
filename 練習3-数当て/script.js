'use strict';

const number = Math.floor(Math.random() * 6);
console.log(number);
const answer = parseInt(window.prompt('Enter number 0 to 5.'));
let message;
if (answer === number) {
    message = ("That's rignt");
}
else if (answer > number) {
    message = ('Too large.');
}
else if (answer < number) {
    message = ('Too small.');
}
else {
    message = ('0~5の数入れや');
}
window.alert(message);