// @flow
import React from "react"
import { FilmItem } from './film-item'
import { StyleSheet, FlatList } from "react-native"

export class FilmList extends React.Component {
  static defaultProps = {
    films: [
      {
        id: "1",
        name: "La dolce vita",
        image: {
          uri:
            "https://s2.qwant.com/thumbr/300x0/e/7/d7a0306dccf5bf7b65937cb688864d/b_0_q_0_p_0.jpg?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa3%2FDolce_vita1.gif&q=0&b=0&p=0&a=0"
        }
      },
      {
        id: "2",
        name: "The Amazing spider cochon",
        image: {
          uri:
            "https://s2.qwant.com/thumbr/0x0/f/b/254720879c3ec834faf1093b5da5a9/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fb6.img.v4.skyrock.net%2F6422%2F69546422%2Fpics%2F2788017684_small_1.jpg&q=0&b=1&p=0&a=1"
        }
      }
    ]
  }
  constructor(props) {
    super(props)
  }

  render() {
    return ( 
      <FlatList
      data={this.props.films}
      keyExtractor={item => item.id}
      renderItem={item => (
        <FilmItem
          style={styles.item} 
          name={item.name}
          image={item.image}
        />
      )}
    />
    )
  }
}

const styles = StyleSheet.create({

})
