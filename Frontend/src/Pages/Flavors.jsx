import React from "react";
import Heading from "../Components/heading";
import { useState, useEffect ,useContext} from "react";
import  {ProductContext}  from "../Contexts/ProductProvider";

const Flavors = () => {
  const {Products} = useContext(ProductContext);

  const [type, settype] = useState([])
  const [iceCreamFlavors, seticeCreamFlavors] = useState([])
  const [dairyFreeFlavors, setdairyFreeFlavors] = useState([])

  useEffect(() => {
      if(Products.length>0){
        seticeCreamFlavors(Products[0]["Ice Cream Flavors"])
        setdairyFreeFlavors(Products[1]["Dairy Free Flavors"])  
        settype([
          Object.keys(Products[0])[1],
          Object.keys(Products[1])[1]
        ]);  
      }
         
  }, [Products]);
  return (
    <div>
      <div className="bg-[#541F03] h-80 flex justify-center items-center">
        <Heading
          color="text-white"
          head1="Cool, Creamy, Perfect"
          head2="Our Menu"
        />
      </div>
      <div className="">
        <p className="text-[#541F03]  font-bold text-3xl p-10">Flavors</p>
        <div className="flex justify-between mx-10 text-[#541F03] text-left">
          <div className="w-1/2">
            <h1 className="text-2xl font-bold">{type[0]}</h1>
            <hr className="my-4 border-[#541F03]" />

            {iceCreamFlavors.map((val,idx)=>

              <div key={idx} className="flex justify-between mb-10">
              <div className="flex">
                <div className="">
                  <h2 className="font-bold mb-2 inline">
                    {val.name}
                  </h2>
                  <div className="w-32 inline-block "> <hr className="border-[#541F03] border-dotted"/> </div>
                  <div className="inline-block tracking-widest">
                    <pre>{`$${val.price}`}</pre>
                  </div>
                  <p className="mt-2 w-5/6">
                    {val.description}
                  </p>
                </div>
              </div>
              <div className="w-28">
                <img
                  className=""
                  src={val.img}
                  alt=""
                />
              </div>
              
            </div>
            
            
            )}
          
          </div>


          <div className="">
            <h1 className="text-2xl font-bold">{type[1]}</h1>
            <hr className="my-4 border-[#541F03]" />
            
            {dairyFreeFlavors.map((val,idx)=>
              
              <div key={idx} className="flex justify-between mb-10">
              <div className="flex">
                <div className="">
                  <h2 className="font-bold mb-2 inline">
                    {val.name}
                  </h2>
                  <div className="w-32 inline-block "> <hr className="border-[#541F03] border-dotted"/> </div>
                  <div className="inline-block tracking-widest">
                    <pre>{`$${val.price}`}</pre>
                  </div>
                  <p className="mt-2 w-5/6">
                    {val.description}
                  </p>
                </div>
              </div>
              <div className=" w-32 h-32">
                <img className=" h-32 w-32 object-contain"
                  src={val.img}
                  alt=""
                />
              </div>
              
            </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Flavors;
