import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Nav from "./app/Nav";
import Footer from "./app/footer";
import Frontpage from "./app/Frontpage";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Route path="/en/" exact component={Frontpage} />
      <Footer></Footer>
    </Router>
  );
}

export default App;
