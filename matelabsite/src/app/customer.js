import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const arrayImg = ['accusys', 'ag', 'algeiba', 'caba', 'editorialperfil', 
'elcronista', 'fivepro', 'garbarino','healthy','imprimoya', 'aysa', 'obras', 'Smartledge', 'trialcom']
const style = {
    width: '190px',
    height: '190px',
    margin: '0 auto'
};
const Customer = props => {
    return (
        <div id={props.id} className={`section ${props.classCustom}`}>
            <h2 className="titleSection">{props.title1}</h2>
            <OwlCarousel
                className="owl-theme"
                loop={true}
                margin={20}
                stoponhover="true"
                autoplayHoverPause={true}
                nav={false}
                dots={false}
                autoplay={true}
                slidetransition= 'linear'
                autoplayTimeout={10000}
                autoplaySpeed={5000}
                responsive={
                    {
                        item:1
                    },
                    {
                        item:2
                    },
                    {
                        item:3
                    }
                }
            >
                {

                arrayImg.map((index, key) =>{
                    return(
                        <div key={`${key}`} className="item">
                            <div style={style}>
                                <img
                                src={`../logosClientes/${index}.png`}
                                className="logosLenguaje"
                                alt="Mate Lab"
                                width="190"
                                height="190"
                                />
                            </div>  
                        </div>
                    )
                   
                })
                          
                }
            </OwlCarousel>
        </div>

    )
}

export default Customer;