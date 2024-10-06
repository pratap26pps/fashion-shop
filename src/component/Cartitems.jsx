import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/Addtocart';
import toast from 'react-hot-toast';

export const Cartitems = ({pankaj}) => {
    const dispatch =useDispatch();

    const singh=()=>{
        dispatch(remove(pankaj.id));
          toast.success("item removed");
    }
  return (
    <div className='grid grid-cols-1 mb-3 mt-20 h-60 p-3 border  border-red-500'>
       <div className='font-bold'>
        {pankaj.title}
       </div>
         <div>
        {pankaj.description.substring(0,90)}....
       </div>
       <div className='h-16 w-24'>
        <img src={pankaj.image} alt="photo" />
       </div>
     
      <p className='text-blue-500 font-semibold'>$ {pankaj.price}</p>
     
      <div  onClick={singh}  className='cursor-pointer ml-[90%]
       bg-red-400 rounded-lg text-center' >
         
          <AiFillDelete  className='mt-2 lg:ml-6 ml-2' />
      </div>
    
    </div>
  )
}
export default Cartitems;