import React from 'react';
import './Popular.scss';
import {PopularList} from "./PopularList";


export class Popular extends React.Component {
  render() {
    return (
      <section className="main__popular popular">
        <div className="popular__container">
          <h2 className="popular__title">Рыбы на любой вкус</h2>
          <PopularList />
        </div>
      </section>
    )
  }
}
