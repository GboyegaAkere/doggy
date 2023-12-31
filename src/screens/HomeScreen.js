import { View, Text, Image,Pressable,  SafeAreaView} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FlatList } from 'react-native'
// import products from '../data/products'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ProductSlice } from '../../store/ProductSlice'


const HomeScreen = () => {
  const products = useSelector(state => state.products.products)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <SafeAreaView>
      <FlatList
      data={products}    
      renderItem={({item}) =>(
        <Pressable style={tw`w-3/6 p-1`} 
        onPress={()=>{
          dispatch(ProductSlice.actions.setSelectedProduct(item.id))
          navigation.navigate("About")}}
        >
          <Image style={tw`aspect-square w-full rounded`}  source={{uri:item.image}}/>
        </Pressable>
      )}
      numColumns={2}
      />
    </SafeAreaView>
  )
}

export default HomeScreen