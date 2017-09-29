// @flow

import React from "react"
import { Provider } from "react-redux"
import App from "./commons/AppNavigator"
import { configureStore } from "./configureStore"

export class MovieApp extends React.Component {
  store = configureStore()
  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}
