import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '@/context/CreateTripContext';

export default function SearchPlace() {
  const navigation = useNavigation();
  const {tripData, setTripData} = useContext(CreateTripContext)

  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search'
    })
  })

  useEffect(() => {
    // console.log(tripData)
  }, [tripData]) //Eveytime the tripData changes, this function is excuting

  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <GooglePlacesAutocomplete
      placeholder='Search place'
      fetchDetails={true}
      onFail={error => console.log(error)}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        // console.log(data.description);
        setTripData({
          locationInfo: {
            name: data.description,
            coordinates: details?.geometry.location,
            photeRef: details?.photos[0]?.photo_reference,
            url: details?.url
          }
        })
        router.push('/create-trip/select-traveler')
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        textInputContainer: {
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 25,
        }
      }}/>
    </View>
  )
}