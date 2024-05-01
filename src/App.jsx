import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Assessments from "./components/Assessments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="assessments" element={<Assessments />} />
      </Route>
    </Routes>
  );
}

export default App;
