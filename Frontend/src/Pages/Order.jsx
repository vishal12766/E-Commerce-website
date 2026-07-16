import React from 'react'
import {ProductContext} from '../Contexts/ProductProvider'
import { useContext,useEffect ,useState } from 'react'


const Order = () => {
    const {Products} = useContext(ProductContext);
    const data=Products;
    const icecream =Products.length > 0 ? Products[0]["Ice Cream Flavors"] : [];

    const dairyfree =Products.length > 1 ? Products[1]["Dairy Free Flavors"] : [];

    if(data.length>0){
      
    console.log()
    }
    

    
  return (
    <div>
      <h1>{Object.keys(data[0])[1]}</h1>
        {icecream.map((val,idx)=>
          <div key={val.name} className='flex'>
            <div className=''>
              <img src={val.img} alt="" />
              <h1>{val.name}</h1>
            </div>
          </div>

          
        )}
    </div>
  )
}

export default Order