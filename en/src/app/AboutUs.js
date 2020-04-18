import React from "react";

const arrayIntegrantes = [
  {
    name: "Gabriel Lombardo",
    job: "Front End Dev",
    linkedin: "https://www.linkedin.com/in/gabriel-dario-lombardo-1531b125/",
    site: "https://resumes.matelab.com.ar/en/glombardo.pdf",
    git: "https://github.com/gaby1986",
    descripcion:
      "After years of experience in different digital media companies, I become a Front End Developer and get the motivation to keep searching for new challenges as a developer.",
    photo: "/en/perfiles/perfil_gaby.jpg"
  },
  {
    name: "Juan Romano",
    job: "DevOps",
    linkedin: "https://www.linkedin.com/in/jupromano/",
    site: "http://jpromano.net",
    git: "https://www.github.com/jpromanonet",
    descripcion:
      "Mathematician and programmer, I program, design and solve architecture problems also i'm always making experiments with new technologies, i'm always drinking mate(?).",
    photo: "/en/perfiles/perfil_juanp.png"
  },
  {
    name: "Martin Pared Baez",
    job: "DevOps",
    linkedin: "https://www.linkedin.com/in/mparedbaez/",
    site: "https://resumes.matelab.com.ar/en/mparedbaez.pdf",
    git: "https://github.com/baubyte",
    descripcion:
      "DevOps, with special focus on Backend development, databases and some Frontend, i'm the less social of the group.",
    photo: "/en/perfiles/perfil_tincho.jpg"
  },
  {
    name: "Rosana Caballero",
    job: "Office Administrator",
    linkedin: "https://www.linkedin.com/in/rosanacaballero/",
    site: "https://resumes.matelab.com.ar/en/rcaballero.pdf",
    descripcion:
      "With a degree in Human Resources Administration, i'm the one who is in charge of paperwork and the accounting in the group, the one who wants everything in perfect order.",
    photo: "/en/perfiles/perfil_ro.jpg"
  },
  {
    name: "Ariel Caminos",
    job: "Full Stack Dev",
    linkedin: "https://www.linkedin.com/in/ariel-caminos-3b187863/",
    site: "https://resumes.matelab.com.ar/en/acaminos.pdf",
    git: "https://github.com/ACaminos",
    descripcion:
      "Full Stack developer with knowledgments in C, JAVA, PHP, HTML, CSS and SQL, proactive, always with a positive actitude,  wide experience dealing with costumers. The big one i called it cuca.",
    photo: "/en/perfiles/perfil_ariel.jpg"
  },
  {
    name: "Maximiliano Salamone",
    job: "Sales Leader",
    linkedin:
      "https://www.linkedin.com/in/maximiliano-a-salamone-castro-7a033733/",
    site: "https://resumes.matelab.com.ar/en/msalamone.pdf",
    git: "https://github.com/maxisalamone",
    descripcion:
      "DevOps with focus on cloud implementation, backend and databases with a degree in International Relationships, i'm in the human side of our developments.",
    photo: "/en/perfiles/perfil_maxi.jpg"
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
