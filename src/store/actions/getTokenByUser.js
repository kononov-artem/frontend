import { BaseRequestAction } from 'store/actions/base'
import { API_URL } from '../../constants'

export const GET_TOKEN_BY_USER_REQUEST = 'getTokenByUser/GET_TOKEN_BY_USER_REQUEST'
export const GET_TOKEN_BY_USER_SUCCESS = 'getTokenByUser/GET_TOKEN_BY_USER_SUCCESS'

export class GetTokenByUserAction extends BaseRequestAction {
    _getURL = () => {
        return `${API_URL}get-token-by-user/`
    }

    _request = () => {
        return {
            type: GET_TOKEN_BY_USER_REQUEST,
        }
    }

    _requestSuccess = resp => {
        return {
            type: GET_TOKEN_BY_USER_SUCCESS,
            payload: resp,
        }
    }
}
