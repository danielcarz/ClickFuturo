
//COMPONENTS
import { Layout } from '../Components/Ui-Ux/index';

//SASS
import '../../Sass/Pages/2.0-BlogLibrary/2.1-BlogHome/2.1.1-Container_Blog_Home.scss';



export const Container_BlogHome = () => {


    return(

        <Layout>

            <div className="container_blogHome">
    
                <div className="blogHome_one">
    
                    <section className="blogHome_introductionBlog">
    
                        <h2>title blog</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, obcaecati labore ea molestiae nulla alias iure, consequatur maiores ut laboriosam adipisci harum, facilis doloribus consequuntur itaque dolorem velit deserunt ab.</p>
                    </section>
    
                    <section className="blogHome_aboutblog"> 
                        
                        <section className="aboutblog_indice"></section>
    
                        <figure className="aboutblog_author">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <img ></img>
                        </figure>

                    </section>
    
                </div>
    
                <div className="blogHome_two">
                    <h1>title blog</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, magnam.
                    </p>
                </div>
    
            </div>

        </Layout>
        )


}