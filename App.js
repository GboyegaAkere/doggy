import { View, Text } from 'react-native'
import React from 'react'
import AppNavigation from './AppNavigation'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
   <Provider store={store}>
    <AppNavigation/>
   </Provider>
    
  )
}

export default App