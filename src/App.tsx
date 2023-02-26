/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react'
import Home from './screens/home'
import Splash from './screens/splash'
import { SafeAreaView, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => setShowSplash(false), 3000)
    checkStorage()
  }, [showSplash])

  const checkStorage = async () => {
    const currentUrl = await AsyncStorage.getItem('currentUrl')

    if (!currentUrl?.startsWith('https://www.mangago.me/')) {
      await AsyncStorage.setItem('currentUrl', 'https://www.mangago.me/')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#2F2F3B' barStyle='light-content' />
      {showSplash ? <Splash /> : <Home />}
    </SafeAreaView>
  )
}

export default App
