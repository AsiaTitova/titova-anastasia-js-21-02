import React from 'react'
import './App.scss';
import {Header} from "./components/Header/Header";
import {Page} from "./components/Page/Page";
import {Footer} from "./components/Footer/Footer";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Page />
        <Footer />
      </div>
    );
  }
}

export default App;
