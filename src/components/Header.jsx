import React from 'react'
import "./Header.css"
import headerImage from "../assets/header_img.png";

const Header = () => {
  return (
    <div className='header' id='header'
        style={{ backgroundImage: `url(${headerImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
    }}>
        <div className='header-contents'>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culniary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header