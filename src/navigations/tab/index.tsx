import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from '../stack/tab/HomeStackNavigator';
import NotificationStackNavigator from '../stack/tab/NotificationStackNavigator';
import ProfileStackNavigator from '../stack/tab/ProfileStackNavigator';

const Tab = createBottomTabNavigator();
const TabMain = () => {
  return (<>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
        <Tab.Screen name="NotificationStack" component={NotificationStackNavigator} />
        <Tab.Screen name="ProfileStack" component={ProfileStackNavigator} />

      </Tab.Navigator>
  </>
  )
}

export default TabMain


