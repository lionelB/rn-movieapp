// @flow

import logger from "redux-logger"
import thunk from "redux-thunk"
import promiseMiddleware from "redux-promise-middleware"
import { rootNavigationReducer } from "./commons/NavigationReducer"
import { homeReducer } from "./screens/homeRedux"
import { createStore, applyMiddleware, combineReducers } from "redux"

import { AppState } from "./types"

export function configureStore() {
  const appState: AppState = combineReducers({
    rootNavigation: rootNavigationReducer,
    home: homeReducer,
  })
  const middlewares = applyMiddleware(...[logger, thunk, promiseMiddleware()])

  return createStore(appState, undefined, middlewares)
}
