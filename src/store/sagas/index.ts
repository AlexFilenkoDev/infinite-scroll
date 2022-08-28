import passengersWatcher from "./passengersSaga/passengersSaga";

function* rootWatcher() {
  yield passengersWatcher()
}

export default rootWatcher;