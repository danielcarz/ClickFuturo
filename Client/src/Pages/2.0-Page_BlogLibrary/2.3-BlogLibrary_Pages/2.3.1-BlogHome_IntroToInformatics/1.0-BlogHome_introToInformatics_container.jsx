
 
//SASS


//blog home container
//import { BlogLibrary_BlogHome_Container } from '../2.3.1-SubPage-BlogHome/0.0-BlogHome.jsx';

//components of intro to informatics
import  { BlogHome_introToInformatics_presentation }  from './2.0-BlogHome_introToInformatics_presentations.jsx';
import { BlogHome_introToInformatics_comments } from './3.0-BlogHome_introToInformatics_comment.jsx';
import { BlogHome_introToInformatics_footer } from './4.0-BlogHome_introToInformatics_footer.jsx';
import { BlogHome_introToInformatics_blog } from './5.0-BlogHome_introToInformatics_blog.jsx';
import { BlogHome_introToInformatics_aboutProgrammer }  from './6.0-BlogHome_introToInformatics_aboutProgrammer.jsx';

export const BlogHome_introToInformatics_container = () => {


    return(
        
        <BlogLibrary_BlogHome_Container>

            <BlogHome_introToInformatics_presentation></BlogHome_introToInformatics_presentation>

            <BlogHome_introToInformatics_aboutProgrammer></BlogHome_introToInformatics_aboutProgrammer>

            <BlogHome_introToInformatics_blog></BlogHome_introToInformatics_blog>

            <BlogHome_introToInformatics_comments></BlogHome_introToInformatics_comments>

            <BlogHome_introToInformatics_footer></BlogHome_introToInformatics_footer>

        </BlogLibrary_BlogHome_Container>

         

       
         
 
 

        
    )
}