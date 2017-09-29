// @flow

import React from "react"
import { connect } from "react-redux"
import { getUpcomingMovies } from "./homeRedux"

import { StyleSheet, View } from "react-native"
import { FilmList } from "../components/films/film-list"

import type { AppState, Film } from "../types"
import type { NavigationScreenProp } from "react-navigation"

class HomeScreen extends React.Component {
  props: {
    navigation: NavigationScreenProp,
    movies: Film[],
    isFetched: boolean,
    getUpcomingMovies: () => void,
  }

  static navigationOptions = {
    title: "Popular movies",
  }

  componentDidMount() {
    if (!this.props.isFetched) {
      this.props.getUpcomingMovies()
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <FilmList navigation={this.props.navigation} films={this.props.movies} />
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

const HomeScreenConnected = connect(
  (state: AppState) => ({
    movies: state.home.movies,
    isFetched: state.home.isFetched,
  }),
  dispatch => ({
    getUpcomingMovies: () => dispatch(getUpcomingMovies()),
  }),
)(HomeScreen)

export default HomeScreenConnected
