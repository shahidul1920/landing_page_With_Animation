import React from 'react'

const Header = () => {
  return (
    <div className='headerSection p-4'>
      <div className="container mx-auto flex justify-between">
        <div className="logo">
            <img className='max-w-[120px]' src="https://d13pvy8xd75yde.cloudfront.net/global/x_new/logo.svg" alt="" />
        </div>
        <div className="menu hidden md:flex">
            <ul className='flex gap-4 items-center'>
                <li>Phone</li>
                <li>Laptop</li>
                <li>Accessories</li>
            </ul>
        </div>
        <div className="info hidden md:flex">
            <ul className='flex gap-4 items-center'>
                <li>Community</li>
                <li>Buy Now</li>
                <li>Login</li>
            </ul>
        </div>
        <div className="toggleMenu md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </div>
      </div>
    </div>
  )
}

export default Header
