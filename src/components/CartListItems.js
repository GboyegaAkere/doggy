import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";


const CartListItems = ({cartItem}) => {
    const increaseQuantity =()=>{
        console.warn("where are you from")
    }

    const decreaseQuantity =()=>{
        console.warn("where are you from")
    }


  return (
    <View style={tw`flex-row space-x-3 m-2`}>
      <Image source={{ uri: cartItem.product.image }} style={{width:"40%", aspectRatio:1, }} />
      <View style={tw`mt-7`}>
        <Text style={tw`text-lg font-bold`}>{cartItem.product.name}</Text>
        <Text style={tw`text-sm font-black`}>Size {cartItem.size}</Text>

        <View style={tw`flex-row space-x-3 mt-1`}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={tw`self-center`}>{cartItem.quantity}</Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          
        </View>
        <Text style={tw`mt-1`}> ${cartItem.product.price}</Text>
      </View>
    </View>
  )
}

export default CartListItems