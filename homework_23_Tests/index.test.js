const {
  firstTask,
  secondTask,
  thirdTask,
  fourTask,
  fiveTask,
  sixTask,
  sevenTask,
  eightTask,
} = require("./index");

//Тест первой функции
describe("1. Написать скрипт, предлогающий пользователю ввести две строки через запятую. Вывести сообщение true, если вторая строка содержится в первый, в противном случае false, регистр при проверке не учитывать.", () => {
  test("Function, should return false", () => {
    expect(firstTask("Доброе утро, Хоршего вечера")).toBeFalsy();
    expect(firstTask(undefined)).toBeFalsy();
    expect(firstTask(59864)).toBeFalsy();
    expect(firstTask("Ура ура ура")).toBeFalsy();
  });

  test("Function, should return true", () => {
    expect(firstTask("Мороз и солнце день чудествный, Мороз и солнце")).toBeTruthy();
  });
});

//Тест второй функции
describe("2. Пользователь вводит строку, затем число (кол-во символов). Функция усекает строку до кол-ва символов и добавляет многоточие.", () => {
  test("Function, should return string", () => {
    expect(secondTask("Hello world!", 5)).toBe("Hello...");
    expect(secondTask("Hello world!", 3)).toBe("Hel...");
  });

  test("Function, should return false", () => {
    expect(secondTask("")).toBeFalsy();
    expect(secondTask(59864)).toBeFalsy();
    expect(secondTask(undefined, 10)).toBeFalsy();
  });
});

//Тест третьей функции
describe("3. Написать функцию, преобразующее строку с датой и временем формата '12/02/2021 12-00' в строку формата 12.02.2021 12:00, используя регулярные выражения", () => {
  test("Function, should return date or false", () => {
    expect(thirdTask("23/12/2021 12-00")).toBe("23.12.2021 12:00");
    expect(thirdTask("23/12/2021")).toBeFalsy();
    expect(thirdTask(undefined)).toBeFalsy();
    expect(thirdTask(123569874)).toBeFalsy();
  });
});

//Тест четвертой функции
describe('4. Написать функцию, валидирующую ФИО из кирилличиских символов (считать, что отчество может оканчиваться только на "вна" или "вич" или может отсутствовать)', () => {
  test("Function, should return true", () => {
    expect(fourTask("Титова Анастасия Геннадьевна")).toBeTruthy();
    expect(fourTask("Титов Павел Андреевич")).toBeTruthy();
    expect(fourTask("Наумов Николай")).toBeTruthy();
  });
  test("Function, should return false", () => {
    expect(fourTask("Titova Anastasia")).toBeFalsy();
    expect(fourTask("")).toBeFalsy();
    expect(fourTask(undefined)).toBeFalsy();
    expect(fourTask(1235668)).toBeFalsy();
    expect(fourTask({ name: "Титова Анастасия Геннадьевна" })).toBeFalsy();
  });
});

//Тест пятой функции
describe("5. На вход дана строка в PamalCase, преобразовать строку в snake_case", () => {
  //PamalCase DimerGmarVic3245 Dmitrii Gmar Variable1 Var1Item2
  test("Function, should return snake_case", () => {
    expect(fiveTask("PamalCase")).toBe("pamal_case");
    expect(fiveTask("SuperMario")).toBe("super_mario");
    expect(fiveTask("СуперСэт")).toBe("супер_сэт");
    expect(fiveTask("Test1Test2")).toBe("test1_test2");
  });

  test("Function, should return false", () => {
    expect(fiveTask(-1)).toBeFalsy();
    expect(fiveTask(undefined)).toBeFalsy();
    expect(fiveTask({ name: "Super Mario" })).toBeFalsy();
    expect(fiveTask("Pamal Case")).toBeFalsy();
  });
});

//Тест шестой функции
describe("6. На вход даётся многострочная строка, найти и вернуть через alert все html комментарии", () => {
  test("Function, should return comment", () => {
    expect(
      sixTask(
        "234 234<!-- Комментарий 1 -->\r 4 32 \n 234<!-- Комментарий 2 --> 234324"
      )
    ).toBe("Комментарий 1\nКомментарий 2");
  });

  test("Function task 6, should return false", () => {
    expect(sixTask(-1)).toBeFalsy();
    expect(sixTask(undefined)).toBeFalsy();
    expect(sixTask({ name: "Super Mario" })).toBeFalsy();
    expect(sixTask("Pamal Case")).toBeFalsy();
  });
});


//Тест седьмой функции
describe('7. На вход дана строка, вернуть через alert все числа (десятичные разделяются сиволом ".")', () => {
  test("Function, should return number", () => {
    expect(sevenTask("Тест 123")).toBe("123");
    expect(sevenTask("Тест 123 еще одно число \n 456.32")).toBe(
      "123 456.32"
    );
    expect(
      sevenTask(
        "Тест 123 еще одно число \n 456.32 а это не должно попасть в строку разделившись после второй запятой 123.245.92"
      )
    ).toBe("123 456.32 123.245 92");
  });

  test("Function, should return false", () => {
    expect(sevenTask(undefined)).toBeFalsy();
    expect(sevenTask("Строка без чисел")).toBeFalsy();
    expect(sevenTask({ name: "Super Mario" })).toBeFalsy();
  });
});

//Тест Восьмой функции
describe('8. Валидация введённого значения. Вводится идентификатор документа. Идентификатор должен состоять из четырёх частей по четыре символа,разделённых или не разделённых знаком "-". Допускаются только символы латинского алфавита и числа. Вывести через alert "ведётся поиск", при соответствии введённого значения, или "неверный илентификатор", при несоответствии. При несоответствии снова вывести форму для ввода строки.', () => {
  test("Function, should return true", () => {
    expect(eightTask("C4E5-D498-4F2B-5853-9632")).toBeTruthy();
  });

  test("Function, should return false", () => {
    expect(eightTask(undefined)).toBeFalsy();
    expect(eightTask("T2EC-DG2U-1342")).toBeFalsy();
    expect(eightTask("T2EC-D778-4F1B-ЯЯЯЯ-1342")).toBeFalsy();
    expect(eightTask("Строка без идентификатора")).toBeFalsy();
  });
});
