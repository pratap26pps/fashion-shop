import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from '../redux/slices/Addtocart';
import toast from 'react-hot-toast';
 
export const Product = ({post}) => {

const {cart} =useSelector((state)=>state);
const dispatch =useDispatch();

const  addItems=(()=>{
    dispatch(add(post));
    toast.success("item added");
})
const  removeItems=(()=>{
    dispatch(remove(post.id));
   toast.success("item removed");
})


  return (
    <div className=' border border-black border-2px items-center
     p-7 m-5  mt-12 shadow-xl shadow-slate-700  rounded-md hover:shadow-cyan-500 hover:scale-110'>
        <div>
        <div >
            <p className='font-bold'>{post.category}</p>
        </div>
     
        <div className='h-auto w-auto'>
            <p> {post.description.substring(0,70)}....</p>
        </div>

        <div className='h-14 w-20 '>
            <img src={post.image} alt="car" />
        </div>

        <div>
            <p className='text-blue-800 font-semibold'>$ {post.price}</p>
        </div>

   <div className='bg-orange-500 mt-16 cursor-pointer '>
        {
            cart.some((p)=>p.id === post.id) ? 
           
            (<div  onClick={removeItems}><button>remove items</button></div>):
              (<div  onClick={addItems}><button >add to cart</button></div>)
        }
     </div>
 </div>
       
    </div>
  )
}
export default Product;