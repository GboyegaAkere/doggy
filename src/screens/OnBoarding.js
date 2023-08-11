import { View, Text, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {
    const navigation = useNavigation()
  return (
    <Onboarding
    onSkip={()=>navigation.navigate("Breeds")}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={{uri:"https://i.ibb.co/wQwhxTh/31.jpg"}} style={tw`w-72 h-72 rounded-full`}/>,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },

    {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://i.ibb.co/FwDZDN1/37.jpg"}} style={tw`w-72 h-72 rounded-full`}  />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    
      
      {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://i.ibb.co/QvBs1fp/19.jpg"}} style={tw`w-72 h-72 rounded-full`} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      
    
  ]}
/>
  )
}

export default OnBoarding