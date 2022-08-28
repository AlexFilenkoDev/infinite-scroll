import { takeEvery, put } from 'redux-saga/effects'
import passengersService from '../../../services/passengersService';
import { IPassengersResponce, IPassengers, IGetPassengersAction } from '../../../interfaces'
import { setPassengers } from '../../reducers/passengersReducer/passengersActions';
import { setLoadingFalse, setLoadingTrue } from '../../reducers/loadingReducer/loadingActions';
import { setTotalPages } from '../../reducers/pagesReducer/pagesActions';
import { GET_PASSENGERS } from '../../../actions';

function* passengersWorker(data: IGetPassengersAction) {
  yield put(setLoadingTrue());
  const {current, size} = yield data.payload
  const response: IPassengersResponce  = yield passengersService.fetchPassengers(current, size)
  yield put(setTotalPages(response.totalPages));
  const passengers: IPassengers = yield response.data.reduce((res: IPassengers, pas) => {
    return [
      ...res, 
      { id: pas._id  ,name: pas.name, airlineLogo: pas.airline[0].logo }
    ]
  }, [])
  yield put(setPassengers(passengers));
  yield put(setLoadingFalse());
  
}

function* passengersWatcher() {
  yield takeEvery(GET_PASSENGERS, passengersWorker)
}


export default passengersWatcher;
