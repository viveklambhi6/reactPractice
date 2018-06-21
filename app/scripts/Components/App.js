import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';
import styles from './App.css';
// import Modal from './components/Modal';
// import Input, {Button} from './components/InputElements';
import LeftNavigation from './leftPanel/Left-Panel';
import Main from './Main';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <LeftNavigation />
          <Main />
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
