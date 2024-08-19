import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { CreateTripContext } from '@/context/CreateTripContext';

export default function selectDates() {
  const router = useRouter();
  const navigation = useNavigation();

  const { tripData, setTripData } = useContext(CreateTripContext);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const onDateChange = (date: Date, type: string) => {
    if (type === 'START_DATE') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const onDateSelectionContinue = () => {
    if (!startDate || !endDate) {
      ToastAndroid.show('Please select Start date or End date', ToastAndroid.LONG);
      return;
    }
    const totalNoOfDays = moment(endDate).diff(moment(startDate), 'days');
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1,
    });
    router.push('./select-budget.tsx')
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    });
  }, []);

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
      }}>select-dates</Text>

      <View style={{
        marginTop: 30,
      }}>
        <CalendarPicker
          allowRangeSelection={true}
          onDateChange={onDateChange}
          minDate={new Date()}
          maxRangeDuration={14}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE
          }}
        />
      </View>

      <TouchableOpacity
        onPress={onDateSelectionContinue}
        style={{
          borderRadius: 15,
          padding: 15,
          marginTop: 35,
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
