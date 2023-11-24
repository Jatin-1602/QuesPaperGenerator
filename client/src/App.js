import React from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/Home";
import GetPaper from "./components/GetPaper";
import AddQues from "./components/AddQues";
import DisplayPaper from "./components/DisplayPaper";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/getPaper" element={<GetPaper />}></Route>
        <Route path="/addQues" element={<AddQues />}></Route>
        <Route path="/displayPaper" element={<DisplayPaper />}></Route>
      </Routes>
    </div>
  );
};

export default App;
