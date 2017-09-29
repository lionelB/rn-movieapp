import type { Navigation } from "react-navigation"
import type { HomeState } from "./screens/homeRedux"

export type Film = {
  id: number,
  overview: string,
  poster_path: string,
  backdrop_path: string,
  name: string,
}
export type Films = Film[]
export type Dictionary<T> = { [string]: T }

export type AppState = {
  rootNavigation: Navigation,
  home: HomeState,
}
