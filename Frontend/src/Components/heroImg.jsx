import React from 'react'
import Button from './button'


const heroImg = () => {
  return (
    <div>
        <div>
          <div className='absolute z-20 mt-[310px]  '>
              <h1 className='text-[#fff99f] text-[270px] text-center ml-10 font-bold font-serif relative '>Ice Cream</h1>
              <div className='flex w-[1350px] justify-between mx-16 relative'>
                <h2 className='text-[#fff99f]  text-[36px] font-bold font-serif'>Hand Crafted</h2>
                <Button content="Our Flavors" bg="bg-[#541F03]" color="text-[#fff99f]" work='/Gelato/flavors'/>
              </div>
            </div>
            <img className='object-contain' src="https://static.wixstatic.com/media/84770f_871543df4c1c468b8bf9d1697039314d~mv2.jpg/v1/fill/w_1901,h_1011,fp_0.52_0.19,q_85,usm_0.66_1.00_0.01,enc_auto/Fintech-Product-Demo-Deck_Gemini-3-(Nano-Banana-Pro)_2026-02-15_12-57-05.jpg" alt="" />
        </div>
    </div>
  )
}

export default heroImg