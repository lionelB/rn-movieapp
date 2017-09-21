// @flow
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import { HomeScreen } from './screens/Home'

export default FilmApp = StackNavigator({
  Home: { screen: HomeScreen },
})
 