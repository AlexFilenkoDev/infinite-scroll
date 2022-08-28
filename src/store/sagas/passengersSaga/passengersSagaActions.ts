import { IGetPassengersAction, IPagesInfo } from "../../../interfaces"
import { GET_PASSENGERS } from "../../../actions"

export const getPassengers = (pagesInfo: IPagesInfo): IGetPassengersAction => {
  return {
    type: GET_PASSENGERS,
    payload: pagesInfo,
  }
}