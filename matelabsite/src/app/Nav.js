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
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">one</a>
          </li>
          <li>
            <a href="#!">two</a>
          </li>
          <li className="divider"></li>
          <li>
            <a href="#!">three</a>
          </li>
        </ul>
        <nav className="black">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              <img
                src={logo}
                className=""
                alt="Mate Lab"
                width="40"
                height="37"
              />
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#servicios" title="Servicios">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#productos" title="Productos">
                  Productos
                </a>
              </li>
              <li>
                <a href="#i+d" title="Investigación y desarrollo">
                  I+D
                </a>
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
                <a href="#contacto" title="Contacto">
                  Contacto
                </a>
              </li>
              <li>
                <Link to="http://soporte.matelab.com.ar" title="Soporte">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            <li>
              <a href="#servicios" title="Servicios">
                Servicios
              </a>
            </li>
            <li>
              <a href="#productos" title="Productos">
                Productos
              </a>
            </li>
            <li>
              <a href="#i+d" title="Investigación y desarrollo">
                I+D
              </a>
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
              <a href="#contacto" title="Contacto">
                Contacto
              </a>
            </li>
            <li>
              <Link to="http://soporte.matelab.com.ar" title="Soporte">
                Soporte
              </Link>
            </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
