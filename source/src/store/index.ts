import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga"; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './root-reducer';
// import logger from 'redux-logger';
import fetchSaga from './property/saga'

const persistConfig = {
    key: 'root',
    'storage': storage,
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, reducers)
export default () => {
    const store = createStore(
        persistedReducer,
        applyMiddleware(sagaMiddleware)
    )
    const persistor = persistStore(store)
    sagaMiddleware.run(fetchSaga);
    return { store, persistor }
}
