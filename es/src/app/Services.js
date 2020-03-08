import React from "react";
const arrayImg = [
  "html5.png",
  "css3.png",
  "js.png",
  "react.svg",
  "vuejs.svg",
  "typescript.svg",
  "angular.svg",
  "nodejs.svg",
  "java.svg",
  "ionic.svg",
  "android.svg",
  "ios.svg",
  "xamarin.svg",
  "php.png",
  "wordpress.svg",
  "aws.svg",
  "azure.svg",
  "c.svg",
  "c++.svg",
  "csharp.svg",
  "objectivec.svg",
  "net.svg",
  "python.svg",
  "MS-SQL.png",
  "mysql.png",
  "mongo.png",
  "linux.png",
  "windows-server.png",
  "apache.png",
  "tomcat.png",
  "docker.svg",
  "kubernetes.svg",
  "vmware.svg"
];

const Services = props => {
  return (
    <div id={props.id} className={`section ${props.classCustom}`}>
      <h2 className="titleSection">{props.title1}</h2>
      <div className="row">
        <div className="col l6 s12">
          <p className="paragraph1">{props.text1}</p>
          <p className="paragraph1">{props.text2}</p>
        </div>
        <div className="col l6 s12">
          {arrayImg.map((index, key) => {
            return (
              <img
                key={`${key}`}
                src={`../es/logos/${index}`}
                className="logosLenguaje"
                alt={`${index}`}
                width="75"
                height="75"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
