import { httpRequest } from 'http.js'

export class NotImplementedError extends Error {}

export class BaseRequestAction {
    _getURL = params => {
        throw new NotImplementedError()
    }

    _request = params => {
        throw new NotImplementedError()
    }

    _requestSuccess = resp => {
        throw new NotImplementedError()
    }

    makeRequest = (URIParams = {}, requestParams = {}, data = {}, method = 'GET') => {
        return dispatch => {
            Promise.all([dispatch(this._request({ URIParams, requestParams, data, method }))])
            return httpRequest(this._getURL(URIParams), method, requestParams, data).then(
                resp => {
                    Promise.all([dispatch(this._requestSuccess(resp))])
                },
                errorData => console.log(errorData)
            )
        }
    }
}
