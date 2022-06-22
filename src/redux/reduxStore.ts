import {createStore, combineReducers} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import portfolioReducer from "./portfolioReducer";

const persistConfig = {
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    portfolioPage: portfolioReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, undefined);
const persistor = persistStore(store)

export {store, persistor};