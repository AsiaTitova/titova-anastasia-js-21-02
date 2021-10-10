'use strict'

// 1. На вход поступает массив, вывести массив, удалив неуникальные значения.

const firstTask = (array) => {
  let result = array.filter((item, index) => array.indexOf(item) === index)
  console.log(result)
}

// firstTask([1,2,2,2,3,4,5,6,7,7,8,5,3,6,8,9])




// 2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.

const secondTask = (array) => {
  let result = [];
  for (let i = array.length - 1; i > -1; i--) {
    result.push(array[i]);
  }
  console.log(result)
}

// secondTask([1, 2, 3, 4, 5])




// 3. На вход поступает массив, содержащий массивы, в которых хранится два элемента.
// Преобразовать массив в объект, где ключами являются нулевой индекс вложенныхых массивов,
// а значениями являются элементы с индексом один.

const thirdTask = (array) => {
  let result = {};
  array.forEach(item => {
    result[item[0]] = item[1];
  })
  console.log(result)
}

// thirdTask([["name", "Оля"], ["email", "any@mail.ru"], ["phone", "8 (999) 999 99 99"]])





// 4. На вход поступает объект, вывести сумму числовых свойств объекта.

const fourTask = (object) => {
  let result = 0;
  for (let item of Object.values(object)) {
    result += item;
  }
  console.log(result)
}

// const objectNumbers = {
//   one: 10,
//   two: 20,
//   three: 30
// }
// fourTask(objectNumbers)





// 5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.

const fiveTask = (array) => {
  let result = array.reduce((a, b) => (a + b)) / array.length;
  console.log(result)
}

// fiveTask([1, 2, 3, 4, 5])




// 6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее значение и методы сложения,
// вычитания, умножения и деления, принимающие число и манипулирующий свойством значения в соответствии с назначением метода,
// а так же функцию, сбрасывающую значение в ноль.

function Calculator(num) {
  this.default = 20;
  this.num = num;

  this.addition = () => {
    return this.default + this.num;
  };

  this.subtraction = () => {
    return this.default - this.num;
  }

  this.multiplication = () => {
    return this.default * this.num;
  };

  this.division = () => {
    return this.default / this.num;
  };

  this.reset  = () => {
    return this.default = 0;
  };
}

// let calc = new Calculator(5);
// console.log(calc, calc.addition(), calc.subtraction(), calc.multiplication(), calc.division(), calc.reset())



// 7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers, strings и objects,
// содержащими массив со значениями, соответствующими названию поля.

const sevenTask = (array) => {
  let object = {
    numbers: [],
    strings: [],
    objects: []
  };

  array.forEach(item => {
    if (typeof item === 'number') {
      object.numbers.push(item)
    }
    if (typeof item === 'string') {
      object.strings.push(item)
    }
    if (typeof item === 'object') {
      object.objects.push(item)
    }
  })

  console.log(object)
  return object;
}


// sevenTask([1, 'строка 1', {key: 'value'}, 2, 'строка 2', {key: 'value'}])


// 8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива,
// значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)

const eightTask = (array, num1, num2) => {
  let newArr = [];
  array.forEach(item => {
    // я не включила переданные числа в диапазон числен нового массива, так как не указано в задании - включать их
    if(num1 <= num2) {
      if (item > num1 && item < num2) {
        newArr.push(item)
      }
    } else {
      if (item > num2 && item < num1) {
        newArr.push(item)
      }
    }
  })
  console.log(newArr)

}
// Если 1 число меньше 2
// eightTask([1,2,3,4,5,6,7,8,9], 3, 7)
//Если 1 число больше второго - нужно ли учитывать этот вариант? И какой тогда получается диапазон? не совсем поняла этот момент задания
// eightTask([1,2,3,4,5,6,7,8,9], 8, 2)


// 9. Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false

const nineTask = (string1, string2) => {
  let arrString = [];
  arrString.push(string1);
  arrString.push(string2);

  // Метод localeCompare() возвращает число, указывающее, должна ли данная строка находиться до, после или в том же самом месте, что и строка, переданная через параметр, при сортировке этих строк.
  let result = arrString.filter(obj => obj.split('').sort().join('').localeCompare(arrString[0].split('').sort().join('')) === 0).length === arrString.length;

  console.log(result)
}

// nineTask('антиквар', 'травинка');
// nineTask('лекарство', 'стекловар');
// nineTask('лекарство', 'травинка');





// 10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую
// (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты) сама функция в консоль выводиться не должна.

const tenTask = (object) => {
  let newArr = [];
  Object.keys(object).forEach(key => newArr.push(`${key}: ${object[key]}`))
  let result = "".concat(newArr, " ")
  console.log(result)
}

// const object = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3'
// }
// tenTask(object)



// 11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства), метод принимает ключь (строка),
// значение (произвольное) и объект со свойствами writable, configurable, enumerable (разрешение перезаписи свойства,
// разрешение перечисления свойства и разрешение удаления свойства). Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено

function elevenTask(string, value, attr) {
  this.string = this.value

  this.setProp = () => {
    return Object.defineProperty(this, string, attr)
  }

  Object.defineProperties(this, {
    string: {
      value: value,
      writable: true,
      configurable: true,
      enumerable: true
    }
  })
}

const firstObj = new elevenTask('name', 'Oleg', {
  writable: true,
  configurable: true,
  enumerable: true
})

console.log( Object.defineProperty(firstObj, 'address', {
  value: 'Moscow',
  writable: true,
  configurable: true,
  enumerable: true
}))


