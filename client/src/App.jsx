import React from "react";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import PatienBook from "./components/PatientBook";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <>
        <Outlet />
      </>
    </div>
  );
}

export const MainChildren = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
