//REACT ROUTES
import { Routes, Route } from "react-router-dom";

//CONTEX
import { ContexProvider } from '../Pages/Components/Hooks/Contex/ProviderContex.jsx';

//ROUTES of click futuro
import { MainPage, BlogLibrary } from '../Pages/index.js';




export const RoutesHandler = () => {


    return(

        <ContexProvider>

            <Routes>

                <Route path="/" element = { <MainPage></MainPage> }></Route>
                <Route path="/bloglibrary" element = { <BlogLibrary></BlogLibrary> }></Route>

            </Routes>

        </ContexProvider>
    )
}