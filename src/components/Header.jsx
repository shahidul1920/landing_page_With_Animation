import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
      <div className="container mx-auto">
        <div className="logo">
            <img src="https://d13pvy8xd75yde.cloudfront.net/global/x_new/logo.svg" alt="" />
        </div>
        <div className="menu">
            <ul>
                <li>Phone</li>
                <li>Laptop</li>
                <li>Accessories</li>
            </ul>
        </div>
        <div className="info">
            <ul>
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
