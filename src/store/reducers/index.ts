import { combineReducers } from "redux"
import passengersReducer from "./passengersReducer/passengersReducer"
import loadingReducer from "./loadingReducer/loadingReducer";
import pagesReducer from "./pagesReducer/pagesReducer";

const rootReducer = combineReducers({
  passengers: passengersReducer,
  isLoading: loadingReducer,
  pagesInfo: pagesReducer,
})


export default rootReducer;