import React from 'react'
import styles from './styles'
import { Text } from 'react-native'
import { useTheme } from 'theme'
import { TouchableOpacity } from 'react-native'

const ButtonMD = ({ handlePress, text, style }) => {
  const { Colors } = useTheme()

  return (
    <TouchableOpacity
      style={[styles().button, style]}
      mode="contained"
      onPress={() => handlePress()}
    >
      <Text style={styles().buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonMD
