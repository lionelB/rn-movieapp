import { Film } from "../types"
import { fetchUpcomingMovies } from "../commons/api"

export type ApiError = {
  name: "APIError",
  code: number,
  message: string,
}

export type HomeState = {
  isPending: boolean,
  movies: Film[],
  error: ApiError,
}
type GET_UPCOMING_MOVIES = "movie-app/home/GET_UPCOMING_MOVIES"
type GET_UPCOMING_MOVIES_PENDING = "movie-app/home/GET_UPCOMING_MOVIES_PENDING"
type GET_UPCOMING_MOVIES_FULFILLED = "movie-app/home/GET_UPCOMING_MOVIES_FULFILLED"
type GET_UPCOMING_MOVIES_REJECTED = "movie-app/home/GET_UPCOMING_MOVIES_REJECTED"

export type HomeAction = {
  type:
    | GET_UPCOMING_MOVIES
    | GET_UPCOMING_MOVIES_PENDING
    | GET_UPCOMING_MOVIES_FULFILLED
    | GET_UPCOMING_MOVIES_REJECTED,
  payload: Film[] | ApiError,
}

// Redux Action
export function getUpcomingMovies() {
  return {
    type: "GET_UPCOMING_MOVIES",
    payload: fetchUpcomingMovies(),
  }
}

const INITIAL_STATE = {
  pending: false,
  movies: [],
  error: null,
}

export function homeReducer(state: HomeState = INITIAL_STATE, action: HomeAction) {
  switch (action.type) {
    case "GET_UPCOMING_MOVIES_PENDING":
      return {
        ...state,
        isPending: true,
      }
    case "GET_UPCOMING_MOVIES_FULFILLED":
      return {
        ...state,
        isPending: false,
        movies: [...action.payload],
      }
    case "GET_UPCOMING_MOVIES_REJECTED":
      return {
        ...state,
        isPending: false,
        error: action.payload,
      }
  }
  return state
}
