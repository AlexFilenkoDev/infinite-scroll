import store from "../store";
import {
  GET_PASSENGERS,
  SET_PASSENGERS,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  GO_NEXT_PAGE,
} from "../actions";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type IPassengers = Array<IPassenger>;
export type ILoadingActionsType =
  | typeof SET_LOADING_TRUE
  | typeof SET_LOADING_FALSE;
export type IActionsType =
  | IGetPassengersAction
  | ISetPassengersAction
  | ISetCurrentPage
  | ISetTotalPages;

export interface IPassenger {
  id: string;
  name: string;
  airlineLogo: string;
}

// Response
export interface IAirline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

export interface IPassengerResponce {
  _id: string;
  name: string;
  trips: number;
  airline: Array<IAirline>;
  __v: number;
}

export interface IPassengersResponce {
  totalPassengers: number;
  totalPages: number;
  data: Array<IPassengerResponce>;
}

export interface IPassengerProps {
  passenger: IPassenger;
}

export interface IListProps {
  title: string;
  items: Array<IPassenger>;
}

export interface IPagesInfo {
  current: number;
  total: number;
  size: number;
}

export interface ILoadingAction {
  type: ILoadingActionsType;
  payload: any;
}

export interface IGetPassengersAction {
  type: typeof GET_PASSENGERS;
  payload: IPagesInfo;
}

export interface ISetPassengersAction {
  type: typeof SET_PASSENGERS;
  payload: IPassengers;
}

export interface IGoNExtPage {
  type: typeof GO_NEXT_PAGE;
  payload: any;
}

export interface ISetCurrentPage {
  type: typeof SET_CURRENT_PAGE;
  payload: any;
}

export interface ISetTotalPages {
  type: typeof SET_TOTAL_PAGES;
  payload: number;
}
