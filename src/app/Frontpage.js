import React, { Component } from "react";
import Section from "./Sections";
import ContactForm from "./contactForm";
import Services from "./Services";
import Customer from "./customer";
import Aboutus from "./AboutUs";
import Organization from "./Organization";

class Frontpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pass: "",
      confirm_pass: "",
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
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
          text1="Somos creadores de soluciones tecnológicas para nuestros clientes, enfocandonos en su satisfacción junto con una rapida respuesta de manera continua, brindandoles servicios de desarrollo de software, soporte IT, Infraestructura, Business Inteligence y Data Science"
          text2="Creamos soluciones a partir de tres principios fundamentales: las personas, los procesos y los productos, lo que nos permite generar valor agregado a las organizaciones de quienes nos eligen."
        ></Services>
        <Organization
          id="organization"
          title1="Organización"
          text1="Somos una cooperativa de tecnologia con una jerarquia horizontal, colaborativa y participativa, donde cada persona tiene un voto y la palabra de todos tiene el mismo valor, no hay jefes, ni CEO, ni CTO ni puestos directivos, porque la idea es trabajar de lo que nos gusta y divertirnos mientras tanto, creando soluciones tecnologicas a problemas fascinantes."
          text2="En Matelab, todos son escuchados, todo se puede debatir y votar, porque lo importante para nosotros son ante todo las personas y por eso nuestra forma de trabajar se basa en cuatro principios tales como la honestidad, la inclusión, la calidad humana y la excelencia técnica."
        ></Organization>
        <Aboutus id="aboutus" title1="Sobre Nosotros"></Aboutus>
        <Customer id="clientes" title1="Confiaron en Nosotros"></Customer>
        <ContactForm id="contacto" title1="Contactenos"></ContactForm>
      </div>
    );
  }
}
export default Frontpage;
