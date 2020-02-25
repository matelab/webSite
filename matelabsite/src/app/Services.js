import React from 'react';
const arrayImg = ['html5.png', 'css3.png', 'js.png', 'java.svg', 'react.svg', 'ionic.svg', 'android.svg', 'php.png',
'aws.svg', 'c++.svg', 'ios.svg','net.svg','nodejs.svg', 'objectivec.svg', 'python.svg', 'wordpress.svg',
'MS-SQL.png', 'mysql.png', 'mongo.png', 'linux.png', 'windows-server.png', 'apache.png', 'tomcat.png']

const Services = props => {
    return (
        <div id={props.id} className={`section ${props.classCustom}`}>
            <h2 className="titleSection">{props.title1}</h2>
            <div className="row">
              <div className="col l6 s12">
                <p className="paragraph1">{props.text1}</p>
              </div>
              <div className="col l6 s12">
              
                {
                  arrayImg.map((index, key) => {
                      return(
                        
                        <img key={`${key}`}
                          src={`../logos/${index}`}
                          className="logosLenguaje"
                          alt={`${index}`}
                          width="75"
                          height="75"
                        />
                      )
                  })
                }
              
              </div>
            </div>
        </div>

    )
}

export default Services;