import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Assessments from "./components/Assessments";
import Results from "./components/Results";
import Payment from "./pages/Payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="assessments" element={<Assessments />} />
        <Route path="results" element={<Results />} />
      </Route>
      <Route path="payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
