import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/configs/FireBaseConfig';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const onSignIn = () => {
    router.replace('/(tabs)/mytrip') // Only for adjust
    if(email?.length <= 0 || password?.length <= 0)
    {
      ToastAndroid.show('Please enter all the details', ToastAndroid.BOTTOM)
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/(tabs)/mytrip')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('----' + errorMessage, errorCode)
    if(errorCode === 'auth/invalid-credential')
    {
      ToastAndroid.show('Invalid-credential', ToastAndroid.LONG)
    }
  });
  }

  useEffect(() => {
    // remove the header for this page
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View style={{
      padding: 25,
      paddingTop: 60,
      backgroundColor: Colors.WHITE,
      height: '100%',
    }}>
      <AntDesign name="leftcircleo" size={24} color="black" onPress={() => router.back()}/>

      <View style={{
        paddingTop: 20,
        alignItems: 'center'
      }}>
        <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30
        }}>Let's sign you in</Text>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 30,
          marginTop: 20,
          color: Colors.GRAY
        }}>Welcome back!</Text>

        <Text style={{
          fontFamily: 'outfit',
          fontSize: 20,
          marginTop: 10,
          color: Colors.GRAY
        }}>You've been missed</Text>

        {/* Enter the Email */}
        <View style={{
          marginTop: 50
        }}>
          <Text style={{
            fontFamily: 'outfit'
          }}>Email</Text>
          <TextInput style={styles.input} onChangeText={(value)=>setEmail(value)}
          placeholder='Enter Email'></TextInput>
        </View>

        {/* Enter the password */}
        <View style={{
          marginTop: 20
        }}>
          <Text style={{
            fontFamily: 'outfit'
          }}>Password</Text>
          <TextInput secureTextEntry={true}
          style={styles.input} onChangeText={(value)=>setPassword(value)} placeholder='Enter Password'></TextInput>
        </View>

        {/* Sign in button */}
        <TouchableOpacity
        onPress={onSignIn} 
        style={{
          width: 300,
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50
        }}>
          <Text style={{
            color: Colors.WHITE,
            textAlign: 'center',
          }}>Sign In</Text>
        </TouchableOpacity>

        {/* Create account button */}
        <TouchableOpacity
        onPress={()=> router.replace('/auth/sign-up')}
        style={{
          width: 300,
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}>
          <Text style={{
            color: Colors.PRIMARY,
            textAlign: 'center',
          }}>Create Account</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    width: 300,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    fontFamily: 'outfit',
    borderColor: Colors.GRAY
  }
})