import React from 'react'
import { createContext } from 'react'
import { useContext , useState, useEffect} from 'react'

export const ProductContext=createContext();

const ProductProvider = ({children}) => {
    const [Products, setProducts] = useState([])
    useEffect(() => {
      fetch("http://localhost:3000/api/product" || `${import.meta.env.VITE_API_URL}/api/product`)
      .then((res)=> res.json())
    .then((data)=> {setProducts(data)
        
    })
    }, [])
    
  return (
    <div>
        <ProductContext.Provider value={{Products}}>
            {children}
        </ProductContext.Provider>
    </div>
  )
}

export default ProductProvider