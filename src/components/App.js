import React from 'react';

import './App.css';
import Header from './Header';
import Footer from './Footer';
import BookShelf from './BookShelf';

function App() {
  return (
    <div className="App">
        <Header/>
        <BookShelf/>
        <Footer/>
    </div>
  );
}

export default App;