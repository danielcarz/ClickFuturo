import React, { useContext } from 'react';
//import { Link, NavLink, useNavigate } from 'react-router-dom';

//CONTEXT
import { Contex } from '../Hooks/Contex/CreateContex';

//styles
import '../../../Sass/UI-Ux/Navbar.scss';

//ui/ux COMPONENTS
import { ButtonAccess } from '../Ui-Ux/Button_access';

export const Navbar = () => {
 

    const { 
            toggle,
            isTrue,

            //REDIRECTIONS
            goToBlogLibrary,
            goToAboutClickfuturo,

            //IMAGES
            instagram_icon,
            gitHub_icon,
            clickFuturo_logo,
            worldLanguage_icon } = useContext( Contex ); 

    const displayingLanguageOptions = () => {

        toggle();

    }
 
    return ( 
        <nav className='navbar' >

           <figure className='wrapper_logo'>

                <img src= { clickFuturo_logo }  alt="logo" />

           </figure>

           <section className='wrapper_info'>
 
                <ul className='box_info'>

                    <li  onClick={ goToAboutClickfuturo } className = "about_clic_futuro" >Aerca de clic futuro</li>
                    <li onClick={ goToBlogLibrary }>Blog informatico</li>

                    <figure className='box_info-media'>

                        <img src= { instagram_icon } alt="instagram" />
                        <img src = { gitHub_icon } alt="git hub" />

                    </figure>
                </ul>

                <div className='box_language'>

                   <ButtonAccess onClick={ displayingLanguageOptions } className= "changeLanguage_button"> 

                        <figure className='buttonaccess_box_worldlanguage' >
                            
                            <img   src= { worldLanguage_icon } alt="" />
                            
                        </figure>    

                        Cambiar idioma

                        { isTrue && (
                            
                            <div className='dropdown-menu' >
                                <div className="dropdown-item">English</div>
                                <div className="dropdown-item">Español</div>
                                
                            </div>
                        ) }
                   </ButtonAccess>

                </div>


           </section>
 
        
     
        </nav>
    )
}