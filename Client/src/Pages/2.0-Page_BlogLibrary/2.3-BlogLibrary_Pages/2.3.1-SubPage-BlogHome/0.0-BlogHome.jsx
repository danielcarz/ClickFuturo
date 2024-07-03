
//COMPONENTS
import { Layout } from '../../../Components/Ui-Ux/Layout';

//SASS
//import '../../Sass/Pages/2.0-BlogLibrary/2.1-BlogHome/2.1.1-Container_Blog_Home.scss';



export const BlogHome_Container = ( { children } ) => {


    return(

        <Layout> 
 
            <div className="container_blogHome">
    
                { children }
    
            </div>

        </Layout>
        )


}