import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../../screens/profile/profile';

const Stack = createNativeStackNavigator();


const ProfileStackNavigator = () => {
  return (<>

    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  </>
  )
}

export default ProfileStackNavigator