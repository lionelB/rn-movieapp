// @flow

import React from "react"
import { Text, Platform, StyleSheet } from "react-native"

export class AppHeader extends React.Component {
  static defaultProps = {
    title: "rn-Movie App",
  }
  props: {
    title: string,
  }
  render() {
    return (
      <Text selectable={false} style={styles.header}>
        {this.props.title}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "MontSerrat",
    fontWeight: "400",
    textAlign: "center",
    backgroundColor: "lightgray",
    color: "slategrey",
    fontSize: 24,
    lineHeight: 45,
    height: Platform.OS === "ios" ? 70 : 50,
    textShadowColor: "#eee",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
})
