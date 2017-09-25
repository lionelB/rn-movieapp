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
          <Image style={styles.image} resizeMode="cover" source={{ uri: this.props.image }} />
          <Text style={styles.title}> {this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: "#232323",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "MontSerrat",
    fontWeight: "300",
    textAlign: "center",
  },
  image: {
    height: 250,
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
})
