import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Specific from './component/specificpage';
function App() {
  return(
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='Login' element={<Login></Login>}></Route>
      <Route path='Home' element={<Home></Home>}></Route>
      <Route path='Specific/:Specificid' element={<Specific></Specific>}></Route>
      {/* <Route path='Specific' element={<Specific></Specific>}></Route> */}
    </Routes>
  );
};
export default App;
