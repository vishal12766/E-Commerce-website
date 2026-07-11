import React from 'react'

const button = (props) => {
  return (
    <div className='flex'>
        <a className={`rounded-md w-[190px] border border-[#541F03] h-[48px] ${props.bg} p-[11px]`} href={`${props.work}`}><span className={`text-[17px] ${props.color} flex justify-center`} >{props.content}</span></a>
    </div>
  )
}

export default button