import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View style={{
      padding: 20,
      marginTop: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 25
    }}>
      <MaterialIcons name="location-pin" size={30} color="black" />
      <Text style={{
        fontSize: 25,
        fontFamily: 'outfit-medium',
        textAlign: 'center'
      }}>
        No trips planned yet
      </Text>

      <Text style={{
        fontSize: 20,
        fontFamily: 'outfit',
        textAlign: 'center',
        color: Colors.GRAY
      }}>
        Looks like it's time to explore a new trip!
      </Text>

      <TouchableOpacity 
      onPress={() => router.push('/create-trip/search-place')}
      style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        paddingHorizontal: 30
      }}>
        <Text style={{
          color: Colors.WHITE,
          fontFamily: 'outfit-medium',
          fontSize: 17
        }}>Start a new trip</Text>
      </TouchableOpacity>
    </View>
  )
}