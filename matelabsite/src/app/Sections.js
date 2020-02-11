import React from 'react';

const Sections = props => {
    return (
        <div className={`section ${props.classCustom}`}>
            <h1>{props.title1}</h1>
        </div>

    )
}

export default Sections;