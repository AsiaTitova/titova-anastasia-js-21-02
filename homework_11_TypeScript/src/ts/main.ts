'use strict';

import {SWAPI_USERS_DATA, URL_API, UserData} from "./constants/constants";
import {initialTable} from "./components/generateTable";
import {swapi} from "./requests/api";
import {createFetch} from "./requests/fetch";
import {sortGenderField, sortHeightField, sortMassField, sortNameField} from "./utils/sort"
import {addClassElement, removeClassElement} from "./utils/utils";

const tableContainer = document.querySelector('.table__tbody');
const nextButton = document.querySelector('.task__link_next');
const prevButton = document.querySelector('.task__link_prev');
const sortName = document.querySelector('.table__sort-name');
const sortHeight = document.querySelector('.table__sort-height');
const sortMass = document.querySelector('.table__sort-mass');
const sortGender = document.querySelector('.table__sort-gender');


export let tableData: Array<UserData>;
let fullData: SWAPI_USERS_DATA;


const getData = (resp: SWAPI_USERS_DATA): void => {
  fullData = resp;
  tableData = fullData.results.map((item: UserData) => {
    return { name: item.name, height: item.height, mass: item.mass, gender: item.gender };
  });
  initialTable(tableData);
  setNextLink();
  setPrevLink();
}

swapi.getUsers((resp: SWAPI_USERS_DATA) => {
  getData(resp);
});

sortName.addEventListener('click', sortNameField);
sortHeight.addEventListener('click', sortHeightField);
sortMass.addEventListener('click', sortMassField);
sortGender.addEventListener('click', sortGenderField);


// установка отображения кнопки перехода на следующую страницу
const setNextLink = () => {
  if (fullData.next) {
    removeClassElement(nextButton, 'task__link_hide')
  } else {
    addClassElement(nextButton, 'task__link_hide')
  }
}

// установка отображения кнопки перехода на предидущую страницу
const setPrevLink = () => {
  if (fullData.previous) {
    removeClassElement(prevButton, 'task__link_hide')
  } else {
    addClassElement(prevButton, 'task__link_hide')
  }
}

// получение данных следуюущей страницы
function changePage(apiLink: string) {
  const resp = createFetch(apiLink);
  resetTable();
  resp((resp: SWAPI_USERS_DATA) => {
    getData(resp);
  });
}


nextButton.addEventListener('click', () => changePage(fullData.next));
prevButton.addEventListener('click', () => changePage(fullData.previous));

// отчистка таблицы
function resetTable() {
  tableData = [];
  tableContainer.innerHTML = ''
}

