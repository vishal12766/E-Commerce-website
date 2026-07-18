import React from 'react'
import Heading from './heading'
import Button from './button'

const slide2 = () => { 
  return (
    <div className=''> 
        <div className='flex flex-wrap'>
            <div className='bg-[#FFF99F] w-1/2 h-auto'>
                <div className='flex-col justify-center  place-content-center place-items-center h-full'>
                    <Heading head1="Enjoy" head2="Dairy Free"/>
                    <div className='mt-10'></div>
                    <Button content="Order Online" bg="bg-[#541F03]" color="text-[#fff99f]" work='/order'/>
                </div>
            </div>


            <div className='w-1/2'>
                <img className='object-cover'
                src="https://static.wixstatic.com/media/cc40ca_ad0292ccd0b74bf0b9f646f650b66049~mv2.png/v1/fill/w_950,h_864,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/yuval_Image%20Upscale%20_%20Real-ESRGAN_2026-02-28_16-57-36.png" alt="" />
            </div>


            <div className='w-1/2 bg-[#f4f6f6]'>
                <div className='flex-col justify-center  place-content-center place-items-center h-full'>
                    <Heading head1="Our Story" head2="About Us"/>
                    <p className='w-[410px] h-[94px] mb-10 mt-10 text-center text-[18px] text-[#541F03] font-'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
                    <Button content="Read More" color='text-[#541F03]'  work='/about' />
                </div>
            </div>
               

            <div className='w-1/2'>
                 <img className='bg-contain' src="https://static.wixstatic.com/media/84770f_c7523a1da76b4e71a12e666b15e5254f~mv2.png/v1/fill/w_896,h_816,fp_0.50_0.50,q_90,enc_auto/Ice%20Cream%20Tempalte_Gemini%203%20(Nano%20Banana%20Pro)_2026-02-25_15-49-02.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default slide2