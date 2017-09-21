// @flow

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { FilmList } from '../components/films/film-list'

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome Screen',
  }

  render() {
    return (
      <View style={styles.main}>
        <FilmList style={styles.films} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    flexDirection: 'column'
  },
})
