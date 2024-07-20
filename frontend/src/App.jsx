import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CreateBook from './pages/createBook';
import ShowBook from './pages/showBook';
import DeleteBook from './pages/deleteBook';
import EditBook from './pages/editBook';
import Login from './pages/Login'; // Import Login page
import Signup from './pages/Signup'; // Import Signup page

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
}

export default App;
