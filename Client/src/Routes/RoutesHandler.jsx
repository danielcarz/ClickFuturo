//REACT ROUTES
import { Routes, Route } from "react-router-dom";

//CONTEX
import { ContexProvider } from '../Pages/Components/Hooks/Contex/ProviderContex.jsx';

//ROUTES of click futuro
import { MainPage, BlogLibrary } from '../Pages/index.js';

//SUBROUTES
import { BlogLibrary_SubRoutesHandler } from '../Pages/2.0-Page_BlogLibrary/2.2-BlogLibrary_Routes/0.0-BlogLibrary_SubRoutesHandler.jsx';




export const RoutesHandler = () => {


    return(

        <ContexProvider>

            <Routes>

                <Route path="/" element = { <MainPage></MainPage> }></Route>
                <Route path="/bloglibrary" element = { <BlogLibrary></BlogLibrary> }></Route>
                <Route path="/bloglibrary/*" element = { <BlogLibrary_SubRoutesHandler></BlogLibrary_SubRoutesHandler>}></Route> 

            </Routes>

        </ContexProvider>
    )
}