// @flow
import React from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"

export class FilmItem extends React.Component {
  props: {
    title: string,
    image: string,
    clickHandler: () => void,
  }
  static defaultProps = {
    title: "best movie film",
    image: "https://placeimg.com/640/480/any",
    clickHandler: () => {},
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.clickHandler} style={this.props.style}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: this.props.image }} />
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  title: {
    marginTop: 10,
    color: "#232323",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "MontSerrat",
    fontWeight: "300",
    textAlign: "center",
    height: 32,
    lineHeight: 16,
  },
  image: {
    flex: 1,
    height: 230,
  },
})
