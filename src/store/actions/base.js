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

    makeRequest = params => {
        return dispatch => {
            Promise.all([dispatch(this._request(params))])
            return httpRequest(this._getURL(params)).then(
                (resp => {
                    Promise.all([
                        dispatch(this._requestSuccess(resp)),
                    ])
                }),
                errorData =>
                    console.log(errorData)
            )
        }
    }
}
