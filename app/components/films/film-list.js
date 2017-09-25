// @flow
import React from "react"
import { FilmItem } from "./film-item"
import { StyleSheet, Text, View, FlatList } from "react-native"

import type { Film } from "../../types"

export class FilmList extends React.Component {
  props: {
    navigation: { navigate: () => void },
    films: Array<Film>,
    showDetail: () => void,
    nextPage: number,
    hasMoreResult: boolean,
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
      {
        vote_count: 0,
        id: 395993,
        video: false,
        vote_average: 0,
        title: "Stronger",
        popularity: 44.92432,
        poster_path: "/nnkxdFeY7YAgnicxkvwuxY7gVaT.jpg",
        original_language: "en",
        original_title: "Stronger",
        genre_ids: [18],
        backdrop_path: "/2T5tLmck0Kw7GTRvC1flgpH8fUK.jpg",
        adult: false,
        overview:
          "A victim of the Boston Marathon bombing in 2013 helps the police track down the killers while struggling to recover from devastating trauma.",
        release_date: "2017-09-22",
      },
      {
        vote_count: 5,
        id: 335984,
        video: false,
        vote_average: 0,
        title: "Blade Runner 2049",
        popularity: 44.705514,
        poster_path: "/cbRQVCia0urtv5UGsVFTdqLDIRv.jpg",
        original_language: "en",
        original_title: "Blade Runner 2049",
        genre_ids: [878],
        backdrop_path: "/zfWPeRgYpRjPZLGwwkfnTfaFnNh.jpg",
        adult: false,
        overview:
          "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
        release_date: "2017-10-04",
      },
      {
        vote_count: 4,
        id: 353570,
        video: false,
        vote_average: 0,
        title: "The Tiger Hunter",
        popularity: 37.99408,
        poster_path: "/kk13y6rBBgzRcsFYjEHK8LqMqXq.jpg",
        original_language: "en",
        original_title: "The Tiger Hunter",
        genre_ids: [35, 18],
        backdrop_path: "/mJsmMkKpt7l5txlIcH0ggRRkkNA.jpg",
        adult: false,
        overview:
          "A young Indian man comes to 1970s America on a quest for success, only to end up concocting an elaborate farce with a group of misfit roommates in order to woo his childhood crush.",
        release_date: "2017-09-22",
      },
      {
        vote_count: 0,
        id: 284053,
        video: false,
        vote_average: 0,
        title: "Thor: Ragnarok",
        popularity: 31.208165,
        poster_path: "/avy7IR8UMlIIyE2BPCI4plW4Csc.jpg",
        original_language: "en",
        original_title: "Thor: Ragnarok",
        genre_ids: [28, 12, 14, 878],
        backdrop_path: "/5wNUJs23rT5rTBacNyf5h83AynM.jpg",
        adult: false,
        overview:
          "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
        release_date: "2017-10-25",
      },
      {
        vote_count: 1,
        id: 400710,
        video: false,
        vote_average: 0,
        title: "Flatliners",
        popularity: 30.275434,
        poster_path: "/AumBWAKqS5UvTbAyH7ixazGQWUL.jpg",
        original_language: "en",
        original_title: "Flatliners",
        genre_ids: [18, 878],
        backdrop_path: "/AkA2uuBNQMrL5kNkOQX29tlUCwS.jpg",
        adult: false,
        overview:
          "Five medical students, hoping to gain insight into the mystery of what lies beyond the confines of life, embark on a daring and dangerous experiment. By stopping their hearts for short periods of time, each triggers a near-death experience. As the investigation becomes more and more perilous, they are forced to confront the sins of their pasts, as well as contend with the paranormal consequences of trespassing to the other side.",
        release_date: "2017-09-28",
      },
      {
        vote_count: 0,
        id: 396777,
        video: false,
        vote_average: 0,
        title: "Woodshock",
        popularity: 29.286055,
        poster_path: "/hiyANlfXavRqEVyBkurduTBk3pT.jpg",
        original_language: "en",
        original_title: "Woodshock",
        genre_ids: [53, 18],
        backdrop_path: "/mCDtYK962oCEqNBZ7nWkheBXCIj.jpg",
        adult: false,
        overview:
          "Theresa, a haunted young woman spiraling in the wake of profound loss, is torn between her fractured emotional state and the reality-altering effects of a potent cannabinoid drug.",
        release_date: "2017-09-22",
      },
      {
        vote_count: 0,
        id: 335360,
        video: false,
        vote_average: 0,
        title: "My Little Pony: The Movie",
        popularity: 27.479468,
        poster_path: "/15WbvKx7B7FiLZheK49Xc05oRIX.jpg",
        original_language: "en",
        original_title: "My Little Pony: The Movie",
        genre_ids: [12, 16, 10751, 14],
        backdrop_path: "/t9QTd0V3rbv6W25QbHJuC6zbIo1.jpg",
        adult: false,
        overview:
          "A new dark force threatens Ponyville, and the Mane 6 – Twilight Sparkle, Applejack, Rainbow Dash, Pinkie Pie, Fluttershy and Rarity – embark on an unforgettable journey beyond Equestria where they meet new friends and exciting challenges on a quest to use the magic of friendship and save their home.",
        release_date: "2017-10-05",
      },
      {
        vote_count: 0,
        id: 468455,
        video: false,
        vote_average: 0,
        title: "Haunters",
        popularity: 26.9308,
        poster_path: "/3iA9CP752Aq6NqOdz3onhLNjJ9z.jpg",
        original_language: "en",
        original_title: "Haunters",
        genre_ids: [99],
        backdrop_path: "/DrfWfuEiIBW2L4DDnwIoLTfTqX.jpg",
        adult: false,
        overview:
          "HAUNTERS is a heart-warming and heart-stopping documentary about people who sacrifice everything to create the most popular and polarizing haunted houses for Halloween - from boo-scare mazes to a controversial new subculture of extreme terror experiences.",
        release_date: "2017-09-22",
      },
      {
        vote_count: 1,
        id: 390061,
        video: false,
        vote_average: 0,
        title: "Mark Felt: The Man Who Brought Down the White House",
        popularity: 25.598862,
        poster_path: "/ggwsRh4p75jLMuc6gY12f9VXxwl.jpg",
        original_language: "en",
        original_title: "Mark Felt: The Man Who Brought Down the White House",
        genre_ids: [18, 36, 53],
        backdrop_path: "/de77GoUjgMDq5X8CoO4OwBEc74g.jpg",
        adult: false,
        overview:
          'The story of Mark Felt, who under the name "Deep Throat" helped journalists Bob Woodward and Carl Bernstein uncover the Watergate scandal in 1974.',
        release_date: "2017-09-29",
      },
      {
        vote_count: 0,
        id: 474706,
        video: false,
        vote_average: 0,
        title: "3ft Ball & Souls",
        popularity: 21.721189,
        poster_path: null,
        original_language: "en",
        original_title: "3ft Ball & Souls",
        genre_ids: [],
        backdrop_path: "/b4u07imVs3FWwcXLNvDUe582CLl.jpg",
        adult: false,
        overview:
          "Four strangers come together to commit suicide using explosives. But they discover that every time they blow themselves up, they end up sent to the past to right before they killed themselves.",
        release_date: "2017-09-22",
      },
      {
        vote_count: 0,
        id: 320288,
        video: false,
        vote_average: 0,
        title: "X-Men: Dark Phoenix",
        popularity: 20.608679,
        poster_path: "/b3wR7lmidhv1xYz6i50XI6NcOV1.jpg",
        original_language: "en",
        original_title: "X-Men: Dark Phoenix",
        genre_ids: [28, 878],
        backdrop_path: "/fvOqGzF47XRSRQUMHxwMIrMzl16.jpg",
        adult: false,
        overview:
          "Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!",
        release_date: "2018-10-31",
      },
      {
        vote_count: 0,
        id: 141052,
        video: false,
        vote_average: 0,
        title: "Justice League",
        popularity: 18.943888,
        poster_path: "/9rtrRGeRnL0JKtu9IMBWsmlmmZz.jpg",
        original_language: "en",
        original_title: "Justice League",
        genre_ids: [28, 12, 14, 878],
        backdrop_path: "/o5T8rZxoWSBMYwjsUFUqTt6uMQB.jpg",
        adult: false,
        overview:
          "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry, and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
        release_date: "2017-11-15",
      },
      {
        vote_count: 0,
        id: 421131,
        video: false,
        vote_average: 0,
        title: "Carmilla: The Movie",
        popularity: 18.136514,
        poster_path: "/lvq6Tb7uZe0oGsPipjiNLaa1LCL.jpg",
        original_language: "en",
        original_title: "Carmilla: The Movie",
        genre_ids: [12, 35, 14, 10749],
        backdrop_path: null,
        adult: false,
        overview:
          "Set 1826 days after the end of the show, the movie brings the Carmilla gang on a Scooby Doo-esque adventure after Laura finds another multiple choice card.",
        release_date: "2017-10-26",
      },
      {
        vote_count: 0,
        id: 55341,
        video: false,
        vote_average: 0,
        title: "Jeepers Creepers III",
        popularity: 17.263411,
        poster_path: "/99A2MXQ5Xf234oi6yhnzJne6IAZ.jpg",
        original_language: "en",
        original_title: "Jeepers Creepers III",
        genre_ids: [27, 9648, 53],
        backdrop_path: "/BnkthqcFe7XvIavm56acrkhXt5.jpg",
        adult: false,
        overview:
          "Taking place on the last day of the Creeper’s twenty-three-day feeding frenzy, as the skeptical Sergeant Tubbs teams up with a task force hellbent on destroying the Creeper for good. The Creeper fights back in gory glory as its enemies grow closer than ever before to learning the secret of its dark origins.",
        release_date: "2017-09-26",
      },
      {
        vote_count: 7,
        id: 406994,
        video: false,
        vote_average: 0,
        title: "Better Watch Out",
        popularity: 15.416375,
        poster_path: "/6JxWgIHdfMaS2u030j3giqRuVWS.jpg",
        original_language: "en",
        original_title: "Better Watch Out",
        genre_ids: [27, 53],
        backdrop_path: "/z5kSH7ijOI62RpZkjg0yCAG1Kn3.jpg",
        adult: false,
        overview:
          "On a quiet suburban street tucked within a 'safe neighborhood', a babysitter must defend a twelve-year-old boy from strangers breaking into the house, only to discover that this is FAR FROM a normal home invasion.",
        release_date: "2017-10-06",
      },
      {
        vote_count: 0,
        id: 424783,
        video: false,
        vote_average: 0,
        title: "Bumblebee",
        popularity: 15.028476,
        poster_path: "/btEpckwEpEvfxrZLqAuFxD1E3NT.jpg",
        original_language: "en",
        original_title: "Bumblebee",
        genre_ids: [28, 12, 878],
        backdrop_path: "/6eFzlVwb9FeS1XddzwMLO8nC7UF.jpg",
        adult: false,
        overview:
          "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
        release_date: "2018-07-25",
      },
      {
        vote_count: 0,
        id: 299536,
        video: false,
        vote_average: 0,
        title: "Avengers: Infinity War",
        popularity: 14.85637,
        poster_path: "/eTbcifqMr1KwYJuOQwxNDSbzJ1P.jpg",
        original_language: "en",
        original_title: "Avengers: Infinity War",
        genre_ids: [28, 12, 878],
        backdrop_path: "/ncEmkHADNggjR0dlerOIHqmiY0O.jpg",
        adult: false,
        overview:
          "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        release_date: "2018-04-12",
      },
      {
        vote_count: 0,
        id: 472424,
        video: false,
        vote_average: 0,
        title: "Gaga: Five Foot Two",
        popularity: 14.693744,
        poster_path: "/g0NONcnzzvWoASFjFoDqXZUW6SV.jpg",
        original_language: "en",
        original_title: "Gaga: Five Foot Two",
        genre_ids: [99],
        backdrop_path: "/dRf3qjozwDZcDeSCI8CoOuIwpJo.jpg",
        adult: false,
        overview:
          "Go behind the scenes with pop provocateur Lady Gaga as she releases a bold new album and prepares for her Super Bowl halftime show.",
        release_date: "2017-09-22",
      },
      {
        vote_count: 0,
        id: 428862,
        video: false,
        vote_average: 0,
        title: "Mobile Suit Gundam: The Origin V – Clash at Loum",
        popularity: 14.362405,
        poster_path: "/3Mt6zsG9CCmT8jncvtbEGr67Wxz.jpg",
        original_language: "ja",
        original_title: "機動戦士ガンダム THE ORIGIN ルウム編 予告",
        genre_ids: [28, 16, 878, 10752],
        backdrop_path: "/a9uVRDyq997r3DSM9yReq8Blp7v.jpg",
        adult: false,
        overview:
          'Universal Century 0079. Humanity has turned even space itself into a battlefield, and the Principality of Zeon forces advance after wiping out half the world\'s population by carrying out the Operation British (colony drop). In response, the Earth Federation Forces mobilize their overwhelming fighting strength to regain the advantage. The complex intrigues of the Zabi family... Sayla Mass, as she contends with the whims of fate... Hamon and Ramba Ral, who is now a pilot in the Zeon forces... Amuro and Fraw, leading peaceful lives at Side 7... a dark shadow falls across them all.  And the Zeon ace Char Aznable, driven by revenge, goes into action as the "Battle of Loum" finally begins.',
        release_date: "2017-10-01",
      },
    ],
    showDetail: serie => console.log("show detail " + JSON.stringify(serie)),
    nextPage: 1,
    hasMoreResult: true,
  }

  render() {
    const tupleList = this.props.films.reduce((films, film, index) => {
      switch (index % 2) {
        case 0:
          return [...films, [film]]
        case 1:
          const [tail, ...head] = films.reverse()
          return [...films.slice(0, -1), [...tail, film]]
      }
    }, [])

    const { navigate } = this.props.navigation

    return (
      <FlatList
        data={tupleList}
        keyExtractor={(item, index) => index}
        renderItem={({ item }, index) => {
          const [itemLeft, itemRight] = item
          return (
            <View style={styles.grid}>
              <FilmItem
                style={styles.gridItem}
                title={itemLeft.title}
                image={`https://image.tmdb.org/t/p/w500${itemLeft.poster_path}`}
                clickHandler={() => navigate("Film", { film: itemLeft })}
              />
              {itemRight && (
                <FilmItem
                  style={styles.gridItem}
                  title={itemRight.title}
                  image={`https://image.tmdb.org/t/p/w500${itemRight.poster_path}`}
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
    alignItems: "stretch",
  },
  gridItem: {
    flex: 1,
  },
})
