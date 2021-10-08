const firstTaskButton = document.querySelector(".button_first-task");
const secondTaskButton = document.querySelector(".button_second-task");
const thirdTaskButton = document.querySelector(".button_third-task");
const fourTaskButton = document.querySelector(".button_four-task");
const fiveTaskButton = document.querySelector(".button_five-task");
const fiveTaskPromptButton = document.querySelector(".button_five-task-prompt");
const sixTaskButton = document.querySelector(".button_six-task");
const sixTaskPromptButton = document.querySelector(".button_six-task-prompt");
const sevenTaskButton = document.querySelector(".button_seven-task");
const eightTaskButton = document.querySelector(".button_eight-task");

// 1. Написать скрипт, предлогающий пользователю ввести две строки через запятую.
// Вывести сообщение true, если вторая строка содержится в первый, в противном случае false, регистр при проверке не учитывать.

const firstTask = () => {
  //Вызов модального окна с предложением ввести 2 строки
  let string = prompt('Введите 2 сторки, через запятую. Если вторая строка содержится в первой, вернется true, иначе false');

  // Вынесение первой строки в переменную
  let firstString = string.split(',')[0];

  // Создание из второй строки регулярного выражения, добавление игнорирования регистра
  let secondString = new RegExp(string.split(',')[1], "i");

  // Вывод результат проверки наличия второй строки внутри первой
  alert(secondString.test(firstString));
}


// 2. Пользователь вводит строку, затем число (кол-во символов). Функция усекает строку до кол-ва символов и добавляет многоточие.

const secondTask = () => {
  //Вызов модального окна с предложением ввести строку
  let string = prompt('Введите строку');

  //Вызов модального окна с предложением ввести колличество символов
  let stringLength = prompt('Введите колличество символов');

  // Обрезка строки + добавление ...
  let result = string.slice(0, Number(stringLength)) + '...';

  // Вывод результата
  alert(result);
}


// 3. Написать функцию, преобразующее строку с датой и временем формата '12/02/2021 12-00' в строку формата 12.02.2021 12:00, используя регулярные выражения

const thirdTask = () => {
  //Вызов модального окна с предложением ввести дату
  let date = prompt('Введите дату в формате "12/02/2021 12-00"');

  // Регулярное выражение на правильность введеной даты
  let regexp = new RegExp(/^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]\d{4} (2[0-3]|[01][0-9])[\-][0-5][0-9]$/);

  // Форматирование даты
  let arrDateTime = date.split(' ');
  let result = arrDateTime[0].split('/').join('.') + ' ' + arrDateTime[1].split('-').join(':')


  // Проверка на правильный формат даты
  if (regexp.test(date)) {
    alert(result);
  } else {
    alert('Введен не верный формат даты!');
  }
}

// 4. Написать функцию, валидирующую ФИО из кирилличиских символов (считать, что отчество может оканчиваться только на "вна" или "вич" или может отсутствовать)

const fourTask = () => {
  //Вызов модального окна с предложением ввести ФИО
  let name = prompt('Введите ФИО кирилицей');

  // Регулярное выражение на правильность введеного ФИО
  let regexp = new RegExp(/^[А-Яа-яёЁ]+[-' ][а-яёА-ЯЁ]+([-' ][а-яёА-ЯЁ]+(вич|вна))?$/);

  // Проверка на правильный формат ФИО
  if (alert(regexp.test(name))) {
    alert('ФИО введено верно!')
  } else {
    alert('ФИО введено не верно!')
  }
}

// 5. На вход дана строка в PamalCase, преобразовать строку в snake_case

const fiveTask = (string) => {
  // Регулярное выражение на правильность введеной строки
  let regexp = new RegExp(/^PamalCase$/);

  // Проверка на правильность введеной строки
  if (regexp.test(string)) {
    alert(string.replace('Pamal', 'snake_').toLowerCase());
  } else {
    let result = prompt('Строка введена не верно! Введите строку - PamalCase')
    fiveTask(result)
  }
}

const fiveTaskPrompt = () => {
  let string = prompt('Введите строку');
  fiveTask(string);
}

// 6. На вход даётся многострочная строка, найти и вернуть через alert все html комментарии

const sixTask = (string) => {
  // Регулярное выражение на поиск закомментированных участков
  let regexp = new RegExp(/<!--.+?-->/, 'gm');

  // Вывод всех комментариев в виде перечисления в массиве
  let stringArr = string.match(regexp);
  if (stringArr) {
    alert(stringArr);
  } else {
    alert('Комментариев нет!')
  }
}

const sixTaskPrompt = () => {
  let string = prompt('Введите строку');
  sixTask(string);
}

// 7. На вход дана строка, вернуть через alert все числа (десятичные разделяются сиволом ".")

const sevenTask = () => {
  //Вызов модального окна с предложением ввести строку
  let string = prompt('Введите строку');

  // Регулярное выражение на поиск чисел
  let regexp = new RegExp(/\d+(\.\d+)?/, 'g');

  // Вывод всех чисел в виде перечисления в массиве
  if (string.match(regexp)) {
    alert(string.match(regexp));
  } else {
    alert('чисел нет!')
  }
}

// 8. Валидация введённого значения. Вводится идентификатор документа. Идентификатор должен состоять из четырёх частей по четыре символа,
// разделённых или не разделённых знаком "-". Допускаются только символы латинского алфавита и числа. Вывести через alert "ведётся поиск",
// при соответствии введённого значения, или "неверный илентификатор", при несоответствии. При несоответствии снова вывести форму для ввода строки.

const eightTask = () => {
  //Вызов модального окна с предложением ввести строку
  let string = prompt('Введите идентификатор документа. Идентификатор должен состоять из четырёх частей по четыре символа, разделённых или не разделённых знаком "-". Допускаются только символы латинского алфавита и числа.');

  // Регулярное выражение на проверку идентификатора документа
  let regexp = new RegExp(/^([a-zA-Z0-9]{4}[\-]?){3}[a-zA-Z0-9]{4}$/, 'g');

  // Вывод всех чисел в виде перечисления в массиве
  if (string.match(regexp)) {
    alert("Ведётся поиск...");
  } else {
    alert('Неверный илентификатор!');
    eightTask();
  }
}


firstTaskButton.addEventListener("click", firstTask);
secondTaskButton.addEventListener("click", secondTask);
thirdTaskButton.addEventListener("click", thirdTask);
fourTaskButton.addEventListener("click", fourTask);

fiveTaskButton.addEventListener("click", function() {
  fiveTask('PamalCase')
});
fiveTaskPromptButton.addEventListener("click", fiveTaskPrompt);

sixTaskButton.addEventListener("click", function() {
  const div = `<div><p>Строка 1</p><!--<p>Закомментированный Шаблон текста</p>--><p>Строка 2</p><!--<p>Закомментированный Шаблон текста</p>--></div>`
  sixTask(div)
});
sixTaskPromptButton.addEventListener("click", sixTaskPrompt);

sevenTaskButton.addEventListener("click", sevenTask);
eightTaskButton.addEventListener("click", eightTask);
