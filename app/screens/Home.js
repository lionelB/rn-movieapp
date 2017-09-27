// @flow

import React from "react"
import { StyleSheet, View } from "react-native"
import { FilmList } from "../components/films/film-list"
import { AppHeader } from "../components/ui/header"
import { getUpcomingMovies } from "../commons/api"
import type { Film } from "../types"

export class HomeScreen extends React.Component {
  props: {
    navigation: any,
  }

  state: {
    movies: Film[],
  }

  static navigationOptions = {
    title: "Popular movies",
  }

  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }
  componentDidMount() {
    getUpcomingMovies().then(movies => {
      this.setState({ movies })
    })
  }
  render() {
    return (
      <View style={styles.main}>
        <AppHeader title="Popular movies" />
        <FilmList navigation={this.props.navigation} films={this.state.movies} />
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
