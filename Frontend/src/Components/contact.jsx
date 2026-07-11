import React from 'react'

const contact = ({text='text-white'}) => {
  return (
    <div>
        <ul className={`flex gap-2 ${text}`}>
          <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
        </ul>
    </div>
  )
}

export default contact