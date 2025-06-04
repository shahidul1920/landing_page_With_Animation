import React from 'react'

const Header = () => {
  return (
    <div className='headerSection py-4 px-2 sticky'>
      <div className="container mx-auto flex justify-between">
        <div className="logo">
            <img className='max-w-[120px]' src="https://d13pvy8xd75yde.cloudfront.net/global/x_new/logo.svg" alt="" />
        </div>
        <div className="menu">
            <ul className='flex gap-4 items-center'>
                <li>Phone</li>
                <li>Laptop</li>
                <li>Accessories</li>
            </ul>
        </div>
        <div className="info">
            <ul className='flex gap-4 items-center'>
                <li>Community</li>
                <li>Buy Now</li>
                <li>Login</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
