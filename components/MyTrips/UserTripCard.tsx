import { View, Image, Text } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '@/constants/Colors';

export default function UserTripCard({trip}) {
  const formatData = (data) => {
    return JSON.parse(data);
  }
  return (
    <View style={{
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center'
    }}>
      <Image source={{}} style={{
          width: '100%',
          height: 240,
          objectFit: 'cover',
          borderRadius: 15
        }}/>
      <View>
        <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 18,
        }}>{trip.tripPlan?.travelPlan?.locaiton}</Text>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 14,
          color: Colors.GRAY
        }}>{moment(formatData(trip.tripData).startDate).format('DD MMM yyyy')}</Text>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 14,
          color: Colors.GRAY
        }}>Traveling: {formatData(trip.tripData).traveler.title}</Text>
      </View>
    </View>
  )
}