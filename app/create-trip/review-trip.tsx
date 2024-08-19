import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateTripContext } from '@/context/CreateTripContext';
import moment from 'moment';

export default function ReviewTrip() {
  const router = useRouter();
  const navigation = useNavigation();
  const {tripData, setTripData} = useContext(CreateTripContext)

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  },[])

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
        marginTop: 20
      }}>Review your trip</Text>

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 20
        }}>Before generate your trip,please review your trip</Text>
       
       {/* Destination Info */}
        <View style={{
          marginTop: 40,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Ionicons name="location" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY
            }}>Destination</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>{tripData?.locationInfo?.name}</Text>
          </View>
        </View>

        {/* Date Info */}
        <View style={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Ionicons name="calendar" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY
            }}>Travel Date</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>{moment(tripData?.startDate).format('DD MMM')
              + "To" + 
              moment(tripData?.endDate).format('DD MMM') + '  '}
              ({tripData.totalNoOfDays} days)</Text>
          </View>
        </View>

        {/* Traveler Info */}
        <View style={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Ionicons name="people-outline" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY
            }}>Who's Traveling</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>{tripData?.traveler?.name}</Text>
          </View>
        </View>

        {/* Budget Info */}
        <View style={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Ionicons name="wallet-outline" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY
            }}>Budget</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>{tripData?.budget}</Text>
          </View>
        </View>

        <TouchableOpacity 
          onPress={()=>router.replace('./generate-trip.tsx')}
          style={{
            borderRadius: 15,
            padding: 15,
            marginTop: 80,
            backgroundColor: Colors.PRIMARY
          }}>
          <Text style={{
            textAlign: 'center',
            color: Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize: 20
          }}>Build my trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}