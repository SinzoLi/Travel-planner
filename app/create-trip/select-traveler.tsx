import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { SelectTravelerList } from '@/constants/Options';
import OptionCard from '@/components/CreateTrip/OptionCard';
import { CreateTripContext } from '@/context/CreateTripContext';

export default function SelectTraveler() {
  const navigation = useNavigation();
  const router = useRouter();
  const [selectedTraveler, setSelectedTraveler] = useState('');
  const {tripData, setTripData} = useContext(CreateTripContext)

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  },[])

  useEffect(()=>{
    setTripData({...tripData, 
      traveler: selectedTraveler
    })
  },[selectedTraveler])

  useEffect(()=>{
    console.log(tripData)
  },[tripData])

  return (
    <View style={{
      height: '100%',
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.WHITE
    }}>
      <Text style={{
        fontSize: 35,
        fontFamily: 'outfit-bold',
        marginTop: 20
      }}>Who's traveling</Text>

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
        fontSize: 23,
        fontFamily: 'outfit-bold'
        }}>Choose your travelers</Text>

        <FlatList
         data={SelectTravelerList}
         renderItem={({ item, index }) => (
          <TouchableOpacity 
          onPress={()=>setSelectedTraveler(item.title)}
          style={{
            marginVertical: 10
          }}>
            <OptionCard option={item} selectedOptions={selectedTraveler}/>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      </View>

      <TouchableOpacity 
      onPress={()=>router.push('/create-trip/select-dates')}
      style={{
        borderRadius: 15,
        padding: 15,
        marginTop: 20,
        backgroundColor: Colors.PRIMARY
      }}>
        <Text style={{
          textAlign: 'center',
          color: Colors.WHITE,
          fontFamily: 'outfit-medium',
          fontSize: 20
        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}