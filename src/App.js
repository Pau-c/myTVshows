import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchComponent from "./Components/Search/SearchComponent";
import Series from "./Pages/Series";
import Home from "./Pages/Home";
import "./App.css";
import { AuthProvider } from "./Components/context/AuthContext";
import { Login } from "./Components/Firebase/Users/Login";
import { Register } from "./Components/Firebase/Users/Register";
import FavoritesList from "./Pages/favorites";
import { ProtectedRoute } from "./Components/ProtectedRoute";
//import { color } from 'html2canvas/dist/types/css/types/color';

//Paths
function App() {
  return (
    // all pages backgroud
    <div style={{ background: "#3c3c3c" }}>
      {/* Routes */}
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<SearchComponent />} />
            <Route path="/show/:id" element={<Series />} />
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
