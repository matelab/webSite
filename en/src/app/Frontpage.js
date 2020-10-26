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
      query: "",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://www.matelab.com.ar/en/mailContact.php", {
      body: data,
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
      })
      .then((response) => {
        this.setState({
          message: response,
        });
      })
      .catch((error) => {
        this.setState({
          message: "Ocurrió un error con MeteLab por favor Recarga la Web",
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
          text1="Propelling technology towards an open and inclusive future"
        ></Section>
        <Services
          id="services"
          title1="Services"
          text1="What do we offer?"
          text2="Consulting, Automatización, Outsourcing, Custom Software Development and Infrastructure Support."
          text3="How is our workflow?"
          text4="We listen to our clients to bring them a set of alternative solutions while adding value helping them achive a complete and seamless digital transformation."
          text5="Closing up... what do we do?"
          text6="We solve your organization technological problems while freeing you of even thinking about it."
        ></Services>
        <Organization
          id="organization"
          title1="Organization"
          text1="We are a workers cooperative because we believe that the people have to be able to voluntarily join efforts and achieve ecominical, social and cultural aspirations, so we choose to build a totally democratic and shared organization with a non-hierarchical horizontal structure."
          text2="Matelab is a working space where everyone is listened in the same way and everything is open to debate and votation because the important for us is above everything else the persons with their different ways of thinking(we are free thinkers!) and because of that, our way of work is based upon four main principles like honesty, inclusion, human quality and technical excellency."
        ></Organization>
        <Aboutus id="aboutus" title1="About us"></Aboutus>
        <Customer id="clientes" title1="Who trusted us"></Customer>
        <ContactForm
          id="contacto"
          title1="Contact us"
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
