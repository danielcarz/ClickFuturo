import React, { useContext } from 'react';

//CONTEXT
import { Contex } from '../../Components/Hooks/Contex/CreateContex.jsx';

//SASS
import '../../../Sass/Pages/1.0-Page_MainPage/Containers/2.0-SASS-Container_Presentation.scss'


//ui ux compoenents
import { ButtonAccess } from '../../Components/Ui-Ux/index.js';


export const Container_Presentation = () => {

    const { portada } = useContext ( Contex );

    return(

        <div className = "container_presentation">
            
            <figure className = "wrapper_presentation">

                <img src= { portada } alt="" />

               

            </figure>

        </div>
    )
}   