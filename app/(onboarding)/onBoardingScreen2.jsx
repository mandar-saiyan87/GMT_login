import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

function OnboardingScreen2() {
  return (
    <View className='flex-1'>
      <ImageBackground
        source={require('../../assets/images/onb2.png')}
        resizeMode='cover'
        className='flex-1'
      >
        <StatusBar style='light' />
        <SafeAreaView />
      </ImageBackground>
    </View>
  )
}

export default OnboardingScreen2