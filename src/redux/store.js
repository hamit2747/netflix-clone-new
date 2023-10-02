import { combineReducers, createStore,applyMiddleware} from "redux";
import MovieReducer from "./reducers/MovieReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers ({
    MovieReducer,
    
})

export default createStore(rootReducer,applyMiddleware(thunk))

