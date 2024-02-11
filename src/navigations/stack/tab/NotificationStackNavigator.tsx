import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationScreen from '../../../screens/notification';


const Stack = createNativeStackNavigator();

const NotificationStackNavigator = () => {
  return (<>
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  </>
  )
}

export default NotificationStackNavigator