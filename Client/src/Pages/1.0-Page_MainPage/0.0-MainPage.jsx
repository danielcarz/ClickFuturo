//imports containers

import { 
    Container_Presentation, 
    Container_Menu, 
    Container_Blog,
    Container_Adevertisements, 
    Container_Footer } from './Containers/index'

//import UI/UX containers
import { Layout, Navbar } from '../Components/Ui-Ux'

export const  MainPage = () => {


    return(

        <Layout>

            <>  
                <Navbar> navbar Components </Navbar>
                <Container_Presentation></Container_Presentation>
                <Container_Menu></Container_Menu>
                <Container_Blog></Container_Blog>
                <Container_Adevertisements></Container_Adevertisements>
                <Container_Footer></Container_Footer>
            </>


        </Layout>
        
    )
}
