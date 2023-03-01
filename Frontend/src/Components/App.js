import React from "react";
import Login from "./Login/Login";
import SideNavBar from "./sideNavBar/SideNavBar";
import Signup from "./SignUp/SignUp";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login></Login>}/>
          <Route path="/signup"  element={<Signup></Signup>}/>
         </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
