'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && !/\s/.test(num);
};

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = max + 1;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

function one(botNumber) {
  let count = 10;
  function two() {
    const userNumber = prompt('Угадай число от 1 до 100');
    if (userNumber == null) {
      alert('Игра окончена');
    } else if (isNumber(userNumber) !== true) {
      alert('Введи число!');
      two();
    } else if (userNumber == botNumber) {
      alert('Поздравляю, Вы угадали!!!');
    } else if (count == 1) {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        one(getRandomInt(1, 100));
      } else alert('Спасибо за игру!');
    } else if (userNumber < botNumber) {
      count--;
      console.log('count: ', count);
      alert('Загаданное число больше, осталось попыток ' + count);
      two();
    } else if (userNumber > botNumber) {
      count--;
      console.log('count: ', count);
      alert('Загаданное число меньше, осталось попыток ' + count);
      two();
    }
  }
  two();
}

one(getRandomInt(1, 100));
