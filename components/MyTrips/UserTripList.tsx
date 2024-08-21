import { View,Image , Text, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '@/constants/Colors';
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';

export default function UserTripList({userTrips}) {
  const router = useRouter();
  const LatestTrip = JSON.parse(userTrips[0].tripData)

  return (
    <View>
      <View style={{
        marginTop: 20
      }}>
        {LatestTrip?.locationInfo?.photoRef?
        <Image source={{}} style={{
          width: '100%',
          height: 240,
          objectFit: 'cover',
          borderRadius: 15
        }}/> : <Image source={require("@/assets/images/123.jpg")}
        style={{
          width: '100%',
          height: 240,
          objectFit: 'cover',
          borderRadius: 15
        }}/>}

        <View style={{
          marginTop: 10
        }}>
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 20
          }}>{userTrips[0]?.tripPlan?.travelPlan?.locaiton}</Text>
         
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5
          }}>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 17,
              color: Colors.GRAY,
            }}>{moment(LatestTrip.startDate).format('DD MMM yyyy')}
            </Text>
            
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 17,
              color: Colors.GRAY,
            }}>✈️{LatestTrip.traveler.title}</Text>
          </View>
        </View>

        <TouchableOpacity 
        onPress={()=>router.push({
          pathname: 'trip-details',
          params: {
            trip: JSON.stringify(userTrips[0])
          }
        })}
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          borderRadius: 15,
          marginTop: 10
        }}>
          <Text style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'outfit-medium',
            fontSize: 20
          }}>See your plan</Text>
        </TouchableOpacity>

        {userTrips.map((trip, index) => {
          <View>
            <UserTripCard trip={trip} key={index}/>
          </View>
        })}
      </View>
    </View>
  )
}