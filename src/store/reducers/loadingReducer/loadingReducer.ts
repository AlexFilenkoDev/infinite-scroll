import { IActionsType} from "../../../interfaces";

const initState:boolean  = true

const loadingReducer = (state = initState, action: IActionsType):boolean => {
  switch(action.type) {
    case 'SET_LOADING_TRUE':
      return true;
    case 'SET_LOADING_FALSE':
      return false;
    default:
      return state;
  }
}

export default loadingReducer;