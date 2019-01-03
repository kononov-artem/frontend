import { BaseRequestAction } from 'store/actions/base'
import { API_TOKEN_CREATE } from '../../constants'


export const SIGNIN_REQUEST = 'signin/SIGNIN_REQUEST'
export const SIGNIN_SUCCESS = 'signin/SIGNIN_SUCCESS'

export class SignInAction extends BaseRequestAction {
    _getURL = () => {
        return API_TOKEN_CREATE
    }

    _request = () => {
        return {
            type: SIGNIN_REQUEST,
        }
    }

    _requestSuccess = resp => {
        return {
            type: SIGNIN_SUCCESS,
            payload: resp,
        }
    }
}
