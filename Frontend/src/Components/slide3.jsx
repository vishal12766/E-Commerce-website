import React from 'react'
import Heading from './heading'
import Button from './button'

const Slide3 = () => {
  return (
    <div className=''>
        <div className='relative'>
            <img src="https://static.wixstatic.com/media/84770f_3e6d45c1fc4b47bcba53d4c582596c45~mv2.jpg/v1/fill/w_1901,h_1128,fp_0.51_0.72,q_90,usm_0.66_1.00_0.01,enc_auto/yuval_Image%20Upscale%20_%20Real-ESRGAN_2026-02-26_21-22-41.jpg" alt="" className="w-full h-[400px] md:h-[500px] lg:h-auto object-cover" />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center px-4 md:px-12 pt-6 md:pt-12'>
                <div className='mb-6 lg:mb-0'>
                    <Heading head1="Ice Cream Goddies" head2="Desserts"/>
                </div>
                <div className=''>
                    <p className='text-[#541F03] max-w-[374px] text-center lg:text-left mb-6'>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                    </p>
                    <Button content='Menu' bg='bg-[#541F03]' color='text-[#FFF99F]' work='/flavors'/>
                </div>
            </div>
        </div>

        <div className='bg-[#541F03] min-h-[402px] flex items-center justify-center relative'>
            <div className='flex flex-col items-center justify-center px-4 py-12'>
                <Heading head1='Get Yours' head2='We Deliver' color='text-[#f4f6f6]' />
                <div className='mt-10'></div>
                <Button content='Order Online' bg='bg-[#f4f6f6]' color='text-[#541F03]' work='/order'/>
            </div>
        </div>
    </div>
  )
}

export default Slide3