import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            pass:'',
            confirm_pass:'',
            error:null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
     }

    render(){
        return(
            <div className="container">
            <h1>Contactenos</h1>
            <div className="card">
                <div className="card-content">
                    <form onSubmit={this.register}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Nombre y apellido"/>
                            </div>
                            <div className="input-field col s12">    
                                <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
                            </div>
                            <div className="input-field col s12">
                                <textarea type="password" name="pass" onChange={this.handleChange} value={this.state.pass} placeholder="Contraseña"/>
                            </div>
                            <button type="submit" className="btn light-blue darken-4">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Contact;