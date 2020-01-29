import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import Nav from "./app/Nav";
import Contact from "./app/contactForm";
import AboutUs from "./app/AboutUs";
import Servicios from "./app/servicios";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Route path="/contacto" exact component={Contact} />
      <Route path="/nosotros" exact component={AboutUs} />
      <Route path="/servicios" exact component={Servicios} />
    </Router>
  );
}

export default App;
