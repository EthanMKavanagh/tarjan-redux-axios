import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class BookForm extends Component {

  state = {
    newBook: {
      title: '',
      author: ''
    }
  }

  handleChangeFor = ( propertyName, event ) => {
    this.setState({
      newBook: {
        ...this.state.newBook,
        // called "computed property"
        [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding book`, this.state.newBook);

    axios({
      method: 'POST',
      url: '/books',
      data: this.state.newBook
    }).then(response => {
      console.log('POST /books', response);

      this.props.getBooks();
    }).catch(err => {
      console.error('POST failed', err);
    });
  }

  render() {

    return (
      <section>
        <h2>Add Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input required placeholder="Title" 
              value={this.state.newBook.title}
              onChange={(event) => this.handleChangeFor('title', event)}
          />

          <input required placeholder="Author" 
              value={this.state.newBook.author}
              onChange={(event) => this.handleChangeFor('author', event)}
          />
          <br />
          <button type="submit">
            Add Book
          </button>
        </form>
      </section>
    );
  }
}

export default connect()(BookForm);