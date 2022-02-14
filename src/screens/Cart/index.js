import React, { useRef } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'theme'
import { IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { decrement, increment } from 'store/modules/cart/actions'
import ButtonMD from 'components/Button'
import Appbar from 'components/Appbar'

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart)
  const totalPrice = () => {
    let price = 0
    if (cart.length != 0) {
      cart.forEach((item, i) => {
        price += item.price * item.count
      })
    }
    return price
  }
  return (
    <View style={styles().page}>
      <Appbar text={'Your orders'} />
      <FlatList
        contentContainerStyle={styles().list}
        renderItem={({ item }) => <Item item={item} />}
        data={cart}
        ListFooterComponent={
          <>
            <View style={styles().total}>
              <Text style={styles().totalText}>Total</Text>
              <Text style={styles().price}>{totalPrice()} ₽</Text>
            </View>
            <ButtonMD text="Checkout" />
          </>
        }
      />
    </View>
  )
}

const Item = ({ item }) => {
  const dispatch = useDispatch()
  const { Colors } = useTheme()
  return (
    <View style={styles().item}>
      <Image
        source={{ uri: item.image }}
        width={72}
        height={79}
        style={styles().itemImage}
      />
      <View style={styles().meta}>
        <Text style={styles().name}>{item.name}</Text>
        <Text style={styles().fromWhat}>Milk and espresso</Text>
        <View style={styles(item.size).size}>
          <Text style={styles().sizeText}>{item.size?.toUpperCase()}</Text>
        </View>
        <Text style={styles().price}>{item.price} ₽</Text>
      </View>
      <View style={styles().itemActions}>
        <IconButton
          onPress={() => dispatch(increment(item))}
          style={styles().incdec}
          icon="plus"
          color={Colors.black}
        />
        <Text style={styles().counter}>{item.count ?? 1}</Text>
        <IconButton
          onPress={() => dispatch(decrement(item.id))}
          style={styles().incdec}
          icon="minus"
          color={Colors.black}
        />
      </View>
    </View>
  )
}

export default Cart
