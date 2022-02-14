import { StyleSheet } from 'react-native'
import { useTheme } from 'theme'

const styles = () => {
  const { Colors, Layout, Font } = useTheme()

  return StyleSheet.create({
    appbar: {
      ...Layout.rowCenter,
      marginTop: Platform.OS == 'ios' ? 54 : 20,
      paddingLeft: 23.5,
      marginBottom: 33
    },
    backButton: {
      position: 'absolute',
      left: 0,
      borderRadius: 100 / 2,
      backgroundColor: Colors.detailsBackground
    },
    title: {
      alignSelf: 'center',
      ...Font('bold', 'big')
    }
  })
}

export default styles
