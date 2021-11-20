import React from 'react';
import './Page.scss'
import {Aside} from "../Aside/Aside";
import {Main} from "../Main/Main";

export class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <Aside />
        <Main />
      </div>
    )
  }
}
