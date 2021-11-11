'use strict';

// вспомогательные функции //

export const addClassElement = (element: any, className: string) => {
  element.classList.add(className);
}

export const removeClassElement = (element: any, className: string) => {
  element.classList.remove(className);
}
