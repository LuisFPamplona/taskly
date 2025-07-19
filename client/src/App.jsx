import { useState } from "react";
import "./App.css";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Config from "./pages/Config/Config";
import Conta from "./pages/Config/Account";
import Langs from "./pages/Config/Langs";
import Statistic from "./pages/Statistic";

function App() {
  const [navDisplay, setNavDisplay] = useState("hidden");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route
            path="/home"
            element={
              <Home navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
            }
          />
          <Route path="/create" element={<Create />} />
          <Route
            path="/edit"
            element={
              <Edit navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
            }
          />
          <Route
            path="/configs"
            element={
              <Config navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
            }
          />
          <Route
            path="/userAccount"
            element={
              <Conta navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
            }
          />
          <Route
            path="/language"
            element={
              <Langs navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
            }
          />
          <Route
            path="/statistics"
            element={
              <Statistic
                navDisplay={navDisplay}
                setNavDisplay={setNavDisplay}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
