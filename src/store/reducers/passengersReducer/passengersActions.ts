import { ISetPassengersAction, IPassengers } from "../../../interfaces"
import { SET_PASSENGERS } from "../../../actions"

export const setPassengers = (passengers: IPassengers): ISetPassengersAction => {
  return {
    type: SET_PASSENGERS,
    payload: passengers,
  }
}