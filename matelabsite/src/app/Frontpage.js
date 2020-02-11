import React, {Component} from  'react';
import Section from './Sections';
import ContactForm from './contactForm';
 
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
            <Section title1=" &lt;mate/Lab&gt; " classCustom="intro"></Section>
            <ContactForm id="contacto"></ContactForm>
        </div>
        );
    }
}
export default Frontpage