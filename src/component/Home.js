import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import Product from './Product'
export const Home = () => {
  <div className='loader'></div>
   const apiurl="https://fakestoreapi.com/products" 

   const[loading,setloading]=useState(false);
   const [posts,setposts]=useState([]);
   async function shopping() {
     setloading(true);
      try{  
        const  apidata= await fetch(apiurl);
         const pankaj=await apidata.json();
    
         setposts(pankaj)   
           console.log(pankaj);
        }
     catch(err){
      console.log("data is not  fetch from api url,check it")
     }
    setloading(false);
     }

  useEffect(()=>{
    shopping();
  },[])

  return (
    <div className='   '>
   {

    loading ? <Spinner /> : 
    posts.length > 0 ?
  (<div className='grid lg:grid-cols-4 lg:grid-rows-5 sm:grid-cols-12 sm:grid-rows-1 p-6 '>
    {
      posts.map((post)=>(
        <Product key={post.id} post ={post}/>
      ))
    }
  </div>)
  
    : 
    <div><p>No post found</p></div>

   } 
    </div>
  )
}
export default Home;