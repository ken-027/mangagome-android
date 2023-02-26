/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, Image, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

type props = {
  onBack: any
  onHome: any
  onForward: any
}

const Navigation: React.FC<props> = ({ onBack, onHome, onForward }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onHome}>
        <Image style={styles.home} source={require('../assets/logo.png')} />
      </Pressable>
      <View style={styles.nav}>
        <Icon
          style={styles.button}
          name='west'
          size={28}
          color={'#3DF5FF'}
          onPress={onBack}
        />
        <Icon
          style={styles.button}
          name='east'
          size={28}
          color={'#3DF5FF'}
          onPress={onForward}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2F2F3B',
    padding: 20,
    paddingTop: 8,
  },
  button: {
    paddingHorizontal: 10,
    borderRadius: 10,
    // backgroundColor: '#fff',
  },
  nav: {
    flexDirection: 'row',
    gap: 20,
  },
  home: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
})

export default Navigation
