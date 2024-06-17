//REACT ROUTES
import { Routes, Route } from "react-router-dom";

//ROUTES of click futuro
import { MainPage, BlogLibrary } from '../Pages/index.js';




export const RoutesHandler = () => {


    return(

        <Routes>

            <Route path="/" element = { <MainPage></MainPage> }></Route>
            <Route path="/bloglibrary" element = { <BlogLibrary></BlogLibrary> }></Route>

        </Routes>

    )
}