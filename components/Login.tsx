import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image source={require('./../assets/images/login.jpg')}
      style={{
        width: '100%',
        height: 520
      }}
      />
      <View style={styles.container}>
        <Text style={{
          marginTop: 10,
          fontSize: 30,
          textAlign: 'center',
          fontFamily: 'outfit-bold'
        }}>
          Travel Planner
        </Text>

        <Text style={{
          fontSize: 17,
          marginTop: 20,
          textAlign: 'center',
          fontFamily: 'outfit',
          color: Colors.GRAY
        }}>Discover your next trip!</Text>

        <TouchableOpacity style={styles.button}>
          <Text 
          onPress={()=> router.push('/auth/sign-in')}
          style={{
          fontSize: 17,
          textAlign: 'center',
          fontFamily: 'outfit',
          color: Colors.WHITE
        }}>
            Sign in with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 25,
    marginTop: -20,
    height: '100%',
  },

  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '40%',
  }
})

