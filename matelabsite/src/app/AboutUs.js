import React from 'react';
const arrayImg = ['java', 'react', 'ionic', 'android', 'python', 'wordpress']

const AboutUs = props => {
    return (
        <div id={props.id} className={`section ${props.classCustom}`}>
            <h2 className="titleSection">{props.title1}</h2>
            <div className="row">
              <div className="col s12 m12">
                <p className="paragraph1">{props.text1}</p>
              </div>
              <div className="row">
              
                {
                  arrayImg.map(index => {
                      return(
                        <div className="col s2">           
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                <img
                                    src={`../nosotros.png`}
                                    className="imgAboutUs"
                                    alt="Mate Lab"
                                    width="50"
                                    height="50"
                                />
                                </div>
                                <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                                </div>
                                <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i>Card Title</span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                      )
                  })
                }
              
              </div>
            </div>
        </div>

    )
}

export default AboutUs;