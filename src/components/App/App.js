import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import './App.css';


class App extends Component {

  componentDidMount = () => {
    this.getBooks();
  }

  getBooks = () => {
    axios({
      method: 'GET',
      url: '/books'
    }).then(response => {
      console.log('GET response', response);

      this.props.dispatch({
        type: "SET_BOOKS",
        payload: response.data
      });
    }).catch(err => {
      console.error('GET error', err);
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