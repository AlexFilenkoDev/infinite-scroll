import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers";
import rootWatcher from "./sagas";

const saga = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(saga))

saga.run(rootWatcher)

export default store;