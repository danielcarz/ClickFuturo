//import React from 'react';
//import { Link, NavLink, useNavigate } from 'react-router-dom';



//styles
import '../../../Sass/UI-Ux/Navbar.scss';

export const Navbar = () => {
 
   //const { linkedinImage, gitHubImage, cvImage, curriculumVitae,  dIcon, cIcon, lightDark, isTrue, setIsTrue, toggle,  t, i18n,  isSpanish, setIsSpanish, toggleLanguage,  esIcon,   enIcon } = useContext( Contex );

   /*  const changeColorInterface = () => {
        toggle();  
    }; 

    const changeLanguage = () => {

        toggleLanguage();

        if ( isSpanish ) {
            i18n.changeLanguage("en"); 
        } else {
            
            i18n.changeLanguage("es"); 
        }
    }; */
 
    return ( 
        <nav className='navbar' >

           <figure className='wrapper_logo'>

                <img src="" alt="logo" />

           </figure>

           <section className='wrapper_info'>

                <ul className='box_info'>

                    <li className = "about_clic_futuro" >Aerca de clic futuro</li>
                    <li>Blog informatico</li>

                    <figure className='box_info-media'>

                        <img src="" alt="instagram" />
                        <img src="" alt="git hub" />

                    </figure>
                </ul>

                <div className='box_language'>
                    <div>selecionar idioma</div>
                </div>


           </section>
 
        
     
        </nav>
    )
}