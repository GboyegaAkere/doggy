import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import { CartSlice } from '../../store/CartSlice';


const CartListItems = ({cartItem}) => {
  const dispatch = useDispatch()
    const increaseQuantity =()=>{
        dispatch(
          CartSlice.actions.changeQuantity({
            productId:cartItem.product.id, amount:1
          })
        )
    }

    const decreaseQuantity =()=>{
      dispatch(
        CartSlice.actions.changeQuantity({
          productId:cartItem.product.id, amount:-1
        })
      )
    }


  return (
    <View style={tw`flex-row justify-around m-2`}>
      <Image source={{ uri: cartItem.product.image }} style={{width:"40%", aspectRatio:1, }} />
      <View style={tw`mt-7`}>
        <Text style={tw`text-lg font-bold`}>{cartItem.product.name}</Text>
        <Text style={tw`text-sm font-black`}>Size {cartItem.size}</Text>

        <View style={tw`flex-row justify-between mt-1`}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={30}
            color="gray"
          />
          <Text style={tw`self-center`}>{cartItem.quantity}</Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={30}
            color="gray"
          />
          
        </View>
        <Text style={tw`mt-1`}> ${cartItem.product.price* cartItem.quantity}</Text>
      </View>
    </View>
  )
}

export default CartListItems