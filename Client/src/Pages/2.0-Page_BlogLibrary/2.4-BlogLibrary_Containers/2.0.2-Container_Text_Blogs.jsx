import React,  { useContext } from 'react';

//CONTEX
import { Contex } from '../../Components/Hooks/Contex/CreateContex';

//SASS
import '../../../Sass/Pages/2.0-BlogLibrary/Containers/2.0-SASS-Container_Text_Blog.scss';

export const Container_Text_Blogs = () => {

    const { goToAboutTerminal } =  useContext ( Contex );

    return(

        <div className="container_text-blog">

            <section className="wrapper_one wrapper_text-blog" onClick={ goToAboutTerminal } >

                <figure className="box_one-image-blog">
                    <img src="" alt="image-blog" />
                </figure>
  
                <section className="box_two-about-blog">
                    <h3>ACERCA DE LA TERMINAL</h3>
                    <p> BREVE INTRODUCCION SOBRE LA TERMINAL</p>
                </section>

            </section>

            <section className="wrapper_two wrapper_text-blog">
                <figure className="box_one-image-blog">
                    <img src="" alt="image-blog" />
                </figure>

                <section className="box_two-about-blog">
                    <h3>title about blog</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </section>

            </section>

            <section className="wrapper_three wrapper_text-blog">
                <figure className="box_one-image-blog">
                    <img src="" alt="image-blog" />
                </figure>

                <section className="box_two-about-blog">
                    <h3>title about blog</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </section>

            </section>


            

        </div>
       

       
    )
}