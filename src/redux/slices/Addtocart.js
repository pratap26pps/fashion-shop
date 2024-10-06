import { createSlice } from "@reduxjs/toolkit";



export const Addtocart=createSlice({
    name:"cart",
    initialState :[],
    reducers:{
        add:(state,action)=>{
           state.push(action.payload);
        },
        remove:(state,action)=>{
        return    state.filter((item)=>item.id !== action.payload);
        }
    }
});

export const{add,remove}=Addtocart.actions;
export default Addtocart.reducer;