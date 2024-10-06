import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='mt-3  '>
      <div className='flex flex-row  justify-evenly'>
    <NavLink to="/home"> <div className='flex'><FcCustomerSupport /><p>fashion-shop</p></div></NavLink> 
    <NavLink to="/home"> <p>HOME</p></NavLink> 
    <NavLink to="/cart"> <FaCartShopping /> </NavLink> 
      </div>


    </div>
  )
  
}

export default Navbar;