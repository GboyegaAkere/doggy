// In App.js in a new project

import * as React from 'react';
import { View, Text , Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import Cart from './src/screens/Cart';
import { selectedNumberOfItems } from './store/CartSlice';
import { useSelector } from 'react-redux';
import OnBoarding from './src/screens/OnBoarding';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  const selectedNumber = useSelector(selectedNumberOfItems)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboard' component={OnBoarding} options={{headerShown:false}}/>
        <Stack.Screen name="Breeds" component={HomeScreen} 
        options={({ navigation }) => ({
            headerShadowVisible:false,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{ flexDirection: 'row' }}
                className="space-x-1 items-center"
              >
                <Ionicons name="cart-outline" size={25} color="gray" />
                <Text className="text-lg">{selectedNumber}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="About" component={DetailScreen} options={{presentation:'modal'}} 
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;