import React, { useContext } from 'react';

import { Contex } from '../../Components/Hooks/Contex/CreateContex.jsx';

//UI-UX COMPONENTS
import { ButtonAccess } from '../../Components/Ui-Ux/index.js';

//SASS
import '../../../Sass/Pages/1.0-Page_MainPage/Containers/3.0-SASS-Container_Menu.scss';

export const  Container_Menu = () => {

    const { terminal_icon, vite_icon } = useContext( Contex );

    return(
 
        <div className ="container_menu">

            <div className = "box box-one_menu_one"> 
                <ButtonAccess  className= "access_content"> <figure className='blog_icon' > <img src= { terminal_icon } alt="logo_terminal" /> </figure> <h5>Acerca de la terminal</h5> </ButtonAccess>
                <ButtonAccess className= "access_content">  <figure className='blog_icon'> <img src="" alt="logo_terminal" /> </figure> </ButtonAccess> 
               
            
            </div>

            <div className = "box box-two_menu_two"> 
                <ButtonAccess className= "access_content">  <figure className='blog_icon'> <img src= { vite_icon } alt="logo_terminal" /> </figure> <h5>Acerca de vite</h5> </ButtonAccess> 
                <ButtonAccess className= "access_content">  <figure className='blog_icon'> <img src="" alt="logo_terminal" /> </figure> </ButtonAccess> 
            
            </div>

            <div className = "box box-three_menu_three"> 
                <ButtonAccess className= "access_content">  <figure className='blog_icon'> <img src="" alt="logo_terminal" /> </figure> </ButtonAccess>
                <ButtonAccess className= "access_content">  <figure className='blog_icon'> <img src="" alt="logo_terminal" /> </figure> </ButtonAccess> 
            
            </div>

        </div>
    )
}