import React from 'react';
import {connect} from 'react-redux';

function BookList(props) {
  return (
    <>
      <h2>All Books</h2>
      <ul>
        { props.reduxStore.bookList.map( (book, index) => 
          <li key={index}>{book.title} by {book.author}</li>  
        )}
      </ul>
    </>
  );
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(BookList);
