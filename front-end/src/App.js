import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      {/* <HomeNav /> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/soaps" element={<Index />}></Route>
        <Route path="/soaps/new" element={<New />}></Route>
        <Route path="/soaps/:id" element={<Show />}></Route>
        <Route path="/soaps/:id/edit" element={<Edit />}></Route>
      </Routes>
    </>
  );
};

export default App;
