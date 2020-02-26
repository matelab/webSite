import React from "react";

const arrayIntegrantes = [
  {
    name: "Juan P. Romano",
    job: "Desarrollador Full Stack",
    linkedin: "https://www.linkedin.com/in/jupromano/",
    site: "http://www.jpromano.net",
    git: "https://www.github.com/jpromanonet",
    descripcion:
      "DevOps, especializado en ciencia de datos, licenciado en Matemática de la UBA, MVP 2017 en Microsoft SQL, mí rol es resolver problemas de arquitectura en nuestros desarrollos e implementar nuevas tecnologías.",
    photo: "/perfiles/perfil_juanp.png"
  },
  {
    name: "Maximiliano Salamone",
    job: "Referente Comercial",
    linkedin:
      "https://www.linkedin.com/in/maximiliano-a-salamone-castro-7a033733/",
    site: "",
    git: "",
    descripcion:
      "DevOps, con especialidad en implementacion en la nube, backend, base de datos. Licenciado en Relaciones Intenacionales, en pos del costado humano de nuestros desarrollos.",
    photo: "/perfiles/perfil_maxi.jpg"
  },
  {
    name: "Martin Pared Baez",
    job: "Desarrollador Full Stack",
    linkedin: "",
    site: "",
    git: "https://github.com/baubyte",
    descripcion: "",
    photo: "/perfiles/perfil_maxi.jpg"
  },
  {
    name: "Gabriel D. Lombardo",
    job: "Desarrollador Front End",
    linkedin: "https://www.linkedin.com/in/gabriel-dario-lombardo-1531b125/",
    site: "",
    git: "https://github.com/gaby1986",
    descripcion:
      "Tras años de experiencia me he afianzado como desarrollador web,trabajando mayormente en distintos medios digitales. Estos puestos,no solo me han permitido adquirir herramientas para realizar FrontEnd, sino también me motivaron a seguir buscando nuevos desafíosy ampliar mis conocimientos en la programación. ",
    photo: "/perfiles/perfil_gaby.jpg"
  },
  {
    name: "Ariel Caminos",
    job: "Desarrollador Full Stack",
    linkedin: "https://www.linkedin.com/in/ariel-caminos-3b187863/",
    site: "",
    git: "https://github.com/ACaminos",
    descripcion: "",
    photo: "/perfiles/perfil_ariel.jpg"
  },
  {
    name: "Damian Barbero",
    job: "Desarrollador Full Stack",
    linkedin: "https://www.linkedin.com/in/damian-barbero/",
    site: "",
    git: "https://github.com/DamianB96",
    descripcion: "",
    photo: "/perfiles/perfil_maxi.jpg"
  },
  {
    name: "Rosana Caballero",
    job: "Referente de Gestion",
    linkedin: "",
    site: "",
    git: "",
    descripcion: "",
    photo: "/perfiles/perfil_maxi.jpg"
  }
];

const AboutUs = props => {
  return (
    <div id={props.id} className={`section ${props.classCustom}`}>
      <h2 className="titleSection">{props.title1}</h2>
      <div className="row">
        {arrayIntegrantes.map((index, key) => {
          console.log(index);
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
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {index.name}
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href={`${index.linkedin}`} target="_blank">
                      Linkedin
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
