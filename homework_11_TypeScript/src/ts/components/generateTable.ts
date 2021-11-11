'use strict';

import {UserData} from "../constants/constants";
import {addClassElement} from "../utils/utils";

const tableContainer = document.querySelector('.table__tbody');

// добавление новых строк с персонажами
const addNewUser = (newUser: UserData) => {
  const row = document.createElement('tr');
  addClassElement(row, 'table__row');
  createTableCellElement(newUser, 'name', row);
  createTableCellElement(newUser, 'height', row);
  createTableCellElement(newUser, 'mass', row);
  createTableCellElement(newUser, 'gender', row);
  tableContainer.appendChild(row);
}

// Генерация ячеек для новых строк
const createTableCellElement = (value: object | any, field: string, container: any) => {
  let elem: HTMLTableCellElement = document.createElement('th');
  addClassElement(elem, 'table__cell');
  elem.textContent = value[field];
  container.appendChild(elem)
}

// создание таблицы на основе полученных данных

export const initialTable = (userData: Array<UserData>) => {
  userData.forEach(function (row: UserData) {
    addNewUser(row)
  })
}
