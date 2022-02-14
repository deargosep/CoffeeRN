import { StyleSheet } from 'react-native'
import { useTheme } from 'theme'

const styles = () => {
  const { Colors, Layout, Font } = useTheme()

  return StyleSheet.create({
    card: {
      backgroundColor: Colors.primaryLight,
      height: 230,
      width: 150,
      margin: 17,
      borderRadius: 16,
      padding: 12
    },
    image: {
      height: 136,
      width: 120,
      alignSelf: 'center'
    },
    name: {
      marginTop: 10,
      ...Font('bold', 'semibold'),
      height: 35
    },
    bottom: {
      ...Layout.rowHCenter,
      ...Layout.justifyContentBetween
    },
    price: {
      ...Font('light', 'semibold', Colors.black)
    },
    add: {
      width: 24,
      height: 24,
      backgroundColor: '#4795AD',
      borderRadius: 100 / 2
    }
  })
}

export default styles
