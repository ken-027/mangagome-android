/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { View, Text, StyleSheet, Image, Linking } from 'react-native'

const Splash: React.FC<unknown> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require('../assets/logo-text.png')}
          alt='Logo-text'
        />
        <Image
          style={[styles.image, styles.imageOnly]}
          source={require('../assets/logo.png')}
          alt='Logo'
        />
      </View>
      <Text style={styles.text}>Your Manga Site</Text>
      <View style={styles.creditText}>
        <Text style={styles.poweredBy}>
          Powered by:{' '}
          <Text onPress={() => Linking.openURL('https://www.mangago.me')}>
            <Text style={{ color: '#3DF5FF' }}>manga</Text>
            <Text style={{ color: '#FFFE7F' }}>go</Text>.me
          </Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2F3B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 50,
    resizeMode: 'contain',
  },
  imageOnly: {
    height: 100,
  },
  text: {
    marginTop: 10,
    color: '#3DF5FF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  creditText: {
    position: 'absolute',
    bottom: 16,
    alignItems: 'center',
  },
  poweredBy: {
    fontSize: 16,
    color: '#fff',
    fontFamily: '',
  },
  poweredValue: {
    color: '#b99de0',
    fontWeight: 'bold',
  },
})

export default Splash
