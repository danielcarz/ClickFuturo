//Component Container
import { BlogLibrary_BlogHome_Container } from '../0.0-BlogLibrary_BlogHome_Container.jsx';

//components of intro to informatics
import { BlogHome_introToInformatics_font}  from './2.0-BlogHome_introToInformatics_Font.jsx';
import { BlogHome_introToInformatics_blog } from './3.0-BlogHome_introToInformatics_blogt.jsx';
import { BlogHome_introToInformatics_footer } from './4.0-BlogHome_introToInformatics_footer.jsx'; 
import { BlogHome_introToInformatics_comments } from './5.0-BlogHome_introToInformatics_comments.jsx';
import { BlogHome_introToInformatics_aboutProgrammer }  from './6.0-BlogHome_introToInformatics_aboutProgrammer.jsx';
import { BlogHome_introToInformatics_Navbar } from './7.0-BlogHome_introToInformatics_navbar.jsx';

//SASS
import '../../../../Sass/Pages/2.0-SASS_BlogLibrary_Pages/2.1-SASS_BlogHome/1.0-SASS_BlogHome_Container.scss';



export const BlogHome_introToInformatics_container = () => {

  
    return( 
         
        <BlogLibrary_BlogHome_Container>

            <section className='componentContainer_introToinformatic' > 

                <BlogHome_introToInformatics_Navbar></BlogHome_introToInformatics_Navbar>

            </section>

            <section className='componentContainer_introToinformatic'>

                <BlogHome_introToInformatics_font></BlogHome_introToInformatics_font>
           
            </section>

            <section className='componentContainer_introToinformatic'>

                <BlogHome_introToInformatics_aboutProgrammer></BlogHome_introToInformatics_aboutProgrammer>

            </section>

            <section className='componentContainer_introToinformatic'>

                <BlogHome_introToInformatics_blog></BlogHome_introToInformatics_blog> 

            </section>

            <section className='componentContainer_introToinformatic'>

                <BlogHome_introToInformatics_comments></BlogHome_introToInformatics_comments>

            </section>

            <section className='componentContainer_introToinformatic'>

                <BlogHome_introToInformatics_footer></BlogHome_introToInformatics_footer>

            </section>

          

        </BlogLibrary_BlogHome_Container>

         


         

       
         
 
 

        
    )
}