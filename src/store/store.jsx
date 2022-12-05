import { compose, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'

import { rootReducer } from './root-reducer'



const persistConfig = {
    key : 'root',
    storage: storage,
    whiteList:['cart']

}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleware = [process.env.NODE_ENV !== 'production' && logger, thunk ].filter(Boolean);

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware))

export const store = createStore(persistedReducer,undefined,composedEnhancers);

export const persistor = persistStore(store);
