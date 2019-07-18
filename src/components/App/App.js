import React, {Component} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

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
          <Router>
            <Route exact path="/" component={BookList} />
            <Route exact path="/add" component={BookForm} />
          </Router>
          </main>
        </div>
    );
  }
}

export default App;
