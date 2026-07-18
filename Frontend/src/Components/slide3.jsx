import React from 'react'
import Heading from './heading'
import Button from './button'

const slide3 = () => {
  return (
    <div>
        <div className='flex absolute justify-between px-12 mt-12 w-full'>
            <div className=''>
                <Heading head1="Ice Cream Goddies" head2="Desserts"/>
            </div>
            <div className=''>
                <p className='text-[#541F03] w-[374px] h-[93px] text-left mb-10'>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                </p>
                <Button content='Menu' bg='bg-[#541F03]' color='text-[#FFF99F]' work='/flavors'/>
            </div>
        </div>
            <img src="https://static.wixstatic.com/media/84770f_3e6d45c1fc4b47bcba53d4c582596c45~mv2.jpg/v1/fill/w_1901,h_1128,fp_0.51_0.72,q_90,usm_0.66_1.00_0.01,enc_auto/yuval_Image%20Upscale%20_%20Real-ESRGAN_2026-02-26_21-22-41.jpg" alt="" />

        <div className='bg-[#541F03] h-[402px] '>
            <div className='absolute flex-col place-items-center place-content-center w-full h-[402px]'>
                <Heading head1='Get Yours' head2='We Deliver' color='text-[#f4f6f6]' />
                <div className='mt-10'></div>
                <Button content='Order Online' bg='bg-[#f4f6f6]' color='text-[#541F03]' work='/order'/>
            </div>
        </div>
    </div>
  )
}

export default slide3