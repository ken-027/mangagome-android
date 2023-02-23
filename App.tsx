/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  // useColorScheme,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';

function App() {
  return (
    <View style={styles.container}>
      <WebView
        renderError={error => <Text>{error}</Text>}
        onError={error => console.log(error)}
        renderLoading={() => <Text>...</Text>}
        source={{uri: 'https://www.mangago.me/'}}
      />
      <Text style={styles.text}>
        a website to web app created by: <Text style={styles.name}>@ken</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 18,
    justifyContent: 'center',
    // paddingTop: 10,
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
  text: {
    backgroundColor: '#ededed',
    borderTopColor: '#5c5a56',
    borderTopWidth: 1,
    color: '#5c5a56',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 5,
  },
  name: {
    color: '#cf6c30',
  },
});

export default App;
