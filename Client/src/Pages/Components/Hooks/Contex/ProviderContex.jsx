import { Contex } from "./CreateContex";


export const ContexProvider = ( { children } ) => {

    const testContext = "text context";

    return(

        <Contex.Provider

            value = {

                {

                    testContext,
                }

            }
        >
            
            { children }

        </Contex.Provider>
    )

}