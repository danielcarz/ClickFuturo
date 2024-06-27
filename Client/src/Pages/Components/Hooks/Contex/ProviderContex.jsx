import { Contex } from "./CreateContex";

//HOOKS AND CUSTOM HOOKS
import { useBoolean, useNavigateHandler } from '../index';


export const ContexProvider = ( { children } ) => {

    const testContext = "text context";

    //use boolean hook
    const { toggle, isTrue } = useBoolean();
    
    //use navigate hook
    const { goToBlogLibrary, goToHomelibrary } = useNavigateHandler();

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
                    goToHomelibrary  // home library
                }

            }
        >

            { children }

        </Contex.Provider>
    )

}