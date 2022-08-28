import { IActionsType, IPagesInfo} from "../../../interfaces";

const initState:IPagesInfo  = {current: 1, total: 0, size: 40}

const pagesReducer = (state = initState, action: IActionsType):IPagesInfo  => {
  switch(action.type) {
    case 'SET_TOTAL_PAGES':
      return {...state, total: action.payload};
    case 'SET_CURRENT_PAGE':
      return {...state, current: state.current + 1};
    default:
      return state;
  }
}

export default pagesReducer;