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
    <div className="min-h-screen bg-[#fffdf3]">
      <div className="bg-[#541F03] h-64 md:h-80 flex justify-center items-center">
        <Heading
          color="text-white"
          head1="Cool, Creamy, Perfect"
          head2="Our Menu"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-10 py-12">
        <h2 className="text-[#541F03] font-[recoleta] text-4xl md:text-5xl mb-12">Flavors</h2>
        
        <div className="mb-16">
          <h3 className="text-[#541F03] font-[recoleta] text-2xl font-bold mb-8">{type[0]}</h3>
          {iceCreamFlavors.map((val,idx)=> (
            <div key={idx} className="flex items-start justify-between mb-10">
              <div className="flex-1 mr-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <h4 className="text-[#541F03] font-bold text-lg">{val.name}</h4>
                  <div className="flex-1 border-t border-dotted border-[#541F03]"></div>
                  <span className="text-[#541F03] font-medium">${val.price}</span>
                </div>
                <p className="text-[#541F03] opacity-80 max-w-md">
                  {val.description}
                </p>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={val.img}
                  alt={val.name}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-[#541F03] font-[recoleta] text-2xl font-bold mb-8">{type[1]}</h3>
          {dairyFreeFlavors.map((val,idx)=> (
            <div key={idx} className="flex items-start justify-between mb-10">
              <div className="flex-1 mr-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <h4 className="text-[#541F03] font-bold text-lg">{val.name}</h4>
                  <div className="flex-1 border-t border-dotted border-[#541F03]"></div>
                  <span className="text-[#541F03] font-medium">${val.price}</span>
                </div>
                <p className="text-[#541F03] opacity-80 max-w-md">
                  {val.description}
                </p>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={val.img}
                  alt={val.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flavors;
