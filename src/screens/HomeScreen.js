import { View, Text, Image,Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FlatList } from 'react-native'
// import products from '../data/products'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'


const HomeScreen = () => {
  const products = useSelector(state => state.products.products)
  const navigation = useNavigation()
  return (
    <View>
      <FlatList
      data={products}
      renderItem={({item}) =>(
        <Pressable style={tw`w-3/6 p-1`} onPress={()=>navigation.navigate("Details")}>
          <Image style={tw`aspect-square w-full rounded`}  source={{uri:item.image}}/>
        </Pressable>
      )}
      numColumns={2}
      />
    </View>
  )
}

export default HomeScreen