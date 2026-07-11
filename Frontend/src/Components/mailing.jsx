import React from 'react'

const Mailing = () => {
  return (
    <div>
        <form action="">
              <div className='w-[561px] p-6 h-[348px] bg-[#541f03] rounded-lg text-white'>
              <span className='text-4xl font-[recoleta] '>
                Mailing List
              </span>
              <div className=' flex justify-between my-6 text-sm'>
                <div>
                <label className='block' htmlFor="Name">First Name *</label>
                <input className='text-white border-b-[1px] pl-2 h-10 text-sm bg-transparent outline-none ' type="text" name="" id="" required/>
              </div>
              <div>
                <label className='block' htmlFor="Name">Last Name</label>
                <input className='text-white border-b-[1px] pl-2 h-10 text-sm bg-transparent outline-none' type="text" name="" id="" />
              </div>
              </div>
              <div>
                <label className='block text-sm' htmlFor="Name">Enter your email here *</label>
                <input className='text-white w-full border-b-[1px] pl-2 h-10 text-sm bg-transparent outline-none' type="email" name="" id="" required/>
              </div>
              <input className='my-4 mr-4 border-[1px] border-white accent-[#541f03] bg-[#541f03] inline  w-4 h-4 hover:cursor-pointer' required type="checkbox" />
              <label className='text-sm' htmlFor="">Yes, subscribe me to your newsletter. *</label>
              <button className='w-full transition-colors mt-2 duration-200 border-[1px] delay-150  h-10 bg-white text-[#541f03] rounded-md text-sm hover:text-white hover:bg-transparent hover:outline-white '>Subscribe</button>
            </div>
            </form>
    </div>
  )
}

export default Mailing