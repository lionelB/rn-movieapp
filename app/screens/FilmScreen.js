// @flow
import React, { Component } from "react"
import { Image, StyleSheet, Text, ScrollView, View } from "react-native"
import type { Film } from "../types"

export class FilmScreen extends Component {
  props: {
    film: Film,
    navigation: any,
    navigate: (screen: string) => void,
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.film.title}`,
  })

  static defaultProps = {
    title: "My prefered film in 2017",
    image: "/mBDlsOhNOV1MkNii81aT14EYQ4S.jpg",
    overview:
      "Vikings follows the adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.",
  }

  render() {
    const { state } = this.props.navigation
    const { film } = state.params

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, flexDirection: "column" }}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: `https://image.tmdb.org/t/p/w500${film.poster_path}` }}
          />
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Text>{film.title}</Text>
            <Text>{film.overview}</Text>
          </View>
        </ScrollView>
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
  image: {
    flex: 1,
    height: 500,
  },
})
