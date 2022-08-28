import { ISetCurrentPage, ISetTotalPages } from "../../../interfaces"
import { SET_CURRENT_PAGE, SET_TOTAL_PAGES } from "../../../actions"

export const setCurrentPage = (): ISetCurrentPage => {
  return {
    type: SET_CURRENT_PAGE,
    payload: [],
  }
}
export const setTotalPages = (totalPages: number): ISetTotalPages => {
  return {
    type: SET_TOTAL_PAGES,
    payload: totalPages,
  }
}
