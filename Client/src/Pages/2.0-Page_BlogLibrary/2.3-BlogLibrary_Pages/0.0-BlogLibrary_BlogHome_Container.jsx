
//COMPONENTS
import { Layout } from '../../../Pages/Components/Ui-Ux/index';

//SASS
//import '../../Sass/Pages/2.0-BlogLibrary/2.1-BlogHome/2.1.1-Container_Blog_Home.scss';



export const BlogLibrary_BlogHome_Container = ( { children } ) => {


    return(

        <Layout> 
 
            <section className="container_blogHome">
    
                { children }
    
            </section>

        </Layout>
        )


}