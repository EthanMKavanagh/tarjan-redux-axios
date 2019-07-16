import React from 'react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header><h1>Playfair Books w/ Redux!</h1></header>
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;
