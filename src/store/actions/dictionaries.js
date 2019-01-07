import { BaseRequestAction } from 'store/actions/base'
import { API_URL } from '../../constants'

export const DICTIONARIES_REQUEST = 'dictionaries/DICTIONARIES_REQUEST'
export const DICTIONARIES_SUCCESS = 'dictionaries/DICTIONARIES_SUCCESS'

export class GetDictionariesAction extends BaseRequestAction {
    _getURL = () => {
        return `${API_URL}dictionaries`
    }

    _request = () => {
        return {
            type: DICTIONARIES_REQUEST,
        }
    }

    _requestSuccess = resp => {
        return {
            type: DICTIONARIES_SUCCESS,
            payload: resp,
        }
    }
}
