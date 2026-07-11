import React from 'react'
import Contact from './contact'
import Mailing from './mailing'

const slide5 = () => {
  return (
    <div>
        <div className='h-[532px] bg-[#FFF99F] flex justify-between p-12 relative'>
            <div className=''>
                <img className='w-[254px] h-[67px]' src="https://static.wixstatic.com/media/84770f_71803fcfa2ce4fb59c425d59cf8c0e0a~mv2.png" alt="" />
                <div className=' mt-20 grid grid-cols-3 gap-10 text-[#541F03]'>
                    <div className='w-[206px]'>
                      <p>ADDRESS</p>
                      <p className='mt-2'>
                        5 Terry Francise St.
                        <br />
                        San Franciso,
                        <br />
                        CA 94158
                      </p>
                    </div>
                    <div className='w-[206px] '>
                      <p>CONTACT</p>
                      <p className='mt-2'>
                        singhvishal3438@gmail.com
                        Tel: 9045014268
                      </p>
                    </div>
                    <div className='w-[206px]'>
                      <p>HOURS</p>
                      <p className='mt-2'>
                        Open Daily
                        <br />
                        10am-10pm
                      </p>
                    </div>
                    <div className='w-[206px]'>
                      <a href="#">Terms & Conditions</a>
                      <a href="#">Privacy Policy</a>
                    </div>
                    <div className='w-[206px]'>
                      <a href="#">Accessibility Statement</a>
                      <br />
                      <a href="#">Refund Policy</a>
                    </div>
                    <div className='w-[206px] text-2xl'>
                      <Contact text='text-black'/>
                    </div>
                  </div>
            </div>
            <Mailing/>
            <div className='absolute bottom-2 text-[#541F03]'>
            <i className="fa-regular fa-copyright"></i> Created by Vishal Singh in 2026
            </div>
        </div>
        
    </div>
  )
}

export default slide5