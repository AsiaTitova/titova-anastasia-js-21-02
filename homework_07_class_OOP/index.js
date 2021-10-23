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

// Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи.
// Методы должны быть неперечисляемыми.

Object.defineProperty(Cat, "__proto__", {
  configurable: false,
  writable: false,
  enumerable: false
})


const Dog = {
  __proto__: Animal,
  name: 'Бобик',
  type: 'Собака',
  say() {
    console.log(`${this.type} лает`);
  }
}

Object.defineProperty(Dog, "__proto__", {
  configurable: false,
  writable: false,
  enumerable: false
})

const Parrot = {
  __proto__: Animal,
  name: 'Кеша',
  type: 'Попугай',
  say() {
    console.log(`${this.type} говорит`);
  }
}

Object.defineProperty(Parrot, "__proto__", {
  configurable: false,
  writable: false,
  enumerable: false
})


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


//Выполнить то же самое использую функции конструкторы.

function AnimalFunc(name) {
  this.name = name;

  this.eat = function() {
    console.log(`${this.name} ест`);
  };

  this.say = function() {
    console.log(`Неизвестное животное молчит`);
  }
}

function CatFunc(name, type) {
  AnimalFunc.call(this, name);
  this.name = name;
  this.type = type;

  this.hunt = function() {
    console.log(`${this.name} охотится`)
  }

  let parentSay = this.say;
  this.say = function() {
    if (this.type) {
      console.log(`${this.type} мяукает`);
    } else {
      parentSay();
    }
  }
}


function DogFunc(name, type) {
  AnimalFunc.call(this, name);
  this.name = name;
  this.type = type;

  let parentSay = this.say;
  this.say = function() {
    if (this.type) {
      console.log(`${this.type} лает`);
    } else {
      parentSay();
    }
  }

}

function ParrotFunc(name, type) {
  AnimalFunc.call(this, name);
  this.name = name;
  this.type = type;

  let parentSay = this.say;
  this.say = function() {
    if (this.type) {
      console.log(`${this.type} говорит`);
    } else {
      parentSay();
    }
  }
}

const ANIMAL_FUNC = new AnimalFunc('Andreas');
const CAT_FUNC = new CatFunc('Китти', 'Кошка');
const DOG_FUNC = new DogFunc('Бобик', 'Собака');
const PARROT_FUNC = new ParrotFunc('Кеша', 'Попугай');

// ANIMAL_FUNC.eat();
// ANIMAL_FUNC.say();
// CAT_FUNC.eat();
// CAT_FUNC.say();
// CAT_FUNC.hunt();
// DOG_FUNC.eat();
// DOG_FUNC.say();
// PARROT_FUNC.eat();
// PARROT_FUNC.say();

// Выполнить то же самое, используя классы

class AnimalClass {
  constructor(name) {
    this._name = name;
  }

  eat() {
    console.log(`${this._name} ест`);
  }

  say = function() {
    console.log(`Неизвестное животное молчит`);
  }

  set name(name) {
    this._name = name;
    console.log(`Мне поменяли имя на ${name}`)
  }
}

class CatClass extends AnimalClass {
  constructor(name, type) {
    super(name);
    this.name = name;
    this.type = type;
  }

  hunt() {
    console.log(`${this.name} охотится`)
  }

  say = function() {
    console.log(`${this.type} мяукает`);
  }
}

class DogClass extends AnimalClass {
  constructor(name, type) {
    super(name);
    this.name = name;
    this.type = type;
  }

  say = function() {
    console.log(`${this.type} мяукает`);
  }
}

class ParrotClass extends AnimalClass  {
  constructor(name, type) {
    super(name);
    this.name = name;
    this.type = type;
  }

  say = function() {
    console.log(`${this.type} говорит`);
  }
}


const ANIMAL_CLASS = new AnimalClass('Andreas');
const CAT_CLASS = new CatClass('Китти', 'Кошка');
const DOG_CLASS = new DogClass('Бобик', 'Собака');
const PARROT_CLASS = new ParrotClass('Кеша', 'Попугай');


ANIMAL_CLASS.eat();
ANIMAL_CLASS.say();
CAT_CLASS.eat();
CAT_CLASS.say();
CAT_CLASS.hunt();
DOG_CLASS.eat();
DOG_CLASS.say();
PARROT_CLASS.eat();
PARROT_CLASS.say();
