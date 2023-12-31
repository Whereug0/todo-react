import { FILTER_TODO } from "./types"


const initialState = "SHOW_ALL"

const todoFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case FILTER_TODO:
            return action.payload
        default:
            return state
    }
}

export default todoFilterReducer