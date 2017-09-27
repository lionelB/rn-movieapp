// @flow
import React from "react"
import { FilmItem } from "./film-item"
import { StyleSheet, Text, View, FlatList } from "react-native"

import type { Film } from "../../types"

export class FilmList extends React.Component {
  props: {
    navigation: { navigate: (screen: string, props?: {}) => void },
    films: Film[],
  }

  static defaultProps = {
    films: [
      {
        vote_count: 1,
        id: 369192,
        video: false,
        vote_average: 0,
        title: "Battle of the Sexes",
        popularity: 54.628463,
        poster_path: "/pD2Ttx8SCKHfA8H1cUC2rU5ZLPM.jpg",
        original_language: "en",
        original_title: "Battle of the Sexes",
        genre_ids: [36, 35],
        backdrop_path: "/doBnrABV56SyOxsa00oDfkaNQgM.jpg",
        adult: false,
        overview:
          "The true story of the 1973 tennis match between World number one Billie Jean King and ex-champ and serial hustler Bobby Riggs.",
        release_date: "2017-09-22",
      },
    ],
  }

  render() {
    const tupleList = this.props.films.reduce((films: Film[], film: Film, index) => {
      switch (index % 2) {
        case 0:
          return [...films, [film]]
        case 1:
          const [tail, ...head] = films.slice().reverse()
          return [...films.slice(0, -1), [...tail, film]]
      }
      return films
    }, [])
    const { navigate } = this.props.navigation

    return (
      <FlatList
        data={tupleList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }, index) => {
          const [itemLeft, itemRight] = item
          return (
            <View style={styles.grid}>
              <FilmItem
                style={[styles.gridItem, styles.gridItemLeft]}
                title={itemLeft.title}
                image={`https://image.tmdb.org/t/p/w500${itemLeft.poster_path ||
                  itemLeft.backdrop_path}`}
                clickHandler={() => navigate("Film", { film: itemLeft })}
              />
              {itemRight && (
                <FilmItem
                  style={[styles.gridItem, styles.gridItemRight]}
                  title={itemRight.title}
                  image={`https://image.tmdb.org/t/p/w500${itemRight.poster_path ||
                    itemRight.backdrop_path}`}
                  clickHandler={() => navigate("Film", { film: itemRight })}
                />
              )}
              {!itemRight && <View style={styles.gridItem} />}
            </View>
          )
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
  },
  gridItem: {
    flex: 1,
    padding: 10,
  },
  gridItemLeft: {
    marginRight: 5,
  },
  gridItemRight: {
    marginLeft: 5,
  },
})
