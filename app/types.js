export type Film = {
  id: number,
  overview: string,
  poster_path: string,
  backdrop_path: string,
  name: string,
}
export type Films = Film[]
export type Dictionary<T> = { [string]: T }
