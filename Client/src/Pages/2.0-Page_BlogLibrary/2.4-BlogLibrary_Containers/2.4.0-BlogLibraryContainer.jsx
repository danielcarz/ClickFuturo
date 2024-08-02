
//components of blog library
//import { Container_Grid_Blogs, Container_Text_Blogs } from './index';

//blog library container
import { Layout } from '../../Components/Ui-Ux';
import { BlogLibrary_navbar } from './2.4.1-BlogLibrary_navbar';
import {  BlogLibrary_Container_Grid_Blogs } from './2.4.2-BlogLibrary_Container_Grid_Blogs';
import { BlogLibrary_Container_Text_Blogs } from './2.4.3-BlogLibrary_Container_Text_Blogs'

export const BlogLibrary = () => {


    return (

        <Layout>
        
            <BlogLibrary_navbar></BlogLibrary_navbar>

            <BlogLibrary_Container_Grid_Blogs></BlogLibrary_Container_Grid_Blogs>

            <BlogLibrary_Container_Text_Blogs></BlogLibrary_Container_Text_Blogs>
            
        </Layout>
    )
} 