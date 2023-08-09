import { createSlice } from "@reduxjs/toolkit";
import products from "../src/data/products";

const initialState ={
    products:products,
    selectedProduct:null
}

export const ProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setSelectedProduct:(state, action)=>{
            console.log("state", state)
            console.log("action", action)
        }
    }
})