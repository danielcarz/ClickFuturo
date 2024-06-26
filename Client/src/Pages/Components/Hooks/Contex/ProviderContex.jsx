import { Contex } from "./CreateContex";

//HOOKS AND CUSTOM HOOKS
import { useBoolean } from '../CustomsHooks/1.0-useBoolean';


export const ContexProvider = ( { children } ) => {

    const testContext = "text context";

    const { toggle, isTrue } = useBoolean(); 

    return(

        <Contex.Provider

            value = {

                {

                    testContext,

                    toggle,
                    isTrue,
                }

            }
        >

            { children }

        </Contex.Provider>
    )

}