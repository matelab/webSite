import React from "react";

const ContactForm = props => {
    return (
      <div id={props.id} className="container">
        <div>
          <div className="card-content">
            <h3>Contactenos</h3>
            <form onSubmit={props.contact}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    name="name"
                    onChange={props.handleChange}
                    value={props.name}
                    placeholder="Nombre y apellido"
                  />
                </div>
                <div className="input-field col s12">
                  <input
                    type="text"
                    name="email"
                    onChange={props.handleChange}
                    value={props.email}
                    placeholder="Email"
                  />
                </div>
                <div className="input-field col s12">
                  <textarea
                    type="text"
                    name="comentarios"
                    placeholder="Deja tu comentario"
                  />
                </div>
                <button type="submit" className="btn light-blue darken-4">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }


export default ContactForm;
