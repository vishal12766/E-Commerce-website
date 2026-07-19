import React from 'react'
import Contact from './contact'
import Mailing from './mailing'

const slide5 = () => {
  return (
    <div>
        <div className='bg-[#FFF99F] flex flex-col lg:flex-row justify-between p-6 md:p-12 relative gap-8'>
            <div className='w-full lg:w-auto'>
                <img className='w-auto h-[50px] md:h-[67px]' src="https://static.wixstatic.com/media/84770f_71803fcfa2ce4fb59c425d59cf8c0e0a~mv2.png" alt="" />
                <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[#541F03]'>
                    <div className=''>
                      <p>ADDRESS</p>
                      <p className='mt-2'>
                        5 Terry Francise St.
                        <br />
                        San Franciso,
                        <br />
                        CA 94158
                      </p>
                    </div>
                    <div className=''>
                      <p>CONTACT</p>
                      <p className='mt-2'>
                        singhvishal3438@gmail.com
                        <br />
                        Tel: 9045014268
                      </p>
                    </div>
                    <div className=''>
                      <p>HOURS</p>
                      <p className='mt-2'>
                        Open Daily
                        <br />
                        10am-10pm
                      </p>
                    </div>
                    <div className=''>
                      <a href="#" className="block">Terms & Conditions</a>
                      <a href="#" className="block">Privacy Policy</a>
                    </div>
                    <div className=''>
                      <a href="#" className="block">Accessibility Statement</a>
                      <a href="#" className="block">Refund Policy</a>
                    </div>
                    <div className='text-2xl'>
                      <Contact text='text-black'/>
                    </div>
                  </div>
            </div>
            <div className='w-full lg:w-auto'>
              <Mailing/>
            </div>
            <div className='mt-8 text-[#541F03]'>
            <i className="fa-regular fa-copyright"></i> Created by Vishal Singh in 2026
            </div>
        </div>
        
    </div>
  )
}

export default slide5