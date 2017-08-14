
import { FETCH_WEATHER } from '../actions/index';

// set the state to an array, so the page and show different cities weather,
// as the user searched.
export default function (state = [], action) {
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);
            // It can be written as the code below in ES6
            return [action.payload.data, ...state];
    }
    return state;
}