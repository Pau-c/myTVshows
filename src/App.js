import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchComponent from './Components/Search/SearchComponent';
import Series from './Pages/Series';
import Home from './Pages/Home';
import './App.css';
import { AuthProvider } from "./Components/context/AuthContext";
import { Login } from "./Components/Firebase/Users/Login";
import { Register } from "./Components/Firebase/Users/Register";
import FavoritesList from "./Pages/favorites";
import { ProtectedRoute } from "./Components/ProtectedRoute";


//Paths
function App() {
  return (
    <div className='bg-secondary'>
        <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<SearchComponent />} />
          <Route path='/show/:id' element={<Series />} />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <FavoritesList />
              </ProtectedRoute>
            } 
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
