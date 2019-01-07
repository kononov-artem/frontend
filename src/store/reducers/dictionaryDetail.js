import {
    DICTIONARIES_DETAIL_REQUEST,
    DICTIONARIES_DETAIL_SUCCESS,
} from 'store/actions/dictionaryDetail'

const initialState = {
    dictionary: null,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case DICTIONARIES_DETAIL_REQUEST:
            return state
        case DICTIONARIES_DETAIL_SUCCESS:
            return {
                ...state,
                dictionary: action.payload,
            }
        default:
            return state
    }
}
