import {createStore, combineReducers} from "redux";
import portfolioReducer from "./portfolioReducer";



const rootReducer = combineReducers({
    portfolioPage: portfolioReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

const store = createStore(rootReducer, undefined);

export {store};