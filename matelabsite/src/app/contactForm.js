import React from "react";

const ContactForm = props => {
    return (
      <div id={props.id} className={`section ${props.classCustom}`}>
          <h2 className="titleSection">{props.title1}</h2>
          <div className="row">
            <div className="col s6">
                <div>
                  <form onSubmit={props.contact}>
                    <div className="row">
                      <div className="input-field col s12">
                      <input
                          type="text"
                          name="name"
                          onChange={props.handleChange}
                          value={props.name}
                        />
                        <label htmlFor="name">Nombre y apellido</label>
                      </div>
                      <div className="input-field col s12">
                        <input
                          type="text"
                          name="email"
                          onChange={props.handleChange}
                          value={props.email}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label htmlFor="textarea1">Comentarios</label>
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
                <div>
                  <a class="waves-effect waves-light btn-floating social github">
                  <i class="fa fa-github"></i> Sign in with github</a>
                  <a className="waves-effect waves-light btn-floating social twitter">
                  <i className="fa fa-twitter"></i> Sign in with twitter</a>
                  <a className="waves-effect waves-light btn-floating social linkedin">
                  <i className="fa fa-linkedin"></i> Sign in with linkedin</a>
                  <a className="waves-effect waves-light btn-floating social facebook">
                  <i className="fa fa-facebook"></i> Sign in with facebook</a>
                </div>  
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
