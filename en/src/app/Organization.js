import React from 'react';

const Organization = props => {
    return (
        <div id={props.id} className={`section ${props.classCustom}`}>
            <h2 className="titleSection">{props.title1}</h2>
            <div className="row">
              <div className="col s12">
                <p className="paragraph1">{props.text1}</p>
                <p className="paragraph1">{props.text2}</p>
                <p className="paragraph1">{props.text3}</p>
              </div>
            </div>
        </div>

    )
}

export default Organization;