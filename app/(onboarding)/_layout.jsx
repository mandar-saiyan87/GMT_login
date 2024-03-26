import React from 'react'
import { Stack } from 'expo-router'

function Layout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='/onBoardingScreen2' />
    </Stack>
  )
}

export default Layout
