import React from 'react'

const Button = (props) => {
  return (
    <div className='flex justify-center'>
        <a className={`rounded-md lg:w-[190px] sm:w-[250px] border border-[#541F03] h-[48px] ${props.bg} flex items-center justify-center`} href={`${props.work}`}><span className={`text-[17px] p-8 ${props.color}`} >{props.content}</span></a>
    </div>
  )
}

export default Button