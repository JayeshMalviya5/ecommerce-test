import { createStore } from "redux";
import Reducer, { reducer } from './Reducer';
export const InitialState = {
    toRenderProduct: [],
    inCart: [],
    units: []
}

export const store = createStore(reducer, InitialState)