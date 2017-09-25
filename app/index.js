import React, { Component } from "react"
import { AppRegistry, StyleSheet } from "react-native"
import { StackNavigator } from "react-navigation"

import { HomeScreen } from "./screens/Home"
import { FilmScreen } from "./screens/Film"

export const MovieApp = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Film: { screen: FilmScreen },
  },
  {
    headerMode: "none",
  },
)
