import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/home';
 

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {

  return (<>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </>
  )
}

export default HomeStackNavigator