import { View, Text, Image ,Pressable} from 'react-native'
import React from 'react'
import products from '../data/products'
import { useWindowDimensions } from 'react-native'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native'
import tw from "twrnc"

const DetailScreen = () => {
    const {width} = useWindowDimensions()
    const product = products[0]
    const addToCart =()=>{
        console.warn("set the function")
    }
  return (
    <>
    <ScrollView>
        <FlatList
        data={product.images}
        horizontal
        showsHorizontalScrollIndicator="false"
        pagingEnabled
        renderItem={({item})=>(
            <View>
                <Image source={{url:item}} style={{ width, aspectRatio: 1 }}/>
            </View>
        )}
        />
    <View style={tw`mx-3 mt-2`}>
      <Text style={tw`text-lg font-bold`}>{product.name}</Text>
      <Text style={tw`mt-1 text-lg`}>${product.price}</Text>
      <Text>{product.description}</Text>
    </View>
      
    </ScrollView>
     <Pressable 
     style={tw`bg-black w-11/12 absolute bottom-3 self-center rounded-2xl`}
     onPress={addToCart}
    >
     <Text style={tw`text-white self-center py-4`}>Add to cart</Text>
    </Pressable>
    </>
  )
}

export default DetailScreen