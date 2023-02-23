/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react'
// import type {PropsWithChildren} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  // Image,
  // useColorScheme,
  Pressable,
  Linking,
  View,
} from 'react-native'
import { WebView } from 'react-native-webview'

const ErrorPreview: React.FC<{ onReload: any }> = ({ onReload }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.errorText}>
        An error occurred while loading the page.
      </Text>
      <Pressable onPress={onReload} style={styles.button}>
        <Text style={styles.buttonText}>Refresh</Text>
      </Pressable>
    </View>
  )
}

const App = () => {
  const [error, setError] = useState<unknown>()
  const [reload, setReload] = useState<boolean>()

  useEffect(() => {
    console.log('refresh')
    console.log(error)
  }, [reload])

  return (
    <>
      {error ? (
        <ErrorPreview
          onReload={() => {
            setReload((prevState) => !prevState)
            setError(null)
          }}
        />
      ) : (
        <View style={styles.container}>
          <WebView
            pullToRefreshEnabled
            renderError={(error) => <Text>{error}</Text>}
            onError={(errorPage) => setError(errorPage)}
            renderLoading={() => <Text>...</Text>}
            source={{ uri: 'https://www.mangago.me/' }}
          />
          <Text style={styles.text}>
            powered by mangago.me and created by:{' '}
            <Text
              style={styles.name}
              onPress={() =>
                Linking.openURL('https://kenneth-andales.github.io')
              }>
              @ken
            </Text>
          </Text>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  errorText: {
    fontSize: 20,
  },
  text: {
    backgroundColor: '#5c5a56',
    borderTopColor: '#787571',
    borderTopWidth: 1,
    color: '#ededed',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 5,
  },
  name: {
    color: '#34c95c',
  },
  button: {
    backgroundColor: '#5c5a56',
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#ededed',
  },
})

export default App
