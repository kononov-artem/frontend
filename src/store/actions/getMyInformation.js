import { BaseRequestAction } from 'store/actions/base'
import { API_URL } from '../../constants'

export const GET_MY_INFORMATION_REQUEST = 'getMyInformation/GET_MY_INFORMATION_REQUEST'
export const GET_MY_INFORMATION_SUCCESS = 'getMyInformation/GET_MY_INFORMATION_SUCCESS'

export class GetMyInformationAction extends BaseRequestAction {
    _getURL = () => {
        return `${API_URL}auth/me`
    }

    _request = () => {
        return {
            type: GET_MY_INFORMATION_REQUEST,
        }
    }

    _requestSuccess = resp => {
        return {
            type: GET_MY_INFORMATION_SUCCESS,
            payload: resp,
        }
    }
}
