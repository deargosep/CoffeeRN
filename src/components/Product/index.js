import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'theme'
import { useDispatch } from 'react-redux'
import { addToCart, increment } from 'store/modules/cart/actions'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper'

const Product = ({ item }) => {
  const { t } = useTranslation()
  const { Images, Colors } = useTheme()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { item: item })}
      style={styles().card}
    >
      <Image
        source={{ uri: item.image }}
        style={styles().image}
        height={136}
        width={120}
      />
      <Text style={styles().name}>{item.name}</Text>
      <View style={styles().bottom}>
        <Text style={styles().price}>{item.price} ₽</Text>
        <IconButton
          onPress={() => {
            dispatch(increment(item))
          }}
          style={styles().add}
          icon="plus"
          color={Colors.white}
        />
      </View>
    </TouchableOpacity>
  )
}

export default Product
