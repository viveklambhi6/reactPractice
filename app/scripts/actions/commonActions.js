import * as types from "../constants/constants";
export function saveInputValue(value) {
    return {
        type: types.SAVE_INPUT_DATA,
        data: value
    }
}

export function increment() {
    return {
        type: types.INCREMENT,
        data: 1
    }
}

export function addCounter(value) {
    return {
        type: types.ADD_COUNTER,
        data: value
    }
}

export function decrement(value) {
    return {
        type: types.DEC_COUNTER,
        data: value
    }
}