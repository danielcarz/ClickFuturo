import React, { useContext} from 'react';

//contex
import { Contex } from '../../Components/Hooks/Contex/CreateContex';

//SASS
import '../../../Sass/Pages/1.0-Page_MainPage/Containers/5.0-SASS-Container_advertisements.scss';

//components
import { ButtonAccess } from '../../Components/Ui-Ux/Button_access'; 


export const Container_Adevertisements = () => {

    const { advertisemnt_font } = useContext( Contex );

    return(


       <figure className='CONTAINER_adversiment'>

            <img src = "" alt="font_adversiment" />

           
       </figure>
 

            


    )
}