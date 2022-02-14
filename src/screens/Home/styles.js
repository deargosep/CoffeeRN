import { StyleSheet, Platform } from 'react-native'
import { useTheme } from 'theme'
import { range } from 'lodash'

const styles = () => {
  const { Colors, Layout, Font } = useTheme()

  return StyleSheet.create({
    appbar: {
      alignSelf: 'flex-start',
      ...Layout.rowHCenter,
      ...Layout.justifyContentBetween,
      marginTop: Platform.OS == 'ios' ? 50 : 20,
      paddingHorizontal: 24,
      ...Layout.fullWidth
    },
    goodMorningColumn: {
      ...Layout.colHCenter
    },
    goodMorningText: {
      ...Font('bold', 'regular', Colors.black),
      fontSize: 28
    },
    pin: {
      height: 24,
      width: 24,
      marginRight: 4
    },
    goodMorningLocation: {
      ...Layout.rowHCenter
    },
    goodMorningLocationText: {
      ...Font('light'),
      fontSize: 17,
      color: Colors.gray
    },
    container: {
      ...Layout.fill,
      ...Layout.alignItemsCenter,
      backgroundColor: Colors.background
    },
    text: {
      ...Layout.textCenter,
      ...Font('regular', 'large', Colors.black)
    },
    subText: {
      ...Layout.textCenter,
      ...Font('regular', 'regular', Colors.black),
      marginTop: 10
    },
    image: {
      height: 450,
      width: '100%'
    },
    cartBadge: {
      position: 'absolute',
      top: 5,
      right: 5
    }
  })
}

export default styles
