import {Routes,Route} from 'react-router-dom'; 
import './App.css';
import Cart from './component/Cart';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="text-center   ">

   
     
          
     <div className='bg-lime-300 p-1 fixed w-full top-0'>
       <Navbar></Navbar>
     </div>

     
      <Routes >
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
