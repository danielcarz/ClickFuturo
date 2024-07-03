import React, { useContext } from 'react';

//CONTEX
import { Contex } from '../../Components/Hooks/Contex/CreateContex';

//SASS
import '../../../Sass/Pages/1.0-Page_MainPage/Containers/4.0-SASS-Container_Blog.scss';

export const Container_Blog = () => {

    const { goToAboutTerminal } = useContext ( Contex );

    return (

        <div className = "container_blog" >

            <section className = "wrapper_blog"> 

                <figure className =" box_one figure_about_logo" >
                    <img src="" alt="img_about_logo" /> 
                </figure>

                <div className = "box_two info_about_blog"> 
                    <h3>ACERCA DE LA TERMINAL</h3>
                    <p>BREVE INTRODUCCION SOBRE LA TERMIANL</p>
                    <p onClick={ goToAboutTerminal } > Leer mas...</p>
                </div>

                <div className ="box_three about_blog"> 
                    <div> 1 </div>
                    <div> 2 </div>
                    <div> 3 </div>
                </div>

            </section>

            <section className = "wrapper_blog"> 

                <figure className =" box_one figure_about_logo" >
                    <img src="" alt="img_about_logo" /> 
                </figure>

                <div className = "box_two info_about_blog"> 
                    <h3>tittle blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione!</p>
                </div>

                <div className ="box_three about_blog"> 
                    <div> 1 </div>
                    <div> 2 </div>
                    <div> 3 </div>
                </div>


            </section>

            

            <section className = "wrapper_blog">

                <figure className =" box_one figure_about_logo" >
                    <img src="" alt="img_about_logo" /> 
                </figure>

                <div className = "box_two info_about_blog"> 
                    <h3>tittle blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione!</p>
                </div>

                <div className ="box_three about_blog"> 
                    <div> 1 </div>
                    <div> 2 </div>
                    <div> 3 </div>
                </div>

            </section>

            <section className = "wrapper_blog">
                
                <figure className =" box_one figure_about_logo" >
                    <img src="" alt="img_about_logo" /> 
                </figure>

                <div className = "box_two info_about_blog"> 
                    <h3>tittle blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione!</p>
                </div>

                <div className ="box_three about_blog"> 
                    <div> 1 </div>
                    <div> 2 </div>
                    <div> 3 </div>
                </div>

            </section>
            
        </div>
    )
}