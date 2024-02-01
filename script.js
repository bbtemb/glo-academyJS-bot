'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && !/\s/.test(num);
};

function one(x) {
  let count = 10;
  function two() {
    const a = prompt('Угадай число от 1 до 100');
    if (a == null) {
      alert('Игра окончена');
    } else if (isNumber(a) !== true) {
      alert('Введи число!');
      two();
    } else if (a == x) {
      alert('Поздравляю, Вы угадали!!!');
    } else if (count == 1) {
      if (confirm('Попытки закончились, хотите сыграть еще?') == true) {
        count = 10;
        two();
      } else alert('Спасибо за игру!');
    } else if (a < x) {
      count--;
      console.log('count: ', count);
      alert('Загаданное число больше, осталось попыток ' + count);
      two();
    } else if (a > x) {
      count--;
      console.log('count: ', count);
      alert('Загаданное число меньше, осталось попыток ' + count);
      two();
    }
  }
  two();
}

one(10);
