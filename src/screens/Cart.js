import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import tw from "twrnc"
import CartListItems from '../components/CartListItems'

const Cart = () => {
  return (
    <View>
      <FlatList
      data={cart}
      renderItem={({item})=>(
       <View>
        <CartListItems cartItem={item}/>
       </View>
      )}
      ListFooterComponent={() => (
            <View style={tw`px-4`}>
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
            <Pressable style={tw`bg-black w-11/12 absolute bottom-3 self-center rounded-2xl`}>
              <Text style={tw`text-white self-center py-4`}>Checkout</Text>
            </Pressable>
          </View>
        )
      }

export default Cart