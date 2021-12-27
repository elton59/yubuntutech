import React, { createContext, useState } from 'react';

export const MyContextsContext = createContext({
    description: '',
    price: null,
    image:null,
    setDescription: () => {},
    setImage: () => {},
    setPrice:()=>{}
})

function MyContextProvider({children}) {
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [price,setPrice] = useState(null)

    return (
        <MyContextsContext.Provider   value={{description,setDescription,image, setImage,price,setPrice}}>
            {children}
        </MyContextsContext.Provider>
    );
}

export default MyContextProvider;