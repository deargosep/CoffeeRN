import { Dimensions, Platform, StyleSheet } from 'react-native'
import { useTheme } from 'theme'

const styles = () => {
  const { Colors, Layout, Font } = useTheme()

  return StyleSheet.create({
    page: {
      paddingTop: Platform.OS == 'ios' ? 50 : 20,
      ...Layout.fill,
      ...Layout.justifyContentBetween,
      backgroundColor: Colors.detailsBackground
    },
    container: {
      paddingHorizontal: 27
    },
    imageWrap: {
      ...Layout.rowHCenter,
      ...Layout.justifyContentBetween
    },
    image: {
      height: 300,
      width: 250,
      resizeMode: 'contain'
    },
    countColWrap: {
      ...Layout.colVCenter
    },
    count: {
      ...Font('regular', 'regular')
    },
    countButton: {
      borderRadius: 100 / 2,
      backgroundColor: Colors.white
    },
    card: {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      height: Dimensions.get('screen').height / 2.3,
      backgroundColor: Colors.background,
      padding: 32,
      ...Layout.justifyContentBetween
    },
    namePrice: {
      ...Layout.rowHCenter,
      ...Layout.justifyContentBetween
    },
    name: {
      ...Font('regular', 'big')
    },
    price: {
      ...Font('regular', 'large')
    },
    description: {
      borderTopWidth: 0.3,
      paddingTop: 24,
      marginTop: 22,
      ...Font('light', 'semiregular', Colors.gray)
    },
    button: {}
  })
}

export default styles
