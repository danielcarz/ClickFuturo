
//components of blog library
import { Container_Grid_Blogs, Container_Text_Blogs } from '../2.0-Page_BlogLibrary/Containers/index';

//layout
import { Layout, Navbar } from '../Components/Ui-Ux/index';

export const BlogLibrary = () => {


    return (

        <Layout>

            <Navbar></Navbar> 
            <Container_Grid_Blogs></Container_Grid_Blogs>
            <Container_Text_Blogs></Container_Text_Blogs>
            
        </Layout>
    )
} 