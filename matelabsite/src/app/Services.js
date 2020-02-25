import React from 'react';
const arrayImg = ['java', 'react', 'ionic', 'android', 
'aws', 'c++', 'ios','net','nodejs', 'objectivec', 'python', 'wordpress']

const Services = props => {
    return (
        <div id={props.id} className={`section ${props.classCustom}`}>
            <h2 className="titleSection">{props.title1}</h2>
            <div className="row">
              <div className="col s6">
                <p className="paragraph1">{props.text1}</p>
              </div>
              <div className="col s6">
              
                {
                  arrayImg.map((index, key) => {
                      return(
                        
                        <img key={`${key}`}
                          src={`../logos/${index}.svg`}
                          className="logosLenguaje"
                          alt="Mate Lab"
                          width="80"
                          height="81"
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