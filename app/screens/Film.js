// @flow

import React, {Component} from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native' 

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome Screen',
  }

  render() {
    return (
      <View style={styles.main}>
        <Image style={'https://placeimg.com/640/480/cat'} />
        <Text>Back</Text>
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
