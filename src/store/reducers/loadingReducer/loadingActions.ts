import { ILoadingAction } from "../../../interfaces"
import { SET_LOADING_TRUE, SET_LOADING_FALSE } from "../../../actions"

export const setLoadingTrue = (): ILoadingAction => {
  return {
    type: SET_LOADING_TRUE,
    payload: [],
  }
}
export const setLoadingFalse = (): ILoadingAction => {
  return {
    type: SET_LOADING_FALSE,
    payload: [],
  }
}