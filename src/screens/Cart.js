import { View, Text, FlatList, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import tw from "twrnc"
import CartListItems from '../components/CartListItems'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector(state=>state.cart.items)
  return (
    <View>
      <FlatList
      data={cartItems}
      renderItem={({item})=>(
       <View>
        <CartListItems cartItem={item}/>
       </View>
      )}
      ListFooterComponent={() => (
            <View style={tw`px-4 relative`}>
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-lg text-gray-500`}>Subtotal</Text>
                  <Text className="text-gray-500" >$200</Text>
                </View>
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`text-lg text-gray-500`}>Delivery</Text>
                  <Text style={tw`text-gray-500`}>$400</Text>
                </View>
                <View style={tw`flex-row justify-between items-center`}>
                  <Text style={tw`font-bold text-lg`}>Total</Text>
                  <Text>$900</Text>
                </View>

             </View>
            )}
            />
            <TouchableOpacity style={tw`bg-black w-11/12 absolute mt-130 self-center rounded-2xl`}>
              <Text style={tw`text-white self-center py-4`}>Checkout</Text>
            </TouchableOpacity>
          </View>
        )
      }

export default Cart