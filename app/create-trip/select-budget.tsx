import { View, Text, FlatList, ToastAndroid } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import OptionCard from '@/components/CreateTrip/OptionCard'
import { SelectBudgetOptions } from '@/constants/Options'
import { Colors } from '@/constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CreateTripContext } from '@/context/CreateTripContext';

export default function SelectBudget() {
  const router = useRouter();
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState();
  const {tripData, setTripData} = useContext(CreateTripContext)

  const onClickContinue = () => {
    if(!selectedOptions){
      ToastAndroid.show('Select your budget', ToastAndroid.LONG)
      return;
    }
    router.push('./review-trip.tsx')
  }

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  },[])

  useEffect(()=>{
    selectedOptions && setTripData({
      ...tripData,
      budget: selectedOptions?.title
    })
  },[selectedOptions])

  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop: 20,
      }}>Budget</Text>

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 20
        }}>Choose spending habits for your trip</Text>
      </View>

      <FlatList
         data={SelectBudgetOptions}
         renderItem={({ item, index }) => (
          <TouchableOpacity 
          onPress={()=>setSelectedOptions(item)}
          style={{
            marginVertical: 10
          }}>
            <OptionCard option={item}
            selectedOptions={SelectBudgetOptions}/>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />

      <TouchableOpacity 
        onPress={()=>onClickContinue()}
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