import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {
  const navigation = useNavigation()
  const donebutton = ({...props}) =>{
    // return(
    //   <TouchableOpacity  {...props}>
    //     <Text>DONE</Text>
    //   </TouchableOpacity>
    // )
  }
  return (
       <View style={tw`flex-1`}>
        <Onboarding
             containerStyles={{paddingHorizontal:15}}
              onSkip={()=> navigation.navigate("Breeds")}
              onDone={()=> navigation.navigate("Breeds")}
              // DoneButtonComponent={donebutton}
                pages={[
                {
                  backgroundColor: '#a7f3d0',
                  image:(
                    <View>
                      <LottieView source={require('../data/images/dog1.json')} autoPlay loop style={tw`h-82 w-82`} />
                    </View>
                  ),
                  title: 'Uniting Canine Enthusiasts Worldwide',
                  subtitle: 'Welcome to the ultimate hub for all things dog-related! Our dog marketplace is a haven for passionate dog owners, breeders, and enthusiasts.',
                },

                {
                  backgroundColor: '#fef3c7',
                  image:(
                    <View>
                      <LottieView source={require('../data/images/dog4.json')} autoPlay loop style={tw`h-82 w-82`}  />
                    </View>
                  ),
                  title: 'Find Your Perfect Companion',
                  subtitle: 'Our platform connects you with reputable breeders offering a diverse selection of dog breeds',
                },

                {
                  backgroundColor: '#a78bfa',
                  image:(
                    <View>
                      <LottieView source={require('../data/images/dog3.json')} autoPlay loop style={tw`h-82 w-82`}  />
                    </View>
                  ),
                  title: 'Safe, Secure, and Trustworthy',
                  subtitle: 'Browse through categories, read reviews, and make purchases seamlessly. Your journey to finding the perfect product or pup is just a few clicks away.',
                },
              ]}
          />
       </View>
          
  )
}

export default OnBoarding