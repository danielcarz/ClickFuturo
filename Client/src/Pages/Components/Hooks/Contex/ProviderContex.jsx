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
    const { clickFuturo_logo, worldLanguage_icon } = useImageCollection();

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
                        worldLanguage_icon // world language
                }

            }
        >

            { children }
 
        </Contex.Provider>
    )

}