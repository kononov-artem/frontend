import { GET_TOKEN_BY_USER_REQUEST, GET_TOKEN_BY_USER_SUCCESS } from 'store/actions/getTokenByUser'

const initialState = {
    userToken: null,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_TOKEN_BY_USER_REQUEST:
            return state
        case GET_TOKEN_BY_USER_SUCCESS:
            return {
                ...state,
                userToken: action.payload,
            }
        default:
            return state
    }
}
