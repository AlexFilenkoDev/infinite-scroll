import { IPassengers, IActionsType} from "../../../interfaces";

const initState:IPassengers  = []

const passengersReducer = (state = initState, action: IActionsType):IPassengers => {
  switch(action.type) {
    case 'SET_PASSENGERS':
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default passengersReducer;