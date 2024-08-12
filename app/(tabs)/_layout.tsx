import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tabs.Screen name="mytrip"
      options={{
        tabBarLabel: 'My Trip',
        tabBarIcon: ({color}) => <Entypo name="location" size={24} color={color}/>
      }}/>

      <Tabs.Screen name="Discover" options={{
        tabBarLabel: 'My Trip',
        tabBarIcon: ({color}) => <Entypo name="globe" size={24} color={color} />
      }}/>
      
      <Tabs.Screen name="Profile" options={{
        tabBarLabel: 'My Trip',
        tabBarIcon: ({color}) => <Ionicons name="people-circle-outline" size={24} color={color}/>
      }}/>
    </Tabs>
  )
}