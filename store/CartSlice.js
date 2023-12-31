import { createSelector, createSlice } from "@reduxjs/toolkit";
import cart from "../src/data/cart";

const initialState = {
    items:[],
    deliveryFee:14,
    freeDeliveryFee:200
}

export const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartItem:(state, action) =>{
            const newProduct = action.payload.product
            const cartItem = state.items.find((item)=>item.product.id === newProduct.id)
            if(cartItem){
                cartItem.quantity +=1
            }else{
                state.items.push({product:newProduct,quantity:1})
            }
        },

        changeQuantity:(state,action) =>{
            const {productId, amount} =action.payload
            const cartItem = state.items.find((item)=>item.product.id === productId)
            if(cartItem){
                cartItem.quantity += amount
            }
            if(cartItem.quantity <=0){
                state.items = state.items.filter((item)=>item !== cartItem)
            }
        }
    }
})

export const selectedNumberOfItems = (state) => state.cart.items.length
export const selectedSubtotal =(state) => state.cart.items.reduce((sum, cartItem)=> sum + cartItem.product.price * cartItem.quantity,0)

export const selectSelf = (state) => state.cart;
export const selectedDeliveryFee = createSelector(
    selectSelf,
    selectedSubtotal,
    (state, subTotal) =>subTotal > state.freeDeliveryFee ? 0 :state.deliveryFee )

export const selectedTotals = createSelector(
    selectedSubtotal,
    selectedDeliveryFee,
    (subTotal, delivery) => subTotal + delivery
)