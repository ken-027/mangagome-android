/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Loading: React.FC<unknown> = () => {
  useEffect(() => {}, [])

  const RenderComponent: React.FC<{}> = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    useEffect(() => {
      setTimeout(() => {
        setToggle((prevState) => !prevState)
      }, 0)
    }, [toggle])

    return (
      <Icon
        name={`hourglass-${toggle ? 'bottom' : 'top'}`}
        size={30}
        color='#fff'
      />
    )
  }

  return (
    <View style={styles.loading}>
      <Image
        style={styles.loadingImage}
        source={require('../assets/logo.png')}
      />
      <View style={styles.loadingWrapper}>
        <RenderComponent />
        <Text style={styles.loadingText}>Loading</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: '#2F2F3B',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  loadingImage: {
    height: 100,
    resizeMode: 'contain',
  },
  loadingWrapper: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
})

export default Loading
