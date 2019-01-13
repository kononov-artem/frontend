import { GET_USERS_REQUEST, GET_USERS_SUCCESS } from 'store/actions/getUsers'

const initialState = {
    users: null,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return state
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state
    }
}
