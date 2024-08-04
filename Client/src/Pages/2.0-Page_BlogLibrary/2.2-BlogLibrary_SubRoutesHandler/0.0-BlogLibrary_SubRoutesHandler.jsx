//REACT ROUTES
import { Routes, Route } from "react-router-dom";

//BLOG LIBRARY subRoutes
import { BlogHome_introToInformatics_container  } from '../2.3-BlogLibrary_Pages/2.3.1-BlogHome_IntroToInformatics/index';

export const BlogLibrary_SubRoutesHandler = () => {


    return(

        <Routes>

            <Route path="bloghome/introduction_to_informatics" element = { <BlogHome_introToInformatics_container> </BlogHome_introToInformatics_container> }> </Route>
            

        </Routes> 
    ) 
} 