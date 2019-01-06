import { DICTIONARIES_REQUEST, DICTIONARIES_SUCCESS } from 'store/actions/dictionaries'

const initialState = {
    dictionaries: null,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case DICTIONARIES_REQUEST:
            return state
        case DICTIONARIES_SUCCESS:
            return {
                ...state,
                dictionaries: action.payload,
            }
        default:
            return state
    }
}
