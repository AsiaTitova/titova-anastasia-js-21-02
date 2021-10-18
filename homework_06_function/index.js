
const buttonStartOne = document.querySelector(".button-start_one");
const buttonStartTwo = document.querySelector(".button-start_two");
const taskAreaOne = document.querySelector(".task-one");
const taskAreaTwo = document.querySelector(".task-two");
const inputNumberOne = document.querySelector(".input-one");
const inputNumberTwo = document.querySelector(".input-two");
const submitButtonOne = document.querySelector(".submit-one");
const submitButtonTwo = document.querySelector(".submit-two");
const resetButtonOne = document.querySelector(".reset-one");
const resetButtonTwo = document.querySelector(".reset-two");
const resultOne =  document.querySelector(".result-one");
const resultTwo =  document.querySelector(".result-two");
const resultValueOne = document.querySelector(".result-value-one");
const resultValueTwo = document.querySelector(".result-value-two");

  // Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи),
  // функция должна вернуть значение числа. Использовать рекурсию.

  buttonStartOne.addEventListener("click", function() {
    taskAreaOne.classList.add('open');
  })

  const getFibonacciNumbers = (num) => {
    return num <= 1 ? num : getFibonacciNumbers(num - 1) + getFibonacciNumbers(num - 2);
  }

  submitButtonOne.addEventListener("click", function() {
    let index = inputNumberOne.value;
    resultOne.classList.add('open');
    resultValueOne.innerHTML = getFibonacciNumbers(index)
  })


  resetButtonOne.addEventListener("click", function() {
    inputNumberOne.value = 0;
    resultOne.classList.remove('open');
    resultValueOne.innerHTML = '';
  })


  // Модернизировать написанную функцию, добавив кэширование (функция ""запоминает"" входной параметр
  // и вычесленное значение, при следующем вызыве с этим же параметром, функция не вычисляет значение,
  // а возвращает из памяти)

  buttonStartTwo.addEventListener("click", function() {
    taskAreaTwo.classList.add('open');
  })

  const getFibonacciNumbersWithСashing = ((num) => {
    const cash = {};
    return (num) => {
      if (cash[num]) {
        console.log('Возращаю значение из кэша');
        return cash[num]
      } else {
        console.log('Расчитываю новые значения');
        let result = ''
        if (num <= 1) {
          result = num
        } else {
          result = getFibonacciNumbersWithСashing(num - 1) + getFibonacciNumbersWithСashing(num - 2);
        }
        console.log('Записываю новые значения в кэш');
        cash[num] = result;
        return result
      }
    }
  })();


  submitButtonTwo.addEventListener("click", function() {
    let index = inputNumberTwo.value;
    resultTwo.classList.add('open');
    resultValueTwo.innerHTML = getFibonacciNumbersWithСashing(index)
  })

  resetButtonTwo.addEventListener("click", function() {
    inputNumberTwo.value = 0;
    resultTwo.classList.remove('open');
    resultValueTwo.innerHTML = '';
  })

  // Разработать рекурсивную функцию, принимающую массив, содержащий массивы из двух элементов,
  // в каждом из которых первый элемент является строкой, а второй строкой, числом, логическим значением,
  // объектом, или таким же массивом. Функция должна преобразовать массив в объект

  const testArray = [
    ['name', 'Anna'],
    ['age', 27],
    ['pets', [
      ['dog', 'Faust'],
      ['cats', {
        oneCat: 'Baltazar',
        twoCat: 'Hippo'
      }],
      ['hamsters', [
        ['oneHamster', 'Richy'],
        ['twoHamster', 'Jack']
      ]]
    ]],
    ['children', true],
    ['address', {
      city: 'Moscow',
      street: 'Pioneers'
    }]
  ]

const creatingObjectBasedDataArray = (array) => {
    let result = {}
    if (Array.isArray(array)) {
        array.forEach(item => {
          if (Array.isArray(item[1])) {
            result[item[0]] = creatingObjectBasedDataArray(item[1])
          } else {
            result[item[0]] = item[1];
          }
        })
    }
  return result
}


console.log(creatingObjectBasedDataArray(testArray))
