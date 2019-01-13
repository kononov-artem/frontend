import { CHECK_PERMISSION_REQUEST, CHECK_PERMISSION_SUCCESS } from 'store/actions/checkPermission'

const initialState = {
    permission: null,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CHECK_PERMISSION_REQUEST:
            return state
        case CHECK_PERMISSION_SUCCESS:
            return {
                ...state,
                permission: action.payload,
            }
        default:
            return state
    }
}
