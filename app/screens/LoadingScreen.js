import React from "react"
import { View, ActivityIndicator, StyleSheet, Text } from "react-native"

export class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <ActivityIndicator animating size="large" style={styles.loader} />
        <Text style={styles.textStyle}>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "montserrat-bold",
    color: "#fff",
    fontSize: 25,
  },
  loader: { height: 75 },
})
