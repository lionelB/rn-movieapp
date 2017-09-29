// @flow

import logger from "redux-logger"
import thunk from "redux-thunk"
import promiseMiddleware from "redux-promise-middleware"
import { autoRehydrate } from "redux-persist"

import { rootNavigationReducer } from "./commons/NavigationReducer"
import { homeReducer } from "./screens/homeRedux"
import { createStore, applyMiddleware, combineReducers, compose } from "redux"

import { AppState } from "./types"

export function configureStore() {
  const appState: AppState = combineReducers({
    rootNavigation: rootNavigationReducer,
    home: homeReducer,
  })
  const middlewares = compose(
    applyMiddleware(...[logger, thunk, promiseMiddleware()]),
    autoRehydrate(),
  )

  return createStore(appState, undefined, middlewares)
}
