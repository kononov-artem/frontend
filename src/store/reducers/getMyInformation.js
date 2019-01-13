import {
    GET_MY_INFORMATION_REQUEST,
    GET_MY_INFORMATION_SUCCESS,
} from 'store/actions/getMyInformation'

const initialState = {
    myInformation: null,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_MY_INFORMATION_REQUEST:
            return state
        case GET_MY_INFORMATION_SUCCESS:
            return {
                ...state,
                myInformation: action.payload,
            }
        default:
            return state
    }
}
