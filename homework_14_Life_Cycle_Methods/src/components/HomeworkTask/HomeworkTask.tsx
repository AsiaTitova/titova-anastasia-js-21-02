import React from 'react';
import './HomeworkTask.scss';
import { ThemeContextConsumer, ThemeContextState } from '../../context/ThemeContext';

export class HomeworkTask extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {
          (context: Partial<ThemeContextState>) => (
            <section className={context.darkTheme ? 'homework homework_dark' : 'homework'}>
              <h1 className="homework__title">Домашнее задание №14</h1>
              <p className="homework__description">
                <span>Используя API</span>
                <a className="homework__link" href="https://dummyapi.io/">https://dummyapi.io/</a>
                <span>реализовать страницу по макету</span>
                <a className="homework__link" href="https://ibb.co/gRrC7Hb">https://ibb.co/gRrC7Hb</a>
              </p>
              <p className="homework__description">При наведении мыши на имя пользователя, должна всплывать подсказка с его id, подобная подсказке, продемонстрированной в уроке. Использовать HOC или компонент-обёртку.</p>
              <p className="homework__description">При нажатии на кнопки перехода по страницам должна загружаться соответствующая информация о пользователях.</p>
              <p className="homework__description">Должна быть реализована тёмная тема (используя контекст).</p>
              <p className="homework__description">*Опционально: Добавить анимацию всплывающей подсказке</p>
              <p className="homework__description">*Опционально: реализовать select для выбора кол-ва отображаемых на странице пользователей</p>
            </section>
          )
        }
      </ThemeContextConsumer>
    );
  }
}
