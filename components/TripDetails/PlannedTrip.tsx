import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import Feather from '@expo/vector-icons/Feather';

export default function PlannedTrip({details}) {
  return (
    <View style={{
      marginTop: 20
    }}>
      <Text style={{
        fontSize: 20,
        fontFamily: 'outfit-bold'
      }}>🧳 Plan Details</Text>

      {Object.entries(details).reverse().map(([day, details]) => (
        <View>
          <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 20,
            marginTop: 20
          }}>{day.charAt(0).toUpperCase + day.slice(1)}</Text>
          {details.plan.map((place, index) => (
            <View style={{
              padding: 10,
              borderRadius: 15,
              borderColor: Colors.LIGHT_GRAY,
              marginTop: 20
            }}>
              <Image source={{}} style={{
                width: '100%',
                height: 330,
                objectFit: 'cover',
                }}/>
                <View style={{
                  marginTop: 5
                }}>
                  <Text style={{
                  fontFamily: 'outfit-bold',
                  fontSize: 20,
                  }}>{place?.placeName}</Text>
                  <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 17,
                    color: Colors.GRAY
                  }}>{place.placeDetails}</Text>
                  <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <Text style={{
                      fontFamily: 'outfit',
                      fontSize: 17,
                      marginTop: 5
                    }}>
                    🎫Ticket Price: {place?.ticketPricing}
                    </Text>
                    <Text style={{
                      fontFamily: 'outfit',
                      fontSize: 17,
                      marginTop: 5
                    }}>
                    🕰️Time to Travel: {place?.timeToTravel}
                    </Text>
                  </View>

                  <View>
                    <TouchableOpacity style={{
                      backgroundColor: Colors.PRIMARY,
                      padding: 8,
                      borderRadius: 7
                    }}>
                      <Feather name="navigation" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}