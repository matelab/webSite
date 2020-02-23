import React from "react";

const ContactForm = props => {
    return (
      <div id={props.id} className={`section ${props.classCustom}`}>
          <h2 className="titleSection">{props.title1}</h2>
          <div className="row">
            <div className="col s6">
                <div className="card card-content">
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
                      <div className="input-field col s12">
                        <button type="submit" className="btn light-green darken-4">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
            </div>
            <div className="col s6">
                <a className="d-block mt-5 text-decoration-none" target="_blank">
                    <h4 className="title-footer">Consultas:</h4>
                    <h5 className="underline"></h5>
                </a>
                <a className="d-block mt-5 text-decoration-none" target="_blank">
                        <h4 className="title-footer">Comercial:</h4>
                        <h5 className="underline"></h5>
                </a>
                <a className="d-block mt-5 text-decoration-none" target="_blank">
                        <h4 className="title-footer">Comunicación:</h4>
                        <h5 className="underline"></h5>
                </a>
                <div className="social mt-5">
                    <a href="" target="_blank"></a>
                    <a href="" target="_blank"></a>
                    <a href="" target="_blank"></a>
                    <a href="" target="_blank"></a>
                </div>
            </div>
          </div>
      </div>
    );
  }


export default ContactForm;
