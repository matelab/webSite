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
      <div className="header">
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
            <a href="#" className="brand-logo">
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
                <a className="anchorLink" href="#services" title="Servicios">
                  Services
                </a>
              </li>
              <li>
                <a
                  className="anchorLink"
                  href="#organization"
                  title="Organización"
                >
                  Organization
                </a>
              </li>
              <li>
                <a
                  href="https://blog.matelab.com.ar/"
                  target="_blank"
                  title="Blog"
                >
                  Blog
                </a>
              </li>
              {/*<li>
                <a className="anchorLink" href="#i+d" title="Investigación y desarrollo">
                  I+D
                </a>
              </li>*/}
              <li>
                <a className="anchorLink" href="#aboutus" title="Nosotros">
                  About us
                </a>
              </li>
              <li>
                <a className="anchorLink" href="#clientes" title="clientes">
                  Use cases
                </a>
              </li>
              <li>
                <a className="anchorLink" href="#contacto" title="Contacto">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="http://soporte.matelab.com.ar"
                  target="_blank"
                  title="Soporte"
                >
                  Support
                </a>
              </li>
              <li>
                <a href="../es" title="language">
                  | ES
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a className="anchorLink" href="#services" title="Servicios">
              Services
            </a>
          </li>
          <li>
            <a className="anchorLink" href="#clientes" title="clientes">
              Use Cases
            </a>
          </li>
          <li>
            <a className="anchorLink" href="#organization" title="Organización">
              Organization
            </a>
          </li>
          <li>
            <a href="http://blog.matelab.com.ar/" target="_blank" title="Blog">
              Blog
            </a>
          </li>
          {/*<li>
            <a
              className="anchorLink"
              href="#i+d"
              title="Investigación y desarrollo"
            >
              I+D
            </a>
          </li>*/}
          <li>
            <a className="anchorLink" href="#aboutus" title="Nosotros">
              About Us
            </a>
          </li>
          <li>
            <a className="anchorLink" href="#contacto" title="Contacto">
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="http://soporte.matelab.com.ar"
              target="_blank"
              title="Soporte"
            >
              Support
            </a>
            <li>
              <a href="../es" title="language">
                | ES
              </a>
            </li>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
