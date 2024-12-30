import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container' id='home'>
            <div className="header-content">
                <h1>Order your favourite food here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi non ea in quo deleniti error praesentium odio numquam! In reprehenderit nostrum nobis possimus ab dolorem voluptas sapiente, animi quaerat?</p>
                <button className='btn'>View More</button>
            </div>
        </div>
    )
}

export default Header;