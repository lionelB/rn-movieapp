// @flow

import Config from "react-native-config"
import { format } from "date-fns"

const API_KEY = Config.API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export const POSTER = "https://image.tmdb.org/t/p/w500"

async function apiFetch(base, params) {
  const queryString = toQueryString({
    ...params,
    api_key: API_KEY,
    language: "en-US",
  })

  try {
    console.log(`fetch:  ${BASE_URL}${base}${queryString}`)
    const response = await fetch(`${BASE_URL}${base}${queryString}`)
    console.log({ response })
    const data = await response.json()
    if (response.status !== 200) {
      throw {
        name: "APIError",
        code: data.status_code,
        message: data.status_message,
      }
    }
    return data.results
  } catch (error) {
    console.log(error)
    console.warn("[apiFetch]", error)
  }
}

export async function getUpcomingMovies() {
  try {
    const result = await apiFetch("/discover/movie", {
      "primary_release_date.gte": format(Date.now(), "YYYY-MM-DD"),
      sort_by: "popularity.desc",
    })
    return result
  } catch (error) {
    console.log("[getUpcomingMovies]", error)
  }
}

function toQueryString(data) {
  const qs = Object.entries(data).reduce(
    (acc, [key, value]) => `${acc}&${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    "?",
  )
  return qs
}
