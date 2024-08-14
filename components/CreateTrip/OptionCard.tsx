import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

interface Option {
  id: number;
  title: string;
  desc: string;
  icon: string;
  people: string;
}

export default function OptionCard({ option, selectedTraveler }: { option: Option,  selectedTraveler: String }) {
  return (
    <View style={[{
      padding: 25,
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: Colors.LIGHT_GRAY,
      justifyContent: 'space-between',
      borderRadius: 15
    }, selectedTraveler == option.title&&{borderWidth: 3}]}>
      <View>
        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit-bold'
          }}>{option?.title}
        </Text>

        <Text style={{
          fontSize: 17,
          fontFamily: 'outfit',
          color: Colors.GRAY
          }}>{option?.desc}
        </Text>

        <Text style={{
          fontSize: 17,
          fontFamily: 'outfit-bold'
          }}>{option?.title}
        </Text>

        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit-bold'
          }}>{option?.title}
        </Text>
      </View>
      <Text style={{
        fontSize: 35
      }}>{option.icon}</Text>
    </View>
  )
}