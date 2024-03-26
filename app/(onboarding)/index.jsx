import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';


function OnboardingScreen1() {
  return (
    <View className='flex-1'>
      <ImageBackground
        source={require('../../assets/images/onb1.png')}
        resizeMode='cover'
        className='flex-1'
      >
        <StatusBar style='light' />
        <SafeAreaView />
        <Text className='text-red-600'>This is Home Page</Text>
      </ImageBackground>
    </View>
  )
}

export default OnboardingScreen1
