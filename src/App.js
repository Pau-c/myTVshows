import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchComponent from './Components/Search/SearchComponent';
import Series from './Pages/Series';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className='bg-secondary'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<SearchComponent />} />
          <Route path='/show/:id' element={<Series />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
