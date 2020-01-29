import React, { Component } from "react";
import logo from "../mateLogo.png";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Row,
  Col,
  Dropdown,
  Divider,
  Icon
} from "react-materialize";
import M from "materialize-css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      validar: false,
      userName: "Inicio el estado"
    };
  }

  render() {
    return (
      <div>
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <a href="#!">one</a>
          </li>
          <li>
            <a href="#!">two</a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#!">three</a>
          </li>
        </ul>
        <nav className="black">
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">
              <img
                src={logo}
                className=""
                alt="Mate Lab"
                width="40"
                height="37"
              />
            </a>
            <a href="#!" class="brand-logo nextLogo">
              &lt;mate/Lab&gt;
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/servicios" title="Servicios">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="" title="Productos">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="" title="Investigación y desarrollo">
                  I+D
                </Link>
              </li>
              <li>
                <Link to="" title="Blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="" title="Organización">
                  Organización
                </Link>
              </li>
              <li>
                <Link to="/nosotros" title="Nosotros">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" title="Contacto">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="http://soporte.matelab.com.ar" title="Soporte">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
