import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import './App.css';


class App extends Component {

  // TODO - GET Book List from server
  componentDidMount = () => {
    axios({
      method: 'GET',
      url: '/books'
    }).then(response => {
      console.log('response is:', response)

      this.props.dispatch({
        type: 'SET_BOOKS',
        payload: response.data
      });
    }).catch(err => {
      console.log('GET error:', err);
    });
  }

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

export default connect()(App);
