// 1. Написать скрипт, предлогающий пользователю ввести две строки через запятую.
// Вывести сообщение true, если вторая строка содержится в первый, в противном случае false, регистр при проверке не учитывать.

const firstTask = (string) => {
  if (!string || typeof string !== "string") {
    return false;
  }
  const stringArr = string.toLowerCase().split(",");
  if (stringArr.length === 2) {
    return stringArr[0].includes(stringArr[1].trim());
  }
  return false;
}


// 2. Пользователь вводит строку, затем число (кол-во символов). Функция усекает строку до кол-ва символов и добавляет многоточие.

const secondTask = (string, stringLength) => {
  if ((!string || typeof string !== "string") && (!stringLength || typeof stringLength !== "string" || true)) {
    return false;
  }
  return string.slice(0, Number(stringLength)) + '...';
}


// 3. Написать функцию, преобразующее строку с датой и временем формата '12/02/2021 12-00' в строку формата 12.02.2021 12:00, используя регулярные выражения

const thirdTask = (date) => {
  if (date === undefined || typeof date !== "string") {
    return false;
  }
  // Регулярное выражение на правильность введеной даты
  let regexp = new RegExp(/^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]\d{4} (2[0-3]|[01][0-9])[\-][0-5][0-9]$/);

  if (regexp.test(date)) {
    return date.replace(
      /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2})-(\d{2})$/,
      "$1.$2.$3 $4:$5"
    );
  } else {
    return false;
  }
}

// 4. Написать функцию, валидирующую ФИО из кирилличиских символов (считать, что отчество может оканчиваться только на "вна" или "вич" или может отсутствовать)

const fourTask = (name) => {
  if (name === undefined || typeof name !== "string") {
    return false;
  }
  // Регулярное выражение на правильность введеного ФИО
  let regexp = new RegExp(/^[А-Яа-яёЁ]+[-' ][а-яёА-ЯЁ]+([-' ][а-яёА-ЯЁ]+(вич|вна))?$/);

  // Проверка на правильный формат ФИО
  return (regexp.test(name));
}

// 5. На вход дана строка в PamalCase, преобразовать строку в snake_case

const fiveTask = (string) => {
  if (string === undefined || typeof string !== "string") {
    return false;
  }

  let result = string
    .replace(/(?<=[\da-zа-я])([A-ZА-Я])+(?=[a-zа-я\d]+)/g, "_$1")
    .replace(/([A-zА-я\d]+[_]?)([A-ZА-Я\d])/g, (match) => match.toLowerCase());

  // Вывод результата в snake_case
  return result === string ? false : result;
}

// 6. На вход даётся многострочная строка, найти и вернуть через alert все html комментарии

const sixTask = (string) => {
  if (string === undefined || typeof string !== "string") {
    return false;
  }
  // Регулярное выражение на поиск закомментированных участков
  let regexp = new RegExp(/<!--.+?-->/, 'gm');

  // Вывод всех комментариев в виде перечисления в массиве
  let stringArr = string.match(regexp);
  if (stringArr === null) {
    return false
  }
  let newArr = stringArr.map(item => item);
  let elements = newArr.map( item => String(item).slice(4, item.length - 3))
  if (elements) {
    return(elements.map((value) => value.trim()).join("\n"));
  } else {
    return false
  }
}

// 7. На вход дана строка, вернуть через alert все числа (десятичные разделяются сиволом ".")
const sevenTask = (string) => {
  if (string === undefined || (typeof string !== "string" && typeof string !== "number")) {
    return false;
  }
   // Регулярное выражение на поиск чисел
  let regexp = new RegExp(/\d+(\.\d+)?/, 'g');

  // Вывод всех чисел в виде перечисления в массиве
  if (string.match(regexp)) {
    return(string.match(regexp).join(` `));
  } else {
    return false
  }
}

// 8. Валидация введённого значения. Вводится идентификатор документа. Идентификатор должен состоять из четырёх частей по четыре символа,
// разделённых или не разделённых знаком "-". Допускаются только символы латинского алфавита и числа. Вывести через alert "ведётся поиск",
// при соответствии введённого значения, или "неверный илентификатор", при несоответствии. При несоответствии снова вывести форму для ввода строки.

const eightTask = (string) => {
  if (string === undefined || typeof string !== "string") {
    return false;
  }
  // Регулярное выражение на проверку идентификатора документа
  const regexp =
    /(\b|^)[A-z0-9]{4}(-)?[A-z0-9]{4}(-)?[A-z0-9]{4}(-)?[A-z0-9]{4}($|\b)/;
  return regexp.test(string);
}

module.exports = {
  firstTask,
  secondTask,
  thirdTask,
  fourTask,
  fiveTask,
  sixTask,
  sevenTask,
  eightTask,
};
