import React, { useEffect } from 'react'
import { store } from './src/store/store'
import { Provider } from 'react-redux'
import AppRouter from './src/router/AppRouter'
import { Provider as PaperProvider } from 'react-native-paper'
import './src/translation'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './src/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <AppRouter />
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
