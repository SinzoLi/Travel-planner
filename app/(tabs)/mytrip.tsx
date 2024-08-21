import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '@/components/MyTrips/StartNewTripCard';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { auth, db } from '@/configs/FireBaseConfig'
import UserTripList from '@/components/MyTrips/UserTripList';

export default function Mytrip() {
  const [userTrip, setUserTrip] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  const GetMyTrips = async () => {
    setLoading(true)
    setUserTrip([]);
    const q = query(collection(db, 'UserTrips'),where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) =>{
      setUserTrip(prev => [ ...prev, doc.data()])
    })
    setLoading(false)
  }

  useEffect(() => {
    user && GetMyTrips()
  }, [user])

  return (
    <ScrollView style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 35
        }}>Mytrip</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
      {loading && <ActivityIndicator 
      size={'large'} color={Colors.PRIMARY}/>}
      {userTrip?.length==0?
      <StartNewTripCard/> :
      <UserTripList userTrips={userTrip}/>
      }
    </ScrollView >
  )
}