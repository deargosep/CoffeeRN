import { StyleSheet } from 'react-native'
import { useTheme } from 'theme'

const styles = (active) => {
  const { Colors, Layout, Font } = useTheme()

  return StyleSheet.create({
    list: {
      alignItems: 'flex-start',
      paddingVertical: 10,
      marginHorizontal: 10,
      height: 60
    },
    item: {
      height: 30,
      borderRadius: 24,
      marginRight: 14,
      paddingHorizontal: 18,
      ...Layout.center,
      backgroundColor: active
        ? Colors.primaryLightActive
        : Colors.primaryLightInactive
    },
    itemText: {
      ...Font(
        'medium',
        'title',
        active ? Colors.primaryLightInactive : Colors.primaryLightActive
      )
    }
  })
}

export default styles
