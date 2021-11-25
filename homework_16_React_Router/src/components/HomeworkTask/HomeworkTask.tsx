import React from 'react';
import './HomeworkTask.scss';

const HomeworkTask = () => (
  <section className="homework">
    <h1 className="homework__title">Домашнее задание №16</h1>
    <ol className="homework__list">
      <li className="homework__description">При клике по карточке пользователя из предыдущего домашнего задания, должен совершаться переход на форму пользователя, содержащую полную информацию о пользователе.</li>
      <li className="homework__description">На форме пользователя реализовать кнопку &quotназад&quot, реализующую функционал кнопки &quotназад&quot браузера.</li>
      <li className="homework__description">Компонент переключения по страницам должен отображать реальное кол-во страниц (например, если найдено 100 пользователей, при отображении 10-и пользователей на странице, должно быть десять кнопок для перехода по страницам).</li>
      <ul className="homework__list">
        <li className="homework__item">
          <p className="homework__description">В случае если кол-во страниц превышает 10, должны отображаться кнопки первой, второй, третей страниц, знак троеточия, плитка предыдущей, текущей и следующей страниц, троеточие и плитки последних трёх страниц страницы.</p>
          <p className="homework__description">
            <span>Пример (всего 20 странниц, активна страница 11):</span>
            |1|2|3|…|10|11|12|…|18|19|20|
          </p>
        </li>
        <li className="homework__item">
          <p className="homework__description"> Если, при вышеописанных условиях активна страница 5, троеточие между кнопками 3 и 4 не отображать</p>
          <p className="homework__description">
            <span>Пример (всего 20 страниц, активна 5-я страница):</span>
            |1|2|3|4|5|6|…|18|19|20|
          </p>
        </li>
        <li className="homework__item">
          <p className="homework__description">Если, при вышеописанных условиях активна страница n-3 (где n – общее число страниц), троеточие после кнопки следующей страницы не отображать</p>
          <p className="homework__description">
            <span>Пример (всего 20 страниц, активна 17-я страница):</span>
            |1|2|3|…|16|17|18|19|20|
          </p>
        </li>
      </ul>
    </ol>
  </section>
);

export default HomeworkTask;
