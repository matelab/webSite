import React, {Component} from  'react';
import Section from './Sections';
import ContactForm from './contactForm';
import Services from './Services';
import Customer from './customer';
import Aboutus from './AboutUs';
 
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
        return(
        <div className="container-fluid">
            <div id="particles-js"></div>
            <Section 
              id="intro"
              title1="&lt;mate/Lab&gt;" 
              text1="PARTNERS TECNOLÓGICOS EN LA TRANSFORMACIÓN DIGITAL" 
            >
            </Section>
            <Services 
              id="services"
              title1="Servicios" 
              text1="Somos partners tecnológicos de nuestros clientes y los acompañamos en la búsqueda de la mejor solución digital.
              Brindamos soluciones en consultoría, desarrollo, fábrica, calidad y soporte.
              A partir de muchos años de experiencia, nos especializamos en las áreas de seguros, gobierno, banca y finanzas y agro." 
              >
            </Services>
            <Aboutus id="aboutus" title1="Sobre Nosotros"></Aboutus>
            <Customer  id="clientes" title1="Clientes"></Customer>
            <ContactForm id="contacto" title1="Contactenos"></ContactForm>
        </div>
        );
    }
}
export default Frontpage