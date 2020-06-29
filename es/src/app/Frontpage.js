import React, { Component } from "react";
import Section from "./Sections";
import ContactForm from "./contactForm";
import Services from "./Services";
import Customer from "./customer";
import Aboutus from "./AboutUs";
import Organization from "./Organization";
import Products from "./Products";

class Frontpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      query: "",
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("http://www.matelab.com.ar/es/mailContact.php", {
      body: data,
      method: "POST"
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        }
      })
      .then(response => {
        this.setState({
          message: response
        });
      })
      .catch(error => {
        this.setState({
          message: "Ocurrió un error con MateLab por favor recarga la Web"
        });
      });
  }
  render() {
    return (
      <div className="container-fluid">
        <div id="particles-js"></div>
        <Section
          id="intro"
          title1="&lt;mate/Lab&gt;"
          text1="Llevando la tecnología hacia un futuro abierto e inclusivo"
        ></Section>
        <Services
          id="services"
          title1="Servicios"
          text1="Somos creadores de soluciones tecnológicas para nuestros clientes, enfocándonos en su satisfacción junto con una rápida respuesta de manera continua, brindándoles servicios de desarrollo de Software, Soporte IT, Infraestructura, Business Inteligence y Data Science."
          text2="Creamos soluciones a partir de tres principios fundamentales: las personas, los procesos y los productos, que nos permite generar valor agregado a las organizaciones de quienes nos eligen."
        ></Services>
        <Products
          id="products"
          title1="productos"
          text1="Somos creadores de soluciones tecnológicas para nuestros clientes, enfocándonos en su satisfacción junto con una rápida respuesta de manera continua, brindándoles servicios de desarrollo de Software, Soporte IT, Infraestructura, Business Inteligence y Data Science."
          text2="Creamos soluciones a partir de tres principios fundamentales: las personas, los procesos y los productos, que nos permite generar valor agregado a las organizaciones de quienes nos eligen."
        ></Products>
        <Organization
          id="organization"
          title1="Organización"
          text1="Somos una cooperativa de tecnología sin jerarquías, organizada horizontalmente de forma colaborativa y participativa, donde cada persona tiene un voto y la palabra de todos tiene el mismo valor, no hay jefes, ni CEO, ni CTO, ni puestos directivos, porque la idea es trabajar de lo que nos apasiona y divertirnos creando soluciones tecnológicas a problemas desafiantes y fascinantes."
          text2="Matelab es un espacio de trabajo donde todos son escuchados por igual, todo se puede debatir y votar ya que lo importante para nosotros son ante todo las personas con sus diferentes maneras de pensar y por eso nuestra forma de trabajar se basa en cuatro pilares tales como la honestidad, la inclusión, la calidad humana y la excelencia técnica."
        ></Organization>
        <Aboutus id="aboutus" title1="Sobre Nosotros"></Aboutus>
        <Customer id="clientes" title1="Confiaron en Nosotros"></Customer>
        <ContactForm
          id="contacto"
          title1="Contactenos"
          contact={this.handleSubmit}
          nameChange={this.onChange.bind(this)}
          nameValue={this.state.name}
          emailChange={this.onChange.bind(this)}
          emailValue={this.state.email}
          queryChange={this.onChange.bind(this)}
          queryValue={this.state.query}
          message={this.state.message}
        ></ContactForm>
      </div>
    );
  }
}
export default Frontpage;
