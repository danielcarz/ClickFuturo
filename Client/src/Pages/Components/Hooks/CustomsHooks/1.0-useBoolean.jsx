import { useState } from "react";

export const useBoolean = ( intialValue = true ) => {

    const [ isTrue, setIsTrue ] = useState ( intialValue );

    const toggle = () => setIsTrue( ( prev ) => !prev );

    return{

        toggle,

        isTrue,
    }
} 