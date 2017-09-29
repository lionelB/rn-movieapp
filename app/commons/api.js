// @flow
import Config from "react-native-config"
import { format } from "date-fns"

const { API_KEY } = Config
const BASE_URL = "https://api.themoviedb.org/3"

export const POSTER = "https://image.tmdb.org/t/p/w500"

import { Films } from "../types"

async function apiFetch(base: string, params: Map<string, string>): Promise<Films> {
  const queryString = toQueryString(
    new Map([...params, ["api_key", API_KEY], ["language", "en-US"]]),
  )

  try {
    const response = await fetch(`${BASE_URL}${base}${queryString}`)
    const data = await response.json()
    if (response.status !== 200) {
      throw new Error({
        name: "APIError",
        code: data.status_code,
        message: data.status_message,
      })
    }
    return data.results
    /* eslint-disable-line brace-style */
  } catch (error) {
    /* eslint-disable-line brace-style */
    console.warn("[apiFetch]", error)
    return null
  }
}

export async function fetchUpcomingMovies(): Promise<Films> {
  try {
    const result = await apiFetch(
      "/discover/movie",
      new Map([
        ["primary_release_date.gte", format(Date.now(), "YYYY-MM-DD")],
        ["sort_by", "popularity.desc"],
      ]),
    )
    return result
  } catch (error) {
    console.warn("[getUpcomingMovies]", error)
    return null
  }
}

function toQueryString(data: Map<string, string>) {
  return [...data].reduce(
    (acc, [key, value]) => `${acc}&${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    "?",
  )
}
