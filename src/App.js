import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Protected from './components/Protected';
import ImagesUpload from "./pages/ImagesUpload";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path = '/account' element = {<Protected>
            <Account/>
            <ImagesUpload/>
          </Protected>}></Route>
        </Routes>
        
      </AuthContextProvider>
    </div>
  );
}

export default App;
