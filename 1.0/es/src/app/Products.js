import React from 'react';

const Products = props => {
    return (
        <div id={props.id} className={`section ${props.classCustom}`}>
            <div className="row">
                <div className="col l6 s12">
                    <h1 className="titleSection">{props.title1}</h1>
                    <p className="paragraph1">{props.text1}</p>
                </div>
            </div>
        </div>

    )
}

export default Products;