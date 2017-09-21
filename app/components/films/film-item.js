// @flow
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export class FilmItem extends React.Component {
  static defaultProps = {
    name: "best movie film",
    image: { uri: "https://placeimg.com/640/480/any" }
  };
  constructor(props) {
    super(props)
  }

  render() { 
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={this.props.image} />
        <Text style={styles.title}> {this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "stretch"
  },
  title: {
    color: "#232323",
    fontWeight: "bold",
    fontSize: 16,
    flex: 1
  },
  image: {
    width: 64,
    height: 48,
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.5
  }
});
