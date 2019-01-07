import { BaseRequestAction } from 'store/actions/base'
import { API_URL } from '../../constants'

export const DICTIONARIES_DETAIL_REQUEST = 'dictionaryDetail/ETAIL_REQUEST'
export const DICTIONARIES_DETAIL_SUCCESS = 'dictionaryDetail/DETAIL_SUCCESS'

export class GetDictionaryDetailAction extends BaseRequestAction {
    _getURL = (params) => {
        return `${API_URL}dictionary/${params.id}`
    }

    _request = () => {
        return {
            type: DICTIONARIES_DETAIL_REQUEST,
        }
    }

    _requestSuccess = resp => {
        return {
            type: DICTIONARIES_DETAIL_SUCCESS,
            payload: resp,
        }
    }
}
