import React, {useContext} from 'react';

//CONSTEX
import { Contex } from '../../Components/Hooks/Contex/CreateContex';


//import { instagram_icon,  } from '../../../Pages/Components/Hooks/Contex/ProviderContex';
//SASS
import '../../../Sass/Pages/1.0-Page_MainPage/Containers/6.0-SASS-Container_Footer.scss';

export const Container_Footer = () => {

    const { instagram_icon } = useContext( Contex );


    return (

        <div className = "container_Footer" >

            <div className = "wrapper_footer_one">

                <section className = "box_one"> 
                    <h4> Click futuro </h4>
                    <p className='lema'> tu guia sobre programacion y tecnologia</p> 
                </section>

                <section className = "box_two"> 

                    <figure className='social-icons'>   
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
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