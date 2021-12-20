'use strict'

// Реализовать объект animal, с полем клички, методом eat, выводящим сообщение "/*кличка*/ ест" и методом say, выводящим фразу, "неизвестное животное молчит",

const Animal = {
  name: 'Andreas',

  eat() {
    console.log(`${this.name} ест`);
  },

  say() {
    console.log(`Неизвестное животное молчит`);
  }
}

// Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи.
// Методы должны быть неперечисляемыми.

Object.defineProperties(Animal, {
  'name': {
    configurable: false,
    writable: false,
    enumerable: true
  },
  'say': {
    configurable: false,
    writable: false,
    enumerable: false
  },
  'eat': {
    configurable: false,
    writable: false,
    enumerable: false
  }
});

// console.log(Object.keys(Animal))
// console.log(Object.getOwnPropertyDescriptors(Animal))

// путём прототипного наследования создать объекты кота, собаки и попугая.

const Cat = {
  __proto__: Animal,
  name: 'Китти',
  type: 'Кошка',

  // Для кота добавить новый метод hunt, выводящий сообщение "/*кличка*/ охотится".
  hunt() {
    console.log(`${this.name} охотится`)
  },

  //Переопределить в них метод say, в зависимости от типа животного.
  say() {
    console.log(`${this.type} мяукает`);
  }
}

Object.defineProperties(Cat, {
  'name': {
    configurable: false,
    writable: false,
    enumerable: true
  },
  'type': {
    configurable: false,
    writable: false,
    enumerable: true
  },
  'say': {
    configurable: false,
    writable: false,
    enumerable: false
  },
  'hunt': {
    configurable: false,
    writable: false,
    enumerable: false
  },
  '__proto__': {
    configurable: false,
    writable: false,
    enumerable: false
  }
});

console.log(Object.keys(Cat))
console.log(Object.getOwnPropertyDescriptors(Cat))

const Dog = {
  __proto__: Animal,
  name: 'Бобик',
  type: 'Собака',
  say() {
    console.log(`${this.type} лает`);
  }
}

Object.defineProperties(Dog, {
  'name': {
    configurable: false,
    writable: false,
    enumerable: true
  },
  'type': {
    configurable: false,
    writable: false,
    enumerable: true
  },
  'say': {
    configurable: false,
    writable: false,
    enumerable: false
  },
  '__proto__': {
    configurable: false,
    writable: false,
    enumerable: false
  }
});


const Parrot = {
  __proto__: Animal,
  name: 'Кеша',
  type: 'Попугай',
  say() {
    console.log(`${this.type} говорит`);
  }
}

Object.defineProperties(Parrot, {
  'name': {
    configurable: false,
    writable: false,
    enumerable: true
  },
  'type': {
    configurable: false,
    writable: false,
    enumerable: true
  },
  'say': {
    configurable: false,
    writable: false,
    enumerable: false
  },
  '__proto__': {
    configurable: false,
    writable: false,
    enumerable: false
  }
});


// Разработать метод rename, для смены клички животного. Новая кличка должна содержать только кирилические символы, пробелы или символ "-".

const rename = (object, name) => {
  const regexp = new RegExp(/^[А-Яа-яёЁ -]+$/);
  if (regexp.test(name)) {
    object.name = name;
    console.log(`Мне поменяли имя на ${name}`)
  } else {
    console.log('Кличка должна содержать только кирилические символы, пробелы или символ "-"')
  }
}

// Cat.eat();
// Cat.say();
// Cat.hunt();
// Dog.eat();
// Dog.say();
// Parrot.eat();
// Parrot.say();
//
// rename(Cat, 'Алиса');
// rename(Cat, 'Alise');
// Cat.eat();
