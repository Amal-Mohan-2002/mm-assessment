import React , {useEffect, useState} from 'react'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Individual from "./pages/Individual"

function App() {

  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route
            exact
            path="/view-user/:id"
            element={<Individual/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
