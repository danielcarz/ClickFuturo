import { Contex } from "./CreateContex";

//HOOKS AND CUSTOM HOOKS
import { useBoolean, useNavigateHandler } from '../index';


export const ContexProvider = ( { children } ) => {

    const testContext = "text context";

    //use boolean hook
    const { toggle, isTrue } = useBoolean();
    
    //use navigate hook
    const { goToBlogLibrary } = useNavigateHandler();

    return(

        <Contex.Provider

            value = {

                {

                    testContext,

                    //use boolean hook
                    toggle,
                    isTrue,

                    //use navigate hook
                    goToBlogLibrary,
                }

            }
        >

            { children }

        </Contex.Provider>
    )

}