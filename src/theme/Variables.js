import { store } from 'store/store'

export const Variables = () => {
  const getColorsByMode = () => {
    const colorScheme = store.getState().themeReducer.theme
    switch (colorScheme) {
      case 'light':
        return {
          white: 'white',
          black: 'black',
          gray: '#8E8E93',
          primaryLight: '#E4F3F7',
          primaryLightActive: '#54B2CF',
          primaryLightInactive: '#E4F3F7',
          button: '#323232',
          detailsBackground: 'transparent',
          background: '#FFFFFF'
        }
      case 'dark':
        return {
          white: 'black',
          black: 'white',
          gray: '#8E8E93',
          grayDimmed: '#353341',
          primaryLight: '#262836',
          primaryLightActive: '#4795AD',
          primaryLightInactive: '#262836',
          button: '#4795AD',
          detailsBackground: '#262836',
          background: '#1F1D2B'
        }
    }
  }
  return {
    colors: getColorsByMode(),
    fonts: {
      family: {
        regular: 'ReadexPro',
        medium: 'ReadexPro-Medium',
        bold: 'ReadexPro-Bold',
        light: 'ReadexPro-Light'
      },
      size: {
        verysmall: 9,
        small: 12,
        semititle: 13,
        title: 14,
        semiregular: 15,
        regular: 16,
        semibig: 17,
        big: 20,
        semibiggest: 24,
        biggest: 32,
        large: 36
      }
    }
  }
}
