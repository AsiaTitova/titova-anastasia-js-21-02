import React from 'react';
import './Main.scss'
import {Promo} from "../Promo/Promo";
import {Popular} from "../Popular/Popular";

export class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Promo />
        <Popular />
      </main>
    )
  }
}
