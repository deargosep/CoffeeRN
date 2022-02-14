import { StyleSheet } from 'react-native'
import { useTheme } from 'theme'

const styles = () => {
  const { Colors, Layout, Font } = useTheme()

  return StyleSheet.create({
    button: {
      borderRadius: 64,
      backgroundColor: Colors.button,
      padding: 20,
      ...Layout.center
    },
    buttonText: {
      ...Font('regular', 'semibig', Colors.white)
    }
  })
}

export default styles
