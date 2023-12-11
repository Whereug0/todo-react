import { combineReducers } from "redux";
import todoReducer from "./todo/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {createStore} from 'redux'
import todoFilterReducer from "./filter/reducer";
const rootReducer = combineReducers ({
    todos: todoReducer,
    activeTodoFilter: todoFilterReducer
})

export const store = createStore(rootReducer, composeWithDevTools())