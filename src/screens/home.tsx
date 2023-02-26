/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useRef, useCallback, useEffect } from 'react'
import {
  ScrollView,
  Text,
  Linking,
  StyleSheet,
  RefreshControl,
  ToastAndroid,
  BackHandler,
} from 'react-native'
import WebView from 'react-native-webview'
import Navigation from '../components/navigation'
import Loading from '../components/loading'
import Error from '../components/error'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
  const [error, setError] = useState<any>()
  const [onTop, setonTop] = useState<boolean>(true)
  const [canBack, setcanBack] = useState<boolean>(true)
  const [canForward, setcanForward] = useState<boolean>(false)
  const [currentUrl, setcurrentUrl] = useState<string>('')
  // const [refreshing, setRefreshing] = useState(false)
  const webRef = useRef<any>(null)
  let lastBackButtonPress: any = null

  useEffect(() => {
    getUrl()
    console.log(currentUrl)
  }, [currentUrl])

  useEffect(() => {}, [onTop])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backHandler)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canBack])

  const onRefresh = useCallback(() => {
    webRef.current.reload()
  }, [])

  const getUrl = async () => {
    const url = (await AsyncStorage.getItem('currentUrl')) as string
    setcurrentUrl(url)
  }

  const backHandler = () => {
    if (canBack) {
      webRef.current.goBack()
      return true
    }

    const currentTime = new Date().getTime()

    if (lastBackButtonPress && currentTime - lastBackButtonPress < 2000) {
      BackHandler.exitApp()
      return true
    }

    lastBackButtonPress = currentTime
    ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT)
    return true
  }

  const urlStore = async (url: string) => {
    try {
      await AsyncStorage.setItem('currentUrl', url)
      setcurrentUrl(url)
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {}
  }

  const navStateChange = async (navState: any) => {
    setcanBack(navState.canGoBack)
    setcanForward(navState.canGoForward)

    await urlStore(navState.url)
  }

  const toast = (title: string = '') => {
    ToastAndroid.showWithGravityAndOffset(
      title,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      120,
    )
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={false}
          enabled={onTop}
          onRefresh={onRefresh}
        />
      }
      contentContainerStyle={styles.container}>
      <Navigation
        onBack={() => (canBack ? webRef.current.goBack() : toast('No back'))}
        onForward={() =>
          canForward ? webRef.current.goForward() : toast('No next')
        }
        onHome={async () => {
          const home = 'https://www.mangago.me/'
          await AsyncStorage.setItem('currentUrl', home)
          // webRef.current.reload()
          await getUrl()
        }}
      />
      <WebView
        ref={webRef}
        onNavigationStateChange={navStateChange}
        pullToRefreshEnabled
        startInLoadingState
        onScroll={(event) => {
          const { contentOffset } = event.nativeEvent
          if (contentOffset.y > 0) {
            setonTop(false)
          } else {
            setonTop(true)
          }
        }}
        // onLoadStart={() => setRefreshing(true)}
        // onLoadEnd={() => setRefreshing(false)}
        renderError={() => <Error message={error.nativeEvent.title} />}
        onError={(err) => setError(err)}
        renderLoading={() => <Loading />}
        // injectedJavaScript=''
        source={{ uri: currentUrl }}
      />
      <Text style={styles.text}>
        created by:{' '}
        <Text
          style={styles.name}
          onPress={() => Linking.openURL('https://kenneth-andales.github.io')}>
          @ken
        </Text>
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#2F2F3B',
    // borderTopColor: '#787571',
    // borderTopWidth: 1,
    color: '#ededed',
    // textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 5,
  },
  name: {
    color: '#34c95c',
  },
})

export default Home
