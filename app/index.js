// @flow
import React from "react"
import { AsyncStorage } from "react-native"
import { Provider } from "react-redux"
import App from "./commons/AppNavigator"
import { configureStore } from "./configureStore"
import { persistStore } from "redux-persist"
import { LoadingScreen } from "./screens/LoadingScreen"
import type { AppState } from "./types"

export class MovieApp extends React.Component {
  store: AppState
  state: {
    isRehydrated: boolean,
  }
  constructor() {
    super()
    this.store = configureStore()
    this.state = {
      isRehydrated: false,
    }
    persistStore(this.store, { storage: AsyncStorage }, () => {
      this.setState(state => ({
        ...state,
        isRehydrated: true,
      }))
    })
  }

  render() {
    if (!this.state.isRehydrated) {
      return <LoadingScreen />
    } else {
      return (
        <Provider store={this.store}>
          <App />
        </Provider>
      )
    }
  }
}
