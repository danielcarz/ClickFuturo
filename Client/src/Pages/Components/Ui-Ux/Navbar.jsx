import React, { useContext } from 'react';
//import { Link, NavLink, useNavigate } from 'react-router-dom';

//CONTEXT
import { Contex } from '../Hooks/Contex/CreateContex';

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

    const { toggle, isTrue, goToBlogLibrary } = useContext( Contex ); 

    const displayingLanguageOptions = () => {

        toggle();

    }
 
    return ( 
        <nav className='navbar' >

           <figure className='wrapper_logo'>

                <img src="" alt="logo" />

           </figure>

           <section className='wrapper_info'>
 
                <ul className='box_info'>

                    <li className = "about_clic_futuro" >Aerca de clic futuro</li>
                    <li onClick={ goToBlogLibrary }>Blog informatico</li>

                    <figure className='box_info-media'>

                        <img src="" alt="instagram" />
                        <img src="" alt="git hub" />

                    </figure>
                </ul>

                <div className='box_language'>

                   <button onClick={ displayingLanguageOptions }> Cambiar idioma

                     { isTrue && (
                        
                        <div className='dropdown-menu' >
                            <div className="dropdown-item">Option 1</div>
                            <div className="dropdown-item">Option 2</div>
                            <div className="dropdown-item">Option 3</div>
                        </div>
                     ) }
                   </button>
                </div>


           </section>
 
        
     
        </nav>
    )
}