import { Contex } from "./CreateContex";

//HOOKS AND CUSTOM HOOKS
import { useBoolean, useNavigateHandler } from '../index';

//IMAGES
import { useImageCollection } from '../index'


export const ContexProvider = ( { children } ) => {

    const testContext = "text context";

    //use boolean hook
    const { toggle, isTrue } = useBoolean();
    
    //use navigate hook
    const { goToBlogLibrary, goToHomelibrary, goToAboutTerminal, goToAboutClickfuturo } = useNavigateHandler();

    //use image collection
    const { clickFuturo_logo, worldLanguage_icon, instagram_icon, gitHub_icon, terminal_icon, blog_incon, heart_icon, vite_icon, portada, terminal_font,  vite_font_blog, advertisemnt_font } = useImageCollection();

    return(

        <Contex.Provider
 
            value = {

                {

                    testContext,

                    //use boolean hook
                    toggle,
                    isTrue,

                    //use navigate handler
                    goToBlogLibrary, //blog library 
                    goToHomelibrary,  // home library
                    goToAboutTerminal, //about terminal
                    goToAboutClickfuturo, // about click futuro

                    //use images collection
                        //logos
                        clickFuturo_logo, // click futuro's logo

                        //icons
                        worldLanguage_icon, // world language
                        terminal_icon, //terminal icon
                        blog_incon,
                        vite_icon,
                        heart_icon, 

                        //social
                        instagram_icon, // instragram icon
                        gitHub_icon, //github icon

                        //fonts
                        portada,
                        terminal_font,
                        vite_font_blog,
                        advertisemnt_font // advertisement font
                }

            }
        >

            { children }
 
        </Contex.Provider>
    )

}