import React, {Component} from 'react';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import './App.css';


class App extends Component {

  // TODO - GET Book List from server

  render() {
    return (
        <div className="App">
          <header><h1>Books w/ Redux!</h1></header>
          <main>
            <BookForm />
            <BookList />
          </main>
        </div>
    );
  }
}

export default App;
