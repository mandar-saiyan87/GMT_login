import React from 'react'
import { Stack } from 'expo-router'

function Layout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='(onboarding)' />
    </Stack>
  )
}

export default Layout