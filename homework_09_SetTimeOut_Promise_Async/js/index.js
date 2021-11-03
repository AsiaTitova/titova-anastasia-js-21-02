'use strict';

// Разработать скрипт. Пользователь вводит два числа (i, j), каждую секунду выводить число от i до j.
const buttonStartSetTimeoutOneTask = document.querySelector('.task-one__button_set-timeout');
const buttonStartSetIntervalOneTask = document.querySelector('.task-one__button_set-interval');
const firstNumberOneTask = document.getElementById('one');
const secondNumberOneTask = document.getElementById('two');
const resultValueOneTask = document.querySelector('.task-one__content')
const errorFirstNumberOneTask = document.querySelector('.task-one__error_one')
const errorSecondNumberOneTask = document.querySelector('.task-one__error_two')

buttonStartSetTimeoutOneTask.addEventListener('click', timerIntervalCounterSetTimeout);
buttonStartSetIntervalOneTask.addEventListener('click', timerIntervalCounterSetInterval);


//реализвать через setTimeout
function timerIntervalCounterSetTimeout() {
  let firstNumber = firstNumberOneTask.value;
  let secondNumber = secondNumberOneTask.value;
  checkValidationOneTask(firstNumber, secondNumber);
  setTimeout(timer, 1000, firstNumber, secondNumber);
}

function timer(firstNumber, secondNumber) {
  resultValueOneTask.innerHTML = firstNumber;
  firstNumber++;
  if (firstNumber <= secondNumber) {
    setTimeout(timer, 1000,  firstNumber, secondNumber)
  } else {
    clearTimeout(timer);
  }
}


//реализвать через setInterval
function timerIntervalCounterSetInterval() {
  let firstNumber = firstNumberOneTask.value;
  let secondNumber = secondNumberOneTask.value;
  checkValidationOneTask(firstNumber, secondNumber);
  interval(firstNumber, secondNumber);

}

function interval(firstNumber, secondNumber) {
  let number = firstNumber;
  let timerId = setInterval(function() {
    resultValueOneTask.innerHTML = number;
    number++;
    if (number > secondNumber) {
      clearInterval(timerId);
    }
  }, 1000);
}




function checkValidationOneTask (firstNumber, secondNumber) {
  let reqExp = new RegExp("^\d+$");
  if (!firstNumber) {
    errorFirstNumberOneTask.innerHTML = 'Введите первое число';
    addClassElement(errorFirstNumberOneTask, 'task-one__error_show');
    return false
  } else if (!secondNumber) {
    errorSecondNumberOneTask.innerHTML = 'Введите второе число';
    addClassElement(errorSecondNumberOneTask, 'task-one__error_show');
    return false
  } else if (reqExp.test(firstNumber)) {
    errorFirstNumberOneTask.innerHTML = 'Введите целое число';
    addClassElement(errorFirstNumberOneTask, 'task-one__error_show');
    return false
  } else if (reqExp.test(secondNumber)) {
    errorSecondNumberOneTask.innerHTML = 'Введите целое число';
    addClassElement(errorSecondNumberOneTask, 'task-one__error_show');
    return false
  } else if (firstNumber > secondNumber) {
    errorFirstNumberOneTask.innerHTML = 'Первое число должно быть меньше второго';
    addClassElement(errorFirstNumberOneTask, 'task-one__error_show');
    return false
  } else {
    errorFirstNumberOneTask.innerHTML = '';
    errorSecondNumberOneTask.innerHTML = '';
    removeClassElement(errorFirstNumberOneTask, 'task-one__error_show');
    removeClassElement(errorSecondNumberOneTask, 'task-one__error_show');
  }
}


// вспомогательные функции //

function addClassElement(element, className) {
  element.classList.add(className);
}

function removeClassElement(element, className) {
  element.classList.remove(className);
}

