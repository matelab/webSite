import React from 'react';

const Sections = props => {
    return (
        <div id={props.id} className={`section ${props.classCustom}`}>
            <div className="introBox">
                <div className="row">
                    <div className="col s6">
                        <h1 className="titleSectionIntro">{props.title1}</h1>
                        <p className="paragraph1">{props.text1}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sections;