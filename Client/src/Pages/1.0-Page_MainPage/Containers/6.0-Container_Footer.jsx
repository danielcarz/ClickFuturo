import React, {useContext} from 'react';

//CONSTEX
import { Contex } from '../../Components/Hooks/Contex/CreateContex';


//import { instagram_icon,  } from '../../../Pages/Components/Hooks/Contex/ProviderContex';
//SASS
import '../../../Sass/Pages/1.0-Page_MainPage/Containers/6.0-SASS-Container_Footer.scss';

export const Container_Footer = () => {

    const { instagram_icon,  gitHub_icon, linkedin_icon   } = useContext( Contex );


    return (

        <div className = "container_Footer" >

            <div className = "wrapper_footer_one">

                <section className = "box_one"> 
                    <h4> Click futuro </h4>
                    <p className='lema'> tu guia sobre programacion y tecnologia</p> 
                </section>

                <section className = "box_two"> 

                    <h3>Para consultas adicionales, encuéntranos también en:</h3>

                    <figure className='social-icons'>   
                        <img src= { instagram_icon } alt="" />
                        <img src= { gitHub_icon } alt="" />
                        <img src= { linkedin_icon } alt="" />
                    </figure>
                </section>
                
            </div> 

            <div className = "wrapper_footer_two">
                <section className = "box_three">
                    <hr></hr> 
                    <h6>Copy right</h6>
                </section>
            </div>

        </div>
    )
}