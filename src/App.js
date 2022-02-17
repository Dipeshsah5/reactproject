import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Menu/Home";
import Service from "./Menu/Service";
import About from "./Menu/About";
import Contact from "./Menu/Contact";
import Navbar from "./Menu/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
