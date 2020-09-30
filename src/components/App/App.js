import React, {Component} from 'react';
import {connect} from 'react-redux';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import './App.css';


class App extends Component {

  componentDidMount = () => {
    this.getBooks();
  }

  getBooks = () => {
    this.props.dispatch({
      type: 'FETCH_BOOKS'
    });
  }

  render() {
    return (
        <div className="App">
          <header><h1>Books w/ Redux!</h1></header>
          <main>
            <BookForm getBooks={this.getBooks}/>
            <BookList />
          </main>
        </div>
    );
  }
}

export default connect()(App);