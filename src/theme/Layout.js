import { Platform, StyleSheet } from 'react-native'

export const Layout = () => {
  return StyleSheet.create({
    /* Column Layouts */
    column: {
      flexDirection: 'column'
    },
    columnReverse: {
      flexDirection: 'column-reverse'
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    colVCenter: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center'
    },
    /* Row Layouts */
    row: {
      flexDirection: 'row'
    },
    rowReverse: {
      flexDirection: 'row-reverse'
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    rowHCenter: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    /* Default Layouts */
    center: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    alignItemsCenter: {
      alignItems: 'center'
    },
    alignItemsStart: {
      alignItems: 'flex-start'
    },
    alignItemsStretch: {
      alignItems: 'stretch'
    },
    justifyContentCenter: {
      justifyContent: 'center'
    },
    justifyContentAround: {
      justifyContent: 'space-around'
    },
    justifyContentBetween: {
      justifyContent: 'space-between'
    },
    scrollSpaceAround: {
      flexGrow: 1,
      justifyContent: 'space-around'
    },
    scrollSpaceBetween: {
      flexGrow: 1,
      justifyContent: 'space-between'
    },
    selfStretch: {
      alignSelf: 'stretch'
    },
    /* Sizes Layouts */
    fill: {
      flex: 1
    },
    fullSize: {
      height: '100%',
      width: '100%'
    },
    fullWidth: {
      width: '100%'
    },
    fullHeight: {
      height: '100%'
    },
    /* Text */
    textCenter: {
      textAlign: 'center'
    },
    textJustify: {
      textAlign: 'justify'
    },
    textLeft: {
      textAlign: 'left'
    },
    textRight: {
      textAlign: 'right'
    }
  })
}
