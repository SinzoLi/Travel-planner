import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors';
import moment from 'moment';
import FlightInfo from '@/components/TripDetails/FlightInfo';
import HotelList from '@/components/TripDetails/HotelList';
import PlannedTrip from '@/components/TripDetails/PlannedTrip';

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [ tripDetails, setTripDetails ] = useState([]);
  const formatData = (data) => {
    return JSON.parse(data);
  }

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
    setTripDetails(JSON.parse(trip))
  },[])

  return tripDetails && (
    <ScrollView>
      <Image source={{}} style={{
        width: '100%',
        height: 330,
        objectFit: 'cover',
        }}/>
      <View style={{
        padding: 15,
        marginTop: -30,
        backgroundColor: Colors.WHITE,
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}>
        <Text style={{
          fontSize: 25,
          fontFamily: 'outfit-bold'
        }}>
          {tripDetails?.tripPlan.travelPlan.location}
        </Text>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          marginTop: 5
        }}>
          <Text style={{
            fontFamily: 'outfit',
            fontSize: 18,
            color: Colors.GRAY
          }}>{moment(formatData(tripDetails?.tripData).startDate).format('DD MMM yyyy')}</Text>
          <Text style={{
            fontFamily: 'outfit',
            fontSize: 18,
            color: Colors.GRAY
          }}>- {moment(formatData(tripDetails?.tripData).endDate).format('DD MMM yyyy')}</Text>
        </View>
        <Text style={{
              fontFamily: 'outfit',
              fontSize: 17,
              color: Colors.GRAY,
            }}>✈️{formatData(tripDetails?.tripData)?.traveler.title}</Text>
            
        {/* Flight Info */}
        <FlightInfo flightData={tripDetails?.tripPlan?.travelPlan?.flight}/>
        {/* Hotel List */}
        <HotelList hotelList={tripDetails?.tripPlan?.travelPlan?.hotels}/>
        {/* Trip Day Planner Info*/}
        <PlannedTrip details={tripDetails?.tripPlan?.travelPlan?.itinerary}/>
      </View>
    </ScrollView>
  )
}