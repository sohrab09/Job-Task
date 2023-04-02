import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import './App.scss';
import User from "./components/User/User";


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  );
}

export default App;
