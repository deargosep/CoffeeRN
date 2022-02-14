import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import {
  ActivityIndicator,
  Badge,
  IconButton,
  useTheme
} from 'react-native-paper'
import { useTheme as useMDTheme } from 'theme'

import Geocoder from 'react-native-geocoder-reborn'
import * as Location from 'expo-location'
import Product from 'components/Product'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from 'store/modules/theme/actions'
import RNRestart from 'react-native-restart'
import CategoriesList from 'components/Categories'

const Home = ({ navigation }) => {
  const { t, i18n } = useTranslation()

  const [coffees, setCoffees] = useState([])
  const [active, setActive] = useState('All')
  const [loading, setLoading] = useState(true)

  const getCoffees = () => {
    setLoading(true)
    const fireObj = () => {
      if (active != 'All') {
        return firestore().collection('Coffees').where('category', '==', active)
      } else {
        return firestore().collection('Coffees')
      }
    }
    return firestore()
      .collection('Coffees')
      .onSnapshot((querySnapshot) => {
        const coffees = []

        querySnapshot.forEach((documentSnapshot) => {
          coffees.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id
          })
          setCoffees(coffees)
          setLoading(false)
        })
      })
  }
  useEffect(() => {
    const subscriber = getCoffees()
    return () => subscriber()
  }, [])

  const getCoffeesArray = () => {
    if (active != 'All') {
      return coffees.filter((el) => {
        return el.category == active
      })
    } else {
      return coffees
    }
  }

  return (
    <SafeAreaView style={styles().container}>
      <AppBar />
      <CategoriesList active={active} setActive={setActive} />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={getCoffeesArray()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Product item={item} />}
        />
      )}
    </SafeAreaView>
  )
}

const AppBar = () => {
  const theme = useTheme()
  const { Images, Colors } = useMDTheme()
  const [location, setLocation] = useState(null)
  const navigation = useNavigation()
  const cart = useSelector((state) => state.cartReducer.cart)
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.themeReducer.theme)

  const changeTheme = () => {
    dispatch(setTheme(mode == 'dark' ? 'light' : 'dark'))
    RNRestart.Restart()
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      Geocoder.geocodePosition({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }).then((res) => {
        setLocation(`${res[0]['streetNumber']}, ${res[0]['streetName']}`)
      })
    })()
  }, [])

  return (
    <View style={styles().appbar}>
      <View style={styles().goodMorningColumn}>
        <Text style={styles().goodMorningText}>Good Morning</Text>
        <View style={styles().goodMorningLocation}>
          <Image source={Images.pin} style={styles().pin} />
          <Text style={styles().goodMorningLocationText}>
            {location ?? 'Not found'}
          </Text>
        </View>
      </View>
      <View>
        <IconButton
          color={Colors.black}
          onPress={() => navigation.navigate('Cart')}
          icon={'cart'}
        />
        {cart.length ? (
          <Badge size={15} style={styles().cartBadge}>
            {cart.length}
          </Badge>
        ) : (
          <></>
        )}
      </View>
      <IconButton
        color={Colors.black}
        onPress={() => changeTheme()}
        icon={'theme-light-dark'}
      />
    </View>
  )
}

export default Home
