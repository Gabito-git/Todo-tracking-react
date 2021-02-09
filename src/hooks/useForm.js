import { useState } from "react"


const useForm = ( initialState = {} ) => {

    const [formState, setFormState] = useState( initialState );
 
    const handleInputChange = ( {target: {name, value}} )=>{
        setFormState({
            ...formState,
            [name]: name === 'reminder' ? !formState[name] : value

        })
   }

   const reset = () =>{
       setFormState( initialState );
   }

    return[
        formState,
        handleInputChange,
        reset
    ]
}

export default useForm
