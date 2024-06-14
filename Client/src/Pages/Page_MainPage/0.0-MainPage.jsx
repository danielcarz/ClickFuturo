//imports containers

import { 
    Container_Presentation, 
    Container_Menu, 
    Container_Blog,
    Container_Adevertisements, 
    Container_Footer } from './Containers/index'

export const  MainPage = () => {


    return(

        <div>
            <Container_Presentation></Container_Presentation>
            <Container_Menu></Container_Menu>
            <Container_Blog></Container_Blog>
            <Container_Adevertisements></Container_Adevertisements>
            <Container_Footer></Container_Footer>
        </div>
    )
}
