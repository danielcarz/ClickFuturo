import { useContext } from 'react';

//CONTEX
import { Contex } from '../../Components/Hooks/Contex/CreateContex';

//SASS
import '../../../Sass/Pages/1.0-Page_MainPage/Containers/4.0-SASS-Container_Blog.scss';

export const Container_Blog = () => {

    const { goToHomelibrary, terminal_font } = useContext( Contex );


    return (

        <div className = "container_blog" >

            <section className = "wrapper_blog"> 

                <figure className =" box_one figure_about_logo" >
                    <img src= { terminal_font } alt="img_about_logo" /> 
                </figure>

                <div className = "box_two info_about_blog"> 
                    <h3>tittle blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione!</p>
                    <p onClick={ goToHomelibrary }> Leer mas... </p>
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

                    <p onClick={ goToHomelibrary }> Leer mas... </p>
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
                    <p onClick={ goToHomelibrary }> Leer mas... </p>
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
                    <p onClick={ goToHomelibrary }> Leer mas... </p>
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