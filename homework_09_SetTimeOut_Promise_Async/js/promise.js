'use strict';

(function () {
  const userRowTemplate = document.querySelector('#user-row');
  const tableContainer = document.querySelector('.table__tbody');
  const nextButton = document.querySelector('.task__link_next');
  const prevButton = document.querySelector('.task__link_prev');
  const sortName = document.querySelector('.table__sort-name');
  const sortHeight = document.querySelector('.table__sort-height');
  const sortMass = document.querySelector('.table__sort-mass');
  const sortGender = document.querySelector('.table__sort-gender');

  let api = 'https://swapi.dev/api/people/';
  let tableData = [];
  let sortAsc = true;

  //функция получения данных для таблицы
  function getData() {
    fetch(api)
      .then(response => response.json())
      .then(response => {
        tableData = response;
        initialTable(tableData.results);
        setNextLink();
        setPrevLink();
      })
      .catch(err => console.log(`SWAPI getData завершился ошибкой: ${err}`))
  }

  // создание таблицы на основе полученных данных
  function initialTable(userData) {
    userData.forEach(function (row) {
      addNewUser(row)
    })
  }

  // добавление новых строк с персонажами
  function addNewUser (newUser) {
    let userRow = userRowTemplate.cloneNode(true).content.querySelector('.table__row');

    createTableCellElement(newUser.name, userRow);
    createTableCellElement(newUser.height, userRow);
    createTableCellElement(newUser.mass, userRow);
    createTableCellElement(setGender(newUser.gender), userRow);

    tableContainer.appendChild(userRow);
  }

  // Генерация ячеек для новых строк
  function createTableCellElement(value, container) {
    let elem = document.createElement('th');
    addClassElement(elem, 'table__cell');
    elem.textContent = value;
    container.appendChild(elem)
  }

  // установка пола персонажа
  function setGender(gender) {
    switch (gender) {
      case 'male':
        return 'мужской';
      case 'female':
        return 'женский';
      default:
        return '-'
    }
  }

  // установка отображения кнопки перехода на следующую страницу
  function setNextLink() {
    if (tableData.next) {
      removeClassElement(nextButton, 'task__link_hide')
    } else {
      addClassElement(nextButton, 'task__link_hide')
    }
  }

  // установка отображения кнопки перехода на предидущую страницу
  function setPrevLink() {
    if (tableData.previous) {
      removeClassElement(prevButton, 'task__link_hide')
    } else {
      addClassElement(prevButton, 'task__link_hide')
    }
  }

  // получение данных следуюущей страницы
  function changeNextPage() {
    api = tableData.next;
    resetTable();
    getData();
  }

  // получение данных предидущей страницы
  function changePrevPage() {
    api = tableData.previous;
    resetTable();
    getData();
  }

  nextButton.addEventListener('click', changeNextPage);
  prevButton.addEventListener('click', changePrevPage);

  // отчистка таблицы
  function resetTable() {
    tableData = [];
    tableContainer.innerHTML = ''
  }

  // сортировка по возрастанию
  function sortAcsValueByField(value, field) {
    return value.sort((a, b) => a[field] > b[field] ? 1 : -1);
  }

  // сортировка по убыванию
  function sortDescValueByField(value, field) {
    return value.sort((a, b) => a[field] > b[field] ? -1 : 1);
  }

  // сортировать по имени персонажа
  function sortNameField() {
    tableContainer.innerHTML = ''
    if (sortAsc) {
      initialTable(sortAcsValueByField(tableData.results, 'name'));
    } else {
      initialTable(sortDescValueByField(tableData.results, 'name'));
    }
    sortAsc = !sortAsc;
  }

  // сортировать по росту персонажа
  function sortHeightField() {
    tableContainer.innerHTML = ''
    if (sortAsc) {
      initialTable(sortAcsValueByField(tableData.results, 'height'));
    } else {
      initialTable(sortDescValueByField(tableData.results, 'height'));
    }
    sortAsc = !sortAsc;
  }

  // сортировать по весу персонажа
  function sortMassField() {
    tableContainer.innerHTML = ''
    if (sortAsc) {
      initialTable(sortAcsValueByField(tableData.results, 'mass'));
    } else {
      initialTable(sortDescValueByField(tableData.results, 'mass'));
    }
    sortAsc = !sortAsc;
  }

  // сортировать по полу персонажа
  function sortGenderField() {
    tableContainer.innerHTML = ''
    if (sortAsc) {
      initialTable(sortAcsValueByField(tableData.results, 'gender'));
    } else {
      initialTable(sortDescValueByField(tableData.results, 'gender'));
    }
    sortAsc = !sortAsc;
  }

  sortName.addEventListener('click', sortNameField);
  sortHeight.addEventListener('click', sortHeightField);
  sortMass.addEventListener('click', sortMassField);
  sortGender.addEventListener('click', sortGenderField);


  // вспомогательные функции //

  function addClassElement(element, className) {
    element.classList.add(className);
  }

  function removeClassElement(element, className) {
    element.classList.remove(className);
  }

  getData();
})()
