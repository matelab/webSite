import React from "react";

const arrayIntegrantes = [
  {
    name: "Gabriel Lombardo",
    job: "Desarrollador Front End",
    linkedin: "https://www.linkedin.com/in/gabriel-dario-lombardo-1531b125/",
    site: "https://resumes.matelab.com.ar/es/glombardo.pdf",
    git: "https://github.com/gaby1986",
    descripcion:
      "Tras años de experiencia en distintos medios digitales, adquirí herramientas como desarrollador FrontEnd y motivación para seguir buscando nuevos desafíos como programador.",
    photo: "/es/perfiles/perfil_gaby.jpg",
  },
  {
    name: "Juan Romano",
    job: "Arquitecto de Software",
    linkedin: "https://www.linkedin.com/in/jupromano/",
    site: "http://jpromano.net",
    git: "https://www.github.com/jpromanonet",
    descripcion:
      "Matemático, programador, mí rol es programar, diseñar y resolver problemas de arquitectura e implementar nuevas tecnologías, vivo a mate(?).",
    photo: "/es/perfiles/perfil_juanp.png",
  },
  {
    name: "Ariel Caminos",
    job: "Desarrollador Front-End",
    linkedin: "https://www.linkedin.com/in/ariel-caminos-3b187863/",
    site: "https://resumes.matelab.com.ar/es/acaminos.pdf",
    git: "https://github.com/ACaminos",
    descripcion:
      "Desarrollador full stack, conocimientos en C, JAVA, PHP, HTML, CSS, SQL. Pro activo, con actitud siempre positiva. Amplia experiencia en el trato con el usuario/cliente. A la grande le puse cuca.",
    photo: "/es/perfiles/perfil_ariel.jpg",
  },
  {
    name: "Jessica Medina",
    job: "Diseñadora Gráfica - UX/UI Specialist",
    linkedin: "https://www.linkedin.com/in/jessica-stefania-medina-aba5441b9/",
    site: "https://resumes.matelab.com.ar/es/jmedina.pdf",
    git: "https://github.com/matelab",
    descripcion:
      "Soy Jessica stefania Medina, estudiante de diseño de indumentaria en la FADU, realice un curso de diseño gráfico en el IAC, un master de UX, y estudie fotografía en Motivarte",
    photo: "/es/perfiles/perfil_jessi.jpg",
  },
  {
    name: "Juan Pablo Cesarini",
    job: "Desarrollador Full Stack",
    linkedin: "https://www.linkedin.com/in/juan-pablo-cesarini-695564164/",
    site: "https://resumes.matelab.com.ar/es/jcesarini.pdf",
    git: "https://github.com/",
    descripcion:
      "Analista de Sistemas - Desarrollador Full Stack, Aportando mi granito de arena para construir un mundo más diverso y sin prejuicios",
    photo: "/es/perfiles/perfil_jpc.jpg",
  },
  {
    name: "Francisco Chardin",
    job: "Desarrollador Front End",
    linkedin: "https://www.linkedin.com/in/francisco-chardin-a7a44479/",
    site: "https://resumes.matelab.com.ar/es/fchardin.pdf",
    git: "https://github.com/franchardin",
    descripcion:
      "Desarrollador Frontend JS, apasionado del diseño y músico.  Mis intereses van del lettering a la cocina con varias escalas intermedias (aparentemente) inconexas. Convencido de que el trabajo en equipo lo puede todo.",
    photo: "/es/perfiles/perfil_francisco.png",
  },
  {
    name: "Luciana Farjat",
    job: "Responsable Comercial & Office Manager",
    linkedin: "https://www.linkedin.com/in/luciana-farjat-0372b0207/",
    site: "https://resumes.matelab.com.ar/es/lfarjat.pdf",
    git: "https://github.com/luperta",
    descripcion: "",
    photo: "/es/perfiles/perfil_luciana.jpg",
  },
];

const AboutUs = (props) => {
  return (
    <div id={props.id} className={`section ${props.classCustom}`}>
      <h2 className="titleSection">{props.title1}</h2>
      <div className="row">
        {arrayIntegrantes.map((index, key) => {
          return (
            <div key={`${key}`} className="col l3 s12">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light customImgCard">
                  <img
                    src={`${index.photo}`}
                    className="imgAboutUs"
                    alt="Mate Lab"
                    width="50"
                    height="50"
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {index.name}
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    {index.job}
                    &nbsp;| &nbsp;
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
