//REACT ROUTES
import { Routes, Route } from "react-router-dom";

//blogs
import { Blog_about_terminal } from '../../2.1-Page_BlogHome/2.1.1-About_Blogs/index';

export const BlogRoutes = () => {


    return(

        <Routes>
            <Route path="/bloglibrary/bloghome/aboutterminal" element = { <Blog_about_terminal></Blog_about_terminal> }></Route>
        </Routes>
    )
}