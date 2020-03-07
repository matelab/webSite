import React from "react";

const arrayIntegrantes = [
  {
    name: "Gabriel Lombardo",
    job: "Desarrollador Front End",
    linkedin: "https://www.linkedin.com/in/gabriel-dario-lombardo-1531b125/",
    git: "https://github.com/gaby1986",
    descripcion:
      "Tras años de experiencia en distintos medios digitales, adquirí herramientas como desarrollador FrontEnd y motivación para seguir buscando nuevos desafíos como programador.",
    photo: "/perfiles/perfil_gaby.jpg"
  },
  {
    name: "Juan Romano",
    job: "Desarrollador Full Stack",
    linkedin: "https://www.linkedin.com/in/jupromano/",
    site: "http://jpromano.net",
    git: "https://www.github.com/jpromanonet",
    descripcion:
      "Matemático, desarrollador full stack, mí rol es programar, diseñar y resolver problemas de arquitectura e implementar nuevas tecnologías, vivo a mate(?).",
    photo: "/perfiles/perfil_juanp.png"
  },
  {
    name: "Martin Pared Baez",
    job: "Desarrollador Full Stack",
    linkedin: "",
    git: "https://github.com/baubyte",
    descripcion:
      "DevOps, especializado en BackEnd, base de datos y algo de FrontEnd, el menos sociable del grupo.",
    photo: "/perfiles/perfil_tincho.jpg"
  },
  {
    name: "Rosana Caballero",
    job: "Referente de Gestion",
    linkedin: "",
    descripcion:
      "Licenciada en Administración de Recursos Humanos. Soy la que lleva el papeleo y registro contable de este grupo, la que quiere todo en regla.",
    photo: "/perfiles/perfil_ro.jpg"
  },
  {
    name: "Ariel Caminos",
    job: "Desarrollador Full Stack",
    linkedin: "https://www.linkedin.com/in/ariel-caminos-3b187863/",
    git: "https://github.com/ACaminos",
    descripcion:
      "Desarrollador full stack, conocimientos en C, JAVA, PHP, HTML, CSS, SQL. Pro activo, con actitud siempre positiva. Amplia experiencia en el trato con el usuario/cliente. A la grande le puse cuca.",
    photo: "/perfiles/perfil_ariel.jpg"
  },
  {
    name: "Maximiliano Salamone",
    job: "Referente Comercial",
    linkedin:
      "https://www.linkedin.com/in/maximiliano-a-salamone-castro-7a033733/",
    site: "http://qboit.com/",
    git: "https://github.com/maxisalamone",
    descripcion:
      "DevOps, con especialidad en implementación en la nube, BackEnd, base de datos. Licenciado en Relaciones Internacionales, en pos del costado humano de nuestros desarrollos.",
    photo: "/perfiles/perfil_maxi.jpg"
  }
];

const AboutUs = props => {
  return (
    <div id={props.id} className={`section ${props.classCustom}`}>
      <h2 className="titleSection">{props.title1}</h2>
      <div className="row">
        {arrayIntegrantes.map((index, key) => {
          return (
            <div key={`${key}`} className="col l3 s12">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    src={`${index.photo}`}
                    className="imgAboutUs"
                    alt="Mate Lab"
                    width="50"
                    height="50"
                    style={{ height: 150, maxHeight: 150 }}
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {index.name}
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href={`${index.git}`} target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                    &nbsp;
                    <a href={`${index.linkedin}`} target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    &nbsp;
                    <a href={`${index.site}`} target="_blank">
                      <i className="fa fa-link"></i>
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    <i className="material-icons right">close</i>
                    {index.name}
                  </span>
                  <p>{index.descripcion}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
