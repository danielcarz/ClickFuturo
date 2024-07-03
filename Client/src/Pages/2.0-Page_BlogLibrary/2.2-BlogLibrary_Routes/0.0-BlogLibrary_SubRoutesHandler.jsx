//REACT ROUTES
import { Routes, Route } from "react-router-dom";

//BLOG LIBRARY subRoutes
import { Blog_Aboutterminal  } from '../2.3-BlogLibrary_Pages/2.3.1-SubPage-BlogHome/2.3.1.1-BlogHome_AboutTerminal/1.0-BlogHome_AboutTerminal';

export const BlogLibrary_SubRoutesHandler = () => {


    return(

        <Routes>

            <Route path="bloghome/aboutterminal" element = { <Blog_Aboutterminal></Blog_Aboutterminal>}></Route>

        </Routes>
    )
} 