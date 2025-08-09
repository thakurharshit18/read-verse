import React from 'react'
import{BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Login from './pages/Login';
import Products from './pages/Products'
import Home from './pages/Home';
import Signup from './pages/Signup';
import BookDetails from './pages/BookDetails';
const App = () => {
  return (
 <Router>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/products/:id' element={<BookDetails/>}/>
   
  </Routes>
 </Router>

  )
}

export default App
