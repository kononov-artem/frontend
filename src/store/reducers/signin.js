import { SIGNIN_REQUEST, SIGNIN_SUCCESS } from 'store/actions/signin'

const initialState = {
    token: null,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SIGNIN_REQUEST:
            return state
        case SIGNIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
            }
        default:
            return state
    }
}
