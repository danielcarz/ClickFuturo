
 
//SASS


//blog home container
import { BlogHome_Container } from '../0.0-BlogHome.jsx';

//components of intro to informatics
import BlogHome_introToInformatics_presentation  from './2.0-BlogHome_introToInformatics_presentations';
import BlogHome_introToInformatics_comments  from './3.0-BlogHome_introToInformatics_comment';
import BlogHome_introToInformatics_footer from './4.0-BlogHome_introToInformatics_footer';
import BlogHome_introToInformatics_blog from './5.0-BlogHome_introToInformatics_blog';
import BlogHome_introToInformatics_aboutProgrammer  from './6.0-BlogHome_introToInformatics_aboutProgrammer';

export const BlogHome_introToInformatics_container = () => {


    return(
        
        <BlogHome_Container>

            <BlogHome_introToInformatics_presentation></BlogHome_introToInformatics_presentation>

            <BlogHome_introToInformatics_aboutProgrammer></BlogHome_introToInformatics_aboutProgrammer>

            <BlogHome_introToInformatics_blog></BlogHome_introToInformatics_blog>

            <BlogHome_introToInformatics_comments></BlogHome_introToInformatics_comments>

            <BlogHome_introToInformatics_footer></BlogHome_introToInformatics_footer>

        </BlogHome_Container>

         

       
         
 
 

        
    )
}