import React from 'react';

const Sections = props => {
    return (
        <div className={`section ${props.classCustom}`}>
            <h1>{props.title1}</h1>
            <p className="paragraph1">{props.text1}</p>
        </div>

    )
}

export default Sections;