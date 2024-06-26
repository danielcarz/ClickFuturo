import { useContext } from 'react';

//CONTEXT
import { Contex } from '../Components/Hooks/Contex/CreateContex';

//imports containers
import {
    Container_Presentation, 
    Container_Menu, 
    Container_Blog,
    Container_Adevertisements, 
    Container_Footer } from './Containers/index';

//import UI/UX containers
import { Layout, Navbar } from '../Components/Ui-Ux';



export const  MainPage = () => {

    const { testContext } = useContext( Contex );

    console.log( testContext );

    return(

        <Layout>

            <>  
                <Navbar></Navbar>
                <Container_Presentation></Container_Presentation>
                <Container_Menu></Container_Menu>
                <Container_Blog></Container_Blog>
                <Container_Adevertisements></Container_Adevertisements>
                <Container_Footer></Container_Footer>
            </>


        </Layout>
        
    )
}
