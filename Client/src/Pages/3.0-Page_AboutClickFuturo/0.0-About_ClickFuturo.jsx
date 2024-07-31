import React, { useContext } from "react"

//CONTEX
import { Contex } from "../Components/Hooks/Contex/CreateContex"

//COMPONENTS
import { Navbar, Layout } from "../Components/Ui-Ux";

//STYLES
import '../../Sass/Pages/3.0-AboutClickFuturo/3.1-AboutClickFuturo.scss';


export const About_ClickFuturo =() => {

  

    return(

        <Layout>

     
        
            <Navbar></Navbar>
            <section className="container_about_click_futuro"> texto acerca de click futuro </section>

        </Layout>   


    )
}