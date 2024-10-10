import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cartitems from './Cartitems';



export const Cart = () => {

  const {cart}=useSelector((state)=>state);

  console.log("printing the cart");
  console.log(cart);
  const [totalamount,settotalamount]=useState(0);

  useEffect(()=>{
    // using reduce function it take two any parameter 
    settotalamount( cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart]);
  return (
    <div >
    {
      cart.length > 0 ? 
      (<div className='lg:flex  lg:ml-32 lg:mr-32  gap-9'>
      <div>
      {
        cart.map((pankaj,index)=>{
          return <Cartitems key={pankaj.id} pankaj={pankaj} itemIndex={index} ></Cartitems>
        })
      }
      </div>

     <div className=' border border-2px mt-20 border-green-500 shadow shadow-red-500 p-10'>

      <div>your cart</div>
      <div>summary</div>
      <p> <span>total items : {cart.length}</span></p>
       <div className='mt-44 '>
       <p>Total Amount:<p className='text-blue-600 font-bold'>${totalamount}</p></p>
       <button className='font-bold bg-red-300 rounded-md p-2 mt-2'>Checkout now</button>
     </div>

     </div> 
     
    

      </div>):
       (<div className='mt-40 font-bold '>
        <p>No cart left</p>
        <NavLink to="/">
          <button className='ont-bold bg-red-300 rounded-md p-2 mt-2'>show all cart</button>
        </NavLink>
       </div>)
    }


    </div>
  )
}
export default Cart;