import { useContext } from 'react';

//CONTEX
import { Contex } from '../../Components/Hooks/Contex/CreateContex';

//SASS
import '../../../Sass/Pages/1.0-Page_MainPage/Containers/4.0-SASS-Container_Blog.scss';

export const Container_Blog = () => {

    const { goToHomelibrary, terminal_font, heart_icon, vite_font_blog } = useContext( Contex );


    return (

        <div className = "CONTAINER_blog" > 

            <section className = "WRAPPER_blog"> 

                <figure className =" BOX_ONE container_Blog_figure_about_logo" >
                    <img src= { terminal_font } alt="terminal_font" /> 
                </figure>

                <div className = "BOX_TWO container_Blog_info_about_blog"> 
                    <h3> La Informática desde Cero: Todo lo que necesitas saber para empezar </h3>
                    <p>Exploraremos cómo esta ciencia automatiza tareas y mejora la eficiencia en múltiples áreas.</p>
                    <p className='BUTTON_read-more' onClick={ goToHomelibrary }> Leer mas... </p>
                </div>

                <div className ="BOX_THREE container_Blog_about_blog"> 
                    <figure className='heart_icon'> <img src= { heart_icon  } alt="" /> </figure>
                    <div> 2 </div>
                    <div> julio / 2024 </div>
                </div>

            </section>

            {/* <section className = "wrapper_blog"> 

                <figure className =" box_one figure_about_logo" >
                    <img src={ vite_font_blog } alt="img_about_logo" /> 
                </figure>

                <div className = "box_two info_about_blog"> 
                    <h3>Acerca de vite </h3>
                    <p>Vite pone fin a la frustración de la configuración compleja. Aprende cómo en nuestro blog! </p>

                    <p onClick={ goToHomelibrary }> Leer mas... </p>
                </div>

                <div className ="box_three about_blog"> 
                    <figure className='heart_icon'> <img src= { heart_icon  } alt="" /> </figure>
                    <div> 2 </div>
                    <div> julio / 2024 </div>
                </div>


            </section>  */}

            

            {/* <section className = "wrapper_blog">

                <figure className =" box_one figure_about_logo" >
                    <img src="" alt="img_about_logo" /> 
                </figure>

                <div className = "box_two info_about_blog"> 
                    <h3>tittle blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione!</p>
                    <p onClick={ goToHomelibrary }> Leer mas... </p>
                </div>

                <div className ="box_three about_blog"> 
                    <figure className='heart_icon'> <img src= { heart_icon  } alt="" /> </figure>
                    <div> 2 </div>
                    <div> julio / 2024 </div>
                </div>

            </section>  */}

            {/*  <section className = "wrapper_blog">
                
                <figure className =" box_one figure_about_logo" >
                    <img src="" alt="img_about_logo" /> 
                </figure>

                <div className = "box_two info_about_blog"> 
                    <h3>tittle blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione!</p>
                    <p onClick={ goToHomelibrary }> Leer mas... </p>
                </div>

                <div className ="box_three about_blog"> 
                    <figure className='heart_icon'> <img src= { heart_icon  } alt="" /> </figure>
                    <div> 2 </div>
                    <div> julio / 2024 </div>
                </div>

            </section>  */}
            
        </div>
    )
}