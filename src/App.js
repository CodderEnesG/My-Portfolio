import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Sidebar,
  Footer,

} from "../src/components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    ReactGa.initialize("G-409W4CSBM1");

    ReactGa.pageview("/app");
  }, []);

  return (
    <>
      <Router>
        <Navbar toggle={toggle} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
