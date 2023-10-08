import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import loca from '../assets/location.webp'
import prof from '../assets/Profile.webp'
import cart from '../assets/cart.webp'
export default function Navbar() {
  return (
    <div>
      <nav>
       <img src={logo} className="logo"  alt="logo" />
       <div className="routers">
       <a href="">FITNESS</a>
       <a href="">CARE</a>
       <a href="">MIND</a>
       <a href="">STORE</a>
       </div>
       <div className="addifet">
        <div className="location">
         KOLKATA <img src={loca} alt="location" />
        </div>
        <div className="app">
          GET-APP
        </div>
        <div className='prof '><img src={prof}  alt="profile" /></div>
        <div className='cart '><img src={cart}  alt="cart" /></div>
       </div>
      </nav>
    </div>
  )
}
