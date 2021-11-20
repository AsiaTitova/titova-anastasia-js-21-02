import React from 'react';
import './HomeworkTask.scss';

export class HomeworkTask extends React.Component {
  render() {
    return (
      <section className="homework">
        <h1 className="homework__title">Домашнее задание №13</h1>
        <p className="homework__description">Разработка ToDo-листа (списка дел) на react.</p>
        <p className="homework__description">Предусмотреть минимальный функционал, т.е. у пользователя должна быть возможность добавлять и удалять записи.</p>
        <p className="homework__description">Записи должны сохраняться при перезагрузки страницы.</p>
      </section>
    );
  }
}
