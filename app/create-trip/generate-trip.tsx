import { View, Text, Image } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from '@/context/CreateTripContext';
import { AI_PROMPT } from '@/components/CreateTrip/OptionCard';
import { doc, setDoc } from "firebase/firestore"
import { auth,db } from "@/configs/FireBaseConfig"

export default function GenerateTrip() {
  const navigation = useNavigation();
  const router = useRouter();
  const user = auth.currentUser;
  const {tripData, setTripData} = useContext(CreateTripContext)
  const [loading, setLoading] = useState(false);

  const GenerateAiTrip = async () => {
    setLoading(true)
    const FINAL_PROMPT = AI_PROMPT
    .replace('{location}', tripData?.locationInfo?.name || '')
    .replace('{totalDays}', tripData.totalNoOfDays?.toString() || '')
    .replace('{totalNight}', (tripData.totalNoOfDays - 1)?.toString() || '')
    .replace('{traveler}', tripData.traveler?.title || '')
    .replace('{budget}', tripData.budget?.toString() || '')
    .replace('{totalDays}', tripData.totalNoOfDays?.toString() || '')
    .replace('{totalNight}', (tripData.totalNoOfDays - 1)?.toString() || '');

    // console.log(FINAL_PROMPT)
    const result = await chatSession.sendMessage(FINAL_PROMPT)
    console.log(result.response.text())

    const tripResp = JSON.parse(result.response.text())
    setLoading(false)
    const docId = (Date.now()).toString()
    const result_ = await setDoc(doc(db, "userTrips", docId), {
      userEmail: user?.email,
      tripPlan: tripResp, // Generated by AI
      tripData: JSON.stringify(tripData), //user selection
      docId: docId
    }) 
    router.push('../(tabs)/mytrip.tsx')
  }

  useEffect(() => {
    tripData && GenerateAiTrip()
  }, [tripData])

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
        textAlign: 'center'
      }}>Please wait...</Text>

      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 20,
        marginTop: 40,
        textAlign: 'center'
      }}>We are working to generate your trip</Text>

      <Image source={require('@/assets/images/loading.gif')}
      style={{
        width: '100%',
        height: 200,
        objectFit: 'contain'
      }}/>
      
      <Text style={{
        fontFamily: 'outfit',
        color: Colors.GRAY,
        fontSize: 20,
        textAlign: 'center'
      }}>Do not go back</Text>
    </View>
  )
}