import { BaseRequestAction } from 'store/actions/base'
import { API_URL } from '../../constants'

export const GET_USERS_REQUEST = 'getUsers/GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'getUsers/GET_USERS_SUCCESS'

export class GetUsersAction extends BaseRequestAction {
    _getURL = () => {
        return `${API_URL}users/`
    }

    _request = () => {
        return {
            type: GET_USERS_REQUEST,
        }
    }

    _requestSuccess = resp => {
        return {
            type: GET_USERS_SUCCESS,
            payload: resp,
        }
    }
}
