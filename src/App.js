import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Edit from './pages/Edit.jsx';
import Add from './pages/Add.jsx';
import axios from "axios";

axios.defaults.baseURL = "https://assignmentbackend99.herokuapp.com/";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
};

export default App;