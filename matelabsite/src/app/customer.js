import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const arrayImg = ['healthy', 'react', 'ionic', 'android', 'angular', 
'aws', 'c++', 'ios','net','nodejs', 'objectivec', 'python', 'wordpress']
const style = {
    background: '../logosClientes/healthy.png',
    paddingLeft: 0,
    listStyle: 'none'
  };


const Customer = props => {
    return (
        <div className={`section ${props.classCustom}`}>
            <OwlCarousel
                className="owl-theme"
                loop
                margin={3}
                nav
            >
               
                        <div class="item">
                           <div style={style}>
                            <h4>1</h4>
                           </div>
                            
                        </div>
                        <div class="item">
                           <div style={style}>
                            <h4>2</h4>
                           </div>
                            
                        </div>
                        <div class="item">
                           <div style={style}>
                            <h4>2</h4>
                           </div>
                            
                        </div>
                        <div class="item">
                           <div style={style}>
                            <h4>2</h4>
                           </div>
                            
                        </div>
                    
               
            </OwlCarousel>
        </div>

    )
}

export default Customer;