// @flow

import React from "react"
import { StyleSheet, View } from "react-native"
import { FilmList } from "../components/films/film-list"
import { AppHeader } from "../components/ui/header"

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Popular movies",
  }
  render() {
    return (
      <View style={styles.main}>
        <FilmList navigation={this.props.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
})
