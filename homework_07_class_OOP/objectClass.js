
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

Object.defineProperties(AnimalClass, {
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

// console.log(Object.keys(AnimalClass))
// console.log(Object.getOwnPropertyDescriptors(AnimalClass))

class CatClass extends AnimalClass {
  constructor(name, type) {
    super(name);
    this._name = name;
    this.type = type;
  }

  hunt() {
    console.log(`${this._name} охотится`)
  }

  say() {
    console.log(`${this.type} мяукает`);
  }
}

Object.defineProperties(CatClass, {
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

// console.log(Object.keys(CatClass))
// console.log(Object.getOwnPropertyDescriptors(CatClass))

class DogClass extends AnimalClass {
  constructor(name, type) {
    super(name);
    this._name = name;
    this.type = type;
  }

  say() {
    console.log(`${this.type} мяукает`);
  }
}

Object.defineProperties(DogClass, {
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

// console.log(Object.keys(DogClass))
// console.log(Object.getOwnPropertyDescriptors(DogClass))

class ParrotClass extends AnimalClass  {
  constructor(name, type) {
    super(name);
    this._name = name;
    this.type = type;
  }

  say() {
    console.log(`${this.type} говорит`);
  }
}

Object.defineProperties(ParrotClass, {
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

// console.log(Object.keys(ParrotClass))
// console.log(Object.getOwnPropertyDescriptors(ParrotClass))


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
