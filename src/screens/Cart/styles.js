import { Platform, StyleSheet } from 'react-native'
import { useTheme } from 'theme'

const styles = (size) => {
  const { Colors, Layout, Font } = useTheme()

  const getColor = () => {
    switch (size) {
      case 'tall':
        return '#54B2CF'
      case 'short':
        return '#3CD2D2'
      case 'grande':
        return '#B88AF8'
    }
  }

  return StyleSheet.create({
    page: {
      backgroundColor: Colors.background,
      ...Layout.fill,
      paddingHorizontal: 27,
      paddingTop: Platform.OS == 'ios' ? 50 : 20
    },
    list: {},
    item: {
      ...Layout.row,
      height: 88,
      ...Layout.justifyContentBetween,
      marginBottom: 40
    },
    itemImage: {
      width: 88,
      height: 88,
      backgroundColor: Colors.primaryLight,
      borderRadius: 16
    },
    meta: {
      alignItems: 'flex-start',
      ...Layout.fill,
      marginLeft: 16,
      ...Layout.justifyContentBetween
    },
    name: {
      ...Font('regular', 'semiregular')
    },
    fromWhat: {
      ...Font('light', 'semititle', Colors.gray)
    },
    size: {
      backgroundColor: getColor(),
      borderRadius: 48,
      paddingHorizontal: 8,
      paddingVertical: 1
    },
    sizeText: {
      ...Font('regular', 'verysmall', Colors.white)
    },
    price: {
      ...Font('regular', 'semibiggest')
    },
    itemActions: {
      ...Layout.justifyContentAround,
      ...Layout.center
    },
    counter: {
      ...Font('regular', 'title')
    },
    incdec: {
      height: 28,
      width: 28,
      borderRadius: 100 / 2,
      borderColor: Colors.grayDimmed,
      borderWidth: 1
    },
    total: {
      borderTopWidth: 0.3,
      borderTopColor: Colors.grayDimmed,
      ...Layout.rowHCenter,
      ...Layout.justifyContentBetween,
      paddingTop: 10,
      marginBottom: 20
    },
    totalText: {
      ...Font('regular', 'semiregular')
    }
  })
}

export default styles
