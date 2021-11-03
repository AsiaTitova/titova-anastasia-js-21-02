'use strict'

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

Object.defineProperties(this, {
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

// console.log(Object.keys(AnimalFunc))
// console.log(Object.getOwnPropertyDescriptors(AnimalFunc))

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


Object.defineProperties(this, {
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

// console.log(Object.keys(CatFunc))
// console.log(Object.getOwnPropertyDescriptors(CatFunc))


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


Object.defineProperties(this, {
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

Object.defineProperties(this, {
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
