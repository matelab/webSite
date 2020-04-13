import React from "react";

const ContactForm = props => {
  return (
    <div id={props.id} className={`section ${props.classCustom}`}>
      <h2 className="titleSection">{props.title1}</h2>
      <div className="row">
        <div className="col l6 m6 s12">
          <div>
            <form onSubmit={props.contact}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    name="name"
                    onChange={props.nameChange}
                    value={props.nameValue}
                  />
                  <label htmlFor="name" name="nombre">
                    Nombre y apellido
                  </label>
                </div>
                <div className="input-field col s12">
                  <input
                    type="email"
                    name="email"
                    onChange={props.emailChange}
                    value={props.emailValue}
                  />
                  <label htmlFor="email" name="email">
                    Email
                  </label>
                </div>
                <div className="input-field col s12">
                  <textarea
                    id="query"
                    name="query"
                    onChange={props.queryChange}
                    value={props.queryValue}
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="query" name="consulta">
                    Consulta
                  </label>
                </div>
                <p className="paragraph1">{props.message}</p>
                <div className="input-field col s12">
                  <button type="submit" className="btn light-green darken-4">
                    Enviar Consulta!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col l6 m6 s12">
          <div>
            <a
              href="https://www.github.com/matelab"
              target="_blank"
              className="waves-effect waves-light btn-floating social github"
            >
              <i className="fa fa-github"></i>
            </a>
            &nbsp;
            <a
              href="https://www.linkedin.com/company/mate-lab"
              target="_blank"
              className="waves-effect waves-light btn-floating social linkedin"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            &nbsp;
            <a
              href="https://twitter.com/matelabtech"
              target="_blank"
              className="waves-effect waves-light btn-floating social twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
            &nbsp;
            <a
              href="https://www.instagram.com/matelab.ok"
              target="_blank"
              className="waves-effect waves-light btn-floating social instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
            &nbsp;
            <a
              href="https://medium.com/@matelab"
              target="_blank"
              className="waves-effect waves-light btn-floating social medium"
            >
              <i className="fa fa-medium"></i>
            </a>
            &nbsp;
            <a
              href="https://wa.me/5491121805256"
              target="_blank"
              className="waves-effect waves-light btn-floating social whatsapp"
            >
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
          <a className="d-block mt-5 text-decoration-none" target="_blank">
            <h4 className="title-footer">
              Consultas:&nbsp;&nbsp;
              <a href="mailto:contacto@matelab.com.ar">
                contacto@matelab.com.ar
              </a>
            </h4>
            <h5 className="underline"></h5>
          </a>
          <a className="d-block mt-5 text-decoration-none" target="_blank">
            <h4 className="title-footer">
              Comercial:&nbsp;&nbsp;
              <a href="mailto:comercial@matelab.com.ar">
                comercial@matelab.com.ar
              </a>
            </h4>
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
};

export default ContactForm;
