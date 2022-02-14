import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'theme'
import Appbar from 'components/Appbar'
import { IconButton } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import ButtonMD from 'components/Button'
import { increment } from 'store/modules/cart/actions'

const Details = ({ navigation, route }) => {
  const { t } = useTranslation()
  const { Images, Colors } = useTheme()

  const [count, setCount] = useState(1)

  const { item } = route.params
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(increment({ ...item, count: count }))
    navigation.goBack()
  }

  return (
    <View style={styles().page}>
      <View style={styles().container}>
        <Appbar />
        <View style={styles().imageWrap}>
          <Image source={{ uri: item.image }} style={styles().image} />
          <View style={styles().countColWrap}>
            <IconButton
              color={Colors.black}
              icon="plus"
              onPress={() => setCount((count) => count + 1)}
              style={styles().countButton}
            />
            <Text style={styles().count}>{count}</Text>
            <IconButton
              color={Colors.black}
              disabled={count == 1}
              icon="minus"
              onPress={() =>
                setCount((count) => {
                  if (count !== 1) {
                    return count - 1
                  } else {
                    return count
                  }
                })
              }
              style={styles().countButton}
            />
          </View>
        </View>
      </View>
      <View style={styles().card}>
        <View style={styles().meta}>
          <View style={styles().namePrice}>
            <Text style={styles().name}>{item.name}</Text>
            <Text style={styles().price}>{item.price} ₽</Text>
          </View>
          <Text style={styles().description}>
            {item.description ??
              'A holiday classic, our Peppermint Mocha infuses hand-pulled espresso with rich chocolate sauce, sweet peppermint, topped with a cloud of whipped cream.'}
          </Text>
        </View>
        <ButtonMD
          style={styles().button}
          handlePress={() => addToCart()}
          text={'Add to cart'}
        />
      </View>
    </View>
  )
}

export default Details
