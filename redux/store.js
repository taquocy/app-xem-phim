// redux/store.js
import {createStore, combineReducers, applyMiddleware} from 'redux';
import MovieReducer from './movieReducer';

// Import thư viện Sagas
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import rootSaga from '../sagas';

const rootReducer = combineReducers({
  movie: MovieReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// Thêm middleware Sagas vào redux
sagaMiddleware.run(rootSaga);

export default store;
