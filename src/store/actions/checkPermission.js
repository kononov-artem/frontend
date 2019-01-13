import { BaseRequestAction } from 'store/actions/base'
import { API_URL } from '../../constants'

export const CHECK_PERMISSION_REQUEST = 'checkPermission/CHECK_PERMISSION_REQUEST'
export const CHECK_PERMISSION_SUCCESS = 'checkPermission/CHECK_PERMISSION_SUCCESS'

export class CheckPermissionAction extends BaseRequestAction {
    _getURL = () => {
        return `${API_URL}check-permission/`
    }

    _request = () => {
        return {
            type: CHECK_PERMISSION_REQUEST,
        }
    }

    _requestSuccess = resp => {
        return {
            type: CHECK_PERMISSION_SUCCESS,
            payload: resp,
        }
    }
}
