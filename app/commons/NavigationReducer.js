// @flow
import { AppNavigator } from "./AppNavigator"
import type { AppState } from "../types"
import type { NavigationAction } from "react-navigation"

const HomeAction = AppNavigator.router.getActionForPathAndParams("Home")
export const INITIAL_STATE = AppNavigator.router.getStateForAction(HomeAction)
export function rootNavigationReducer(state: AppState = INITIAL_STATE, action: NavigationAction) {
  return AppNavigator.router.getStateForAction(action, state) || state
}
