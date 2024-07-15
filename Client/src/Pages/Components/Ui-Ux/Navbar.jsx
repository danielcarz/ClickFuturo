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
            blog_incon,

            clickFuturo_logo,
            worldLanguage_icon } = useContext( Contex ); 

    const displayingLanguageOptions = () => {

        toggle();

    }
 
    return ( 
        <nav className='navbar' >

        <div className='navbar_tablets_desktop'>

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

        </div>
    

        <div className='navbar_phone'>

            <div className='box-about_clickfuturo' >

                <figure className='wrapper_logo'> 

                    <img src= { clickFuturo_logo }  alt="logo" />

                </figure>

                <section className='wrapper_name' >
                    <h1> Click Futuro </h1>
                    <h3 className='main-message'>tu guia sobre tecnologia y programacion</h3>
                </section>


            </div>

            <div className='box-clickfuturo-icons'>
                
                    
                    <figure className='box navbar-icons'>
                        <img src= { clickFuturo_logo } alt="" />
                        <h6>acerca de click futuro</h6>
                    </figure>

                    <figure className='box navbar-icons'>
                        <img src= { blog_incon } alt="" />
                        <h6>Blog informatico</h6>
                    </figure>

                    <figure className='box navbar-icons'>
                        <img src= { clickFuturo_logo } alt="" />
                        <h6>acerca de click futuro</h6>
                    </figure>
                    
                    
               
            </div>
            
        
        </div>

                

    </nav>
    )
}