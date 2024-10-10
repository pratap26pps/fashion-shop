import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div className='mt-3  '>
      <div className='flex flex-row  justify-evenly'>
    <NavLink to="/"> <div className='flex'><FcCustomerSupport /><p>fashion-shop</p></div></NavLink> 
    <NavLink to="/"> <p>HOME</p></NavLink> 
    <NavLink to="/cart">

    <div className='flex'>  
     <FaCartShopping  />
    <div className='bg-pink-400 animate-bounce rounded-2xl'>{cart.length}</div>
    </div>
     </NavLink> 
      </div>


    </div>
  )
  
}

export default Navbar;