'use strict';

(function() {

  //Реализовать страницу, через десять секунд перенаправляющую на главную страницу https://maxima.life,
  // на странице вывести сообщение "вы будите перенаправлены через /*количество оставшихся секунд*/" секунд

  const secondsContainer = document.querySelector('.task__seconds');
  const count = 10;
  const wordsArray = ['секунду', 'секунды', 'секунд']

  function redirect() {
    secondsContainer.innerHTML =  count + " " + declOfNum(count, wordsArray);
    setTimeout(timer, 1000,  count);

  }

  function timer(count) {
    secondsContainer.innerHTML = count + " " + declOfNum(count, wordsArray);
    count--;
    if (0 < count) {
      setTimeout(timer, 1000,  count)
    } else {
      clearTimeout(timer);
      //для редиректа поменять свойство window.location
      window.location.replace('https://maxima.life');
    }
  }


  // предусмотреть склонение слова "секунда"
  function declOfNum(number, words) {
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
      ];
  }

  redirect();
})();
