// @flow

import React from "react"
import { connect } from "react-redux"
import { BackHandler } from "react-native"
import {
  addNavigationHelpers,
  NavigationActions,
  NavigationState,
  StackNavigator,
} from "react-navigation"

import HomeScreen from "../screens/HomeScreen"
import { FilmScreen } from "../screens/FilmScreen"
import type { AppState } from "../types"

export const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Film: { screen: FilmScreen },
  },
  {
    initialRouteName: "Home",
  },
)
// const AppWithNavigationState = ({ dispatch, rootNavigation }) => (
//   <AppNavigator navigation={addNavigationHelpers({ dispatch, state: rootNavigation })} />
// )

// const mapStateToProps = (state: AppState) => ({
//   rootNavigation: state.rootNavigation,
// })

// export default connect(mapStateToProps)(AppWithNavigationState)
class AppNavigatorWithNavigation extends React.Component {
  props: {
    dispatch: (action: NavigationActions) => void,
    rootNavigation: NavigationState,
  }

  onBackPress = () => {
    const { dispatch, rootNavigation } = this.props
    if (rootNavigation.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  }
  componentWillUnmout() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
  }
  render() {
    const { dispatch, rootNavigation } = this.props
    const navigation = addNavigationHelpers({
      dispatch,
      state: rootNavigation,
    })
    return <AppNavigator navigation={navigation} />
  }
}

const mapStateToProps = (state: AppState) => ({
  rootNavigation: state.rootNavigation,
})

export default connect(mapStateToProps)(AppNavigatorWithNavigation)
