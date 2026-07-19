import React from 'react'
import Heading from '../Components/heading'
import Button from '../Components/button'




const About = () => {
  return (
    <div>
        <div className="bg-[#541F03] h-64 md:h-80 flex justify-center items-center">
        <Heading
          color="text-white"
          head1="Our Story"
          head2="About us"
        />
      </div>


      <div className='grid grid-cols-1 lg:grid-cols-2'>

            <div className='w-full'>
                <img className='w-full h-full object-cover'
                src="https://static.wixstatic.com/media/84770f_dec85f54c00e464d885ca3477ba0f348~mv2.png/v1/fill/w_950,h_818,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Ice%20Cream%20Tempalte_Gemini%203%20(Nano%20Banana%20Pro)_2026-03-03_19-45-45.png" alt="" />
            </div>
            
            <div className='bg-white w-full flex items-center justify-center p-8'>
                <div className='flex flex-col justify-center items-center'>
                    <Heading head1="Behind the Scenes" head2="Our factory"/>
                    <div className='mt-10'></div>
                    <p className='max-w-[410px] text-center text-[18px] text-[#541F03]'>This is the space to introduce visitors to your business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what your site has to offer. </p>
                </div>
            </div>


            


            <div className='bg-white w-full flex items-center justify-center p-8 order-last lg:order-none'>
                <div className='flex flex-col justify-center items-center'>
                    <Heading head1="We just love ice cream!" head2="Our place"/>
                    <p className='max-w-[410px] text-center text-[18px] text-[#541F03] mt-10'>This is the space to introduce visitors to your business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what your site has to offer.</p>
                </div>
            </div>
               

            <div className='w-full'>
                 <img className='w-full h-full object-cover' src="http://static.wixstatic.com/media/84770f_919096dc5a27418f8c1afc35ca5ad946~mv2.jpg/v1/fill/w_950,h_818,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/yuval_Image%20Upscale%20_%20Real-ESRGAN_2026-03-03_21-40-01.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About