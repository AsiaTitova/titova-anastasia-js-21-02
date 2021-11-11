'use strict';


import {initialTable} from "../components/generateTable";
import {tableData} from "../main";
import { UserData} from "../constants/constants";

const tableContainer = document.querySelector('.table__tbody');

let sortAsc = true;

// сортировка по возрастанию
const sortAcsValueByField = (value: Array<UserData>, field: string) => {
  return value.sort((a: UserData | any, b: UserData | any) => a[field] > b[field] ? 1 : -1);
}

// сортировка по убыванию
const sortDescValueByField = (value: Array<UserData>, field: string) => {
  return value.sort((a: UserData | any, b: UserData | any) => a[field] > b[field] ? -1 : 1);
}

// сортировка по возрастанию
const sortAcsValueNumberByField = (value: Array<UserData>, field: string) => {
  return value.sort((a: UserData | any, b: UserData | any) => b[field] - a[field]);
}

// сортировка по убыванию
const sortDescValueNumberByField = (value: Array<UserData>, field: string) => {
  return value.sort((a: UserData | any, b: UserData | any) => a[field] - b[field]);
}




// сортировать по имени персонажа
export const sortNameField = () => {
  tableContainer.innerHTML = ''
  let sortArr: Array<UserData>;
  if (sortAsc) {
    sortArr = sortAcsValueByField(tableData, 'name');
    initialTable(sortArr);
  } else {
    sortArr = sortDescValueByField(tableData, 'name');
    initialTable(sortArr);
  }
  sortAsc = !sortAsc;
}

// сортировать по росту персонажа
export const sortHeightField = () => {
  tableContainer.innerHTML = ''
  let sortArr: Array<UserData>;
  if (sortAsc) {
    sortArr = sortAcsValueNumberByField(tableData, 'height');
    initialTable(sortArr);
  } else {
    sortArr = sortDescValueNumberByField(tableData, 'height');
    initialTable(sortArr);
  }
  sortAsc = !sortAsc;
}

// сортировать по весу персонажа
export const sortMassField = () => {
  tableContainer.innerHTML = ''
  let sortArr: Array<UserData>;
  if (sortAsc) {
    sortArr = sortAcsValueNumberByField(tableData, 'mass');
    initialTable(sortArr);
  } else {
    sortArr = sortDescValueNumberByField(tableData, 'mass');
    initialTable(sortArr);
  }
  sortAsc = !sortAsc;
}

// сортировать по полу персонажа
export const sortGenderField = () => {
  tableContainer.innerHTML = ''
  let sortArr: Array<UserData>;
  if (sortAsc) {
    sortArr = sortAcsValueByField(tableData, 'gender');
    initialTable(sortArr);
  } else {
    sortArr = sortDescValueByField(tableData, 'gender');
    initialTable(sortArr);
  }
  sortAsc = !sortAsc;
}
