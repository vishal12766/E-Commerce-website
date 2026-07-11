import React from "react";
import Heading from "../Components/heading";

const Flavors = () => {
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
        <p className="text-[#541F03]  font-bold text-3xl p-10">
          Flavors
        </p>
        <div className="flex justify-between mx-10 text-[#541F03] text-left">
          <div>
            <h1 className="text-2xl font-bold">Ice Cream Flavors</h1>
            <hr className="my-4" />
            <div className="flex">
              <div className="flex">
                <div>
                  <h2 className="font-bold mb-2 inline">
                    Cheesecake & Berries
                  </h2>
                  <div className="decoration-dotted underline inline-block tracking-widest">
                    <pre>               $9</pre>
                  </div>
                  <p>
                    This is an item on your menu. Give your item a brief
                    description.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://static.wixstatic.com/media/84770f_8f30fd7921dd4554acc833c4c5b633e9~mv2.jpg/v1/fill/w_131,h_131,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_8f30fd7921dd4554acc833c4c5b633e9~mv2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr />


          <div>
            <h1 className="text-2xl font-bold">Dairy Free Flavors</h1>
            <hr className="my-4" />
            <div className="flex">
              <div className="flex">
                <div>
                  <h2 className="font-bold mb-2 inline">
                    Cheesecake & Berries
                  </h2>
                  <div className="decoration-dotted underline inline-block tracking-widest">
                    <pre>               $9</pre>
                  </div>
                  <p>
                    This is an item on your menu. Give your item a brief
                    description.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://static.wixstatic.com/media/84770f_8f30fd7921dd4554acc833c4c5b633e9~mv2.jpg/v1/fill/w_131,h_131,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_8f30fd7921dd4554acc833c4c5b633e9~mv2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flavors;
