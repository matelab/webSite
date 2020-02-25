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
              text1="Llevando la tecnología hacia un futuro abierto e inclusivo" 
            >
            </Section>
            <Services 
              id="services"
              title1="Servicios" 
              text1="Somos creadores de soluciones tecnologicas para nuestros clientes, enfocandonos en su satisfacción junto con una rapida respuesta de manera continua, brindandoles servicios de desarrollo de software, soporte IT, Infraestructura, Business Inteligence y Data Science"
              >
            </Services>
            <Aboutus id="aboutus" title1="Sobre Nosotros"></Aboutus>
            <Customer  id="clientes" title1="Casos de uso"></Customer>
            <ContactForm id="contacto" title1="Contactenos"></ContactForm>
        </div>
        );
    }
}
export default Frontpage