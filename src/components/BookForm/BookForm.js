import React, {Component} from 'react';
import {connect} from 'react-redux';

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
        [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding book`, this.state.newBook);
    this.props.dispatch({ type: 'ADD_BOOK', payload: this.state.newBook });
  }

  render() {

    return (
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
    );
  }
}

export default connect()(BookForm);
