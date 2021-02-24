import React from "react";

const arrayIntegrantes = [
  {
    name: "Gabriel Lombardo",
    job: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/gabriel-dario-lombardo-1531b125/",
    site: "https://resumes.matelab.com.ar/en/glombardo.pdf",
    git: "https://github.com/gaby1986",
    descripcion:
      "After years of experience in different digital media companies, I become a Front End Developer and get the motivation to keep searching for new challenges as a developer.",
    photo: "/en/perfiles/perfil_gaby.jpg",
  },
  {
    name: "Juan Romano",
    job: "Software Architect",
    linkedin: "https://www.linkedin.com/in/jupromano/",
    site: "http://jpromano.net",
    git: "https://www.github.com/jpromanonet",
    descripcion:
      "Mathematician and programmer, I program, design and solve architecture problems(sometimes I create the problems too) also I'm always making experiments with new technologies, always drinking mate(?).",
    photo: "/en/perfiles/perfil_juanp.png",
  },
  {
    name: "Ariel Caminos",
    job: "Front End Developer",
    linkedin: "https://www.linkedin.com/in/ariel-caminos-3b187863/",
    site: "https://resumes.matelab.com.ar/en/acaminos.pdf",
    git: "https://github.com/ACaminos",
    descripcion:
      "Full Stack developer with knowledgments in C, JAVA, PHP, HTML, CSS and SQL, proactive, always with a positive actitude,  wide experience dealing with costumers. The big one i called it cuca.",
    photo: "/en/perfiles/perfil_ariel.jpg",
  },
  {
    name: "Jessica Medina",
    job: "Community Manager & Designer",
    linkedin: "https://www.linkedin.com/in/jessica-stefania-medina-aba5441b9/",
    site: "https://resumes.matelab.com.ar/es/jmedina.pdf",
    git: "https://github.com/matelab",
    descripcion:
      "I'm Jessica stefania Medina, Design student in FADU, I took a Graphical Design course in IAC, I have a master in UX and UI =)",
    photo: "/en/perfiles/perfil_jessi.jpg",
  },
  {
    name: "Juan Pablo Cesarini",
    job: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/juan-pablo-cesarini-695564164/",
    site: "https://resumes.matelab.com.ar/es/jcesarini.pdf",
    git: "https://github.com/",
    descripcion:
      "Full Stack Developer with knowledgments in C#, Python, Java, SQL, HTML, CSS and mostly a PHP fan, I’m a very proactive person with an open mind who likes to learn everyday about diversity.",
    photo: "/en/perfiles/perfil_jpc.jpg",
  },
  {
    name: "Francisco Chardini",
    job: "Front End Developer",
    linkedin: "https://www.linkedin.com/in/juan-pablo-cesarini-695564164/",
    site: "https://resumes.matelab.com.ar/es/fchardin.pdf",
    git: "https://github.com/",
    descripcion: "",
    photo: "/en/perfiles/perfil_francisco.jpg",
  },
  {
    name: "Luciana Farjat",
    job: "Sales Executive & Office Manager",
    linkedin: "https://www.linkedin.com/in/luciana-farjat-0372b0207/",
    site: "https://resumes.matelab.com.ar/es/lfarjat.pdf",
    git: "https://github.com/luperta",
    descripcion: "",
    photo: "/en/perfiles/perfil_luciana.jpg",
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
