'use strict';

(function () {
  const container = document.querySelector('.container');

  // Смена цветового офрмления таблицы

  const themeMainButton = document.querySelector('.theme-picker__button_main');
  const themeGreenButton = document.querySelector('.theme-picker__button_green');
  const themeBlueButton = document.querySelector('.theme-picker__button_blue');

  themeMainButton.addEventListener('click', () => {
    removeClassElement(container, 'blue-theme')
    removeClassElement(container, 'green-theme')
  })

  themeGreenButton.addEventListener('click', () => {
    addClassElement(container, 'green-theme');
    removeClassElement(container, 'blue-theme')
  })

  themeBlueButton.addEventListener('click', () => {
    addClassElement(container, 'blue-theme');
    removeClassElement(container, 'green-theme')
  })


  // Данные о пользователях для таблицы

  let userData = [
    {
      name: 'Анастасия',
      tel: '+7(963)196-85-26'
    },
    {
      name: 'Александр',
      tel: '+7(952)156-80-36'
    },
    {
      name: 'Ирина',
      tel: '+7(923)396-85-00'
    }
  ]


  // Генерация таблицы при старте из имеющихся данных

  const userRowTemplate = document.querySelector('#user-row');
  const tableContainer = document.querySelector('.table__tbody');
  let deleteButtons = document.querySelectorAll('.table__delete');

  function initialTable(userData) {
    userData.forEach(function (row) {
      addNewUser(row)
    })
    deleteButtons = document.querySelectorAll('.table__delete');
    console.log(userData, deleteButtons)
  }

  initialTable(userData);


  // Генерация ячеек для новых строк

  function createTableCellElement(value, container) {
    let elem = document.createElement('th');
    addClassElement(elem, 'table__cell');
    elem.textContent = value;
    container.appendChild(elem)
  }

  function createButtonDeleteCell(container) {
    let elem = document.createElement('th');
    addClassElement(elem, 'table__cell');
    addClassElement(elem, 'table__cell_control');
    let button = document.createElement('button');
    addClassElement(elem, 'table__delete');
    elem.appendChild(button)
    container.appendChild(elem)
  }


  // Добавление нового человека

  const addUserButton = document.querySelector('.form__submit');
  const setUserName = document.getElementById('name');
  const setUserPhone = document.getElementById('phone');
  const errorName = document.querySelector('.error_name');
  const errorPhone = document.querySelector('.error_name');

  addUserButton.addEventListener('click', () => {
    let newUser = {
      name: setUserName.value,
      tel: setUserPhone.value
    };
    if (checkValidation()) {
      return false
    } else {
      userData.push(newUser);
      tableContainer.innerHTML = '';
      initialTable(userData);
      setUserName.value = '';
      setUserPhone.value = '';
    };
  })

  function addNewUser (newUser) {
    let userRow = userRowTemplate.cloneNode(true).content.querySelector('.table__row');

    createTableCellElement(newUser.name, userRow);
    createTableCellElement(newUser.tel, userRow);
    createButtonDeleteCell(userRow);

    tableContainer.appendChild(userRow);
  }

  // Валидация формы - так как не было четких рамок валидации, то я проверила только наличие полей (Имя может быть любым, кроме чисел)
  function checkValidation() {
    const regexp = new RegExp(/^[А-Яа-яёЁ -]+$/);
    if (!regexp.test(setUserName.value)) {
      addClassElement(errorName, 'error_show')
      errorName.textContent = 'Только кирилические символы, пробелы или символ "-"'
      return true
    }
    if (!setUserName.value.length) {
      addClassElement(errorName, 'error_show')
      errorName.textContent = 'Введите имя!'
      return true
    }
    removeClassElement(errorName, 'error_show')
    if (!setUserPhone.value.length) {
      addClassElement(errorPhone, 'error_show')
      return true
    }
    removeClassElement(errorPhone, 'error_show')
    return false
  }


  // Удаление строки с пользователем

  deleteButtons.forEach(function (button, index) {
    button.addEventListener('click', (event) => {
      let elem = event.target
      console.log(elem.parentNode, tableContainer);
      tableContainer.removeChild(elem.parentNode.parentNode);
      userData.splice(index, 1);
    })
  })


  // вспомогательные функции //

  function addClassElement(element, className) {
    element.classList.add(className);
  }

  function removeClassElement(element, className) {
    element.classList.remove(className);
  }

  $(".telmask").mask("+7(999)999-99-99");
})();
