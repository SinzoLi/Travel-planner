import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import { useNavigation, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/FireBaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [fullName,setFullName] = useState('');

  useEffect(() => {
    // remove the header for this page
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const onCreateAccount = () => {
    if(email?.length <= 0 || password?.length <= 0 || fullName?.length <= 0)
    {
      ToastAndroid.show('Please enter all the details', ToastAndroid.BOTTOM)
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      router.replace('/(tabs)/mytrip')
      console.log(user)
      // ...
    })
    .catch((error) => {
      // console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("--" + errorMessage, errorCode)
      // ..
    });
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 50,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <AntDesign name="leftcircleo" size={24} color="black" onPress={() => router.back()}/>
      <View style={{
        paddingTop: 20,
        alignItems: 'center',
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
        }}>Create New Account</Text>

        {/* Enter full name */}
        <View style={{
          marginTop: 50
        }}>
          <Text style={{
            fontFamily: 'outfit'
          }}>Full Name</Text>
          <TextInput style={styles.input} onChangeText={(value)=>setFullName(value)}
          placeholder='Enter Full Name'></TextInput>
        </View>

        {/* Enter the Email */}
        <View style={{
          marginTop: 20
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
          <TextInput secureTextEntry={true} onChangeText={(value)=>setPassword(value)}
          style={styles.input} placeholder='Enter Password'></TextInput>
        </View>

        {/* Create account button */}
        <TouchableOpacity
        onPress={onCreateAccount} 
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
          }}>Create Account</Text>
        </TouchableOpacity>

        {/* Create account button */}
        <TouchableOpacity
        onPress={()=> router.replace('/auth/sign-in')}
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
          }}>Sign In</Text>
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