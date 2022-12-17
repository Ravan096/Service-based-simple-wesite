import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Service from "./Component/Service";



import "./Style/App.scss";
import "./Style/header.scss";
import "./Style/home.scss";
import "./Style/footer.scss";
import "./Style/contact.scss";
import "./Style/mediaquery.scss";



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Service/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
