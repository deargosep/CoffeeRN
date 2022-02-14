import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper'

const Appbar = ({ text }) => {
  const { Images, Colors } = useTheme()
  const navigation = useNavigation()
  return (
    <View style={styles().appbar}>
      <IconButton
        color={Colors.black}
        onPress={() => navigation.goBack()}
        style={styles().backButton}
        icon="chevron-left"
      />
      <Text style={styles().title}>{text}</Text>
    </View>
  )
}

export default Appbar
