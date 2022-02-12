import { createStore } from "redux";

import { data } from './dataObject';



const counterReducer = ( state = data, action) => {
    
    /*...*/

    return state;
}

const store = createStore(counterReducer);

export default store;