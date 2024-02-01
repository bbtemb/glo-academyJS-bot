'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && !/\s/.test(num);
};

function one(x) {
  function two() {
    const a = prompt('Угадай число от 1 до 100');
    if (a == null) {
      alert('Игра окончена');
    } else if (isNumber(a) !== true) {
      alert('Введи число!');
      two();
    } else if (a == x) {
      alert('Поздравляю, Вы угадали!!!');
    } else if (a < x) {
      alert('Загаданное число больше');
      two();
    } else if (a > x) {
      alert('Загаданное число меньше');
      two();
    }
  }
  two();
}

one(10);
