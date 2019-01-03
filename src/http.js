export class HttpError extends Error {
    constructor(errorMessage, statusCode) {
        super()
        this.errorMessage = errorMessage
        this.statusCode = statusCode
    }
}

function getCookie(cookie_name) {
    const name = `${cookie_name}=`
    const cookies = document.cookie.split(';')

    for (let cookie of cookies) {
        cookie = cookie.trim()
        if (cookie.startsWith(name)) {
            return cookie.substring(name.length)
        }
    }
    return undefined
}

export function getURlParams(params = {}) {
    let parts = []
    for (let key in params) {
        const value = params[key]
        if (Array.isArray(value)) {
            for (let subValue of value) {
                parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(subValue)}`)
            }
        } else {
            parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        }
    }

    if (parts.length > 0) return parts.join('&')

    return ''
}

export function httpRequest(url, method = 'POST', params = {}, data = {}) {
    const contentType = 'application/json'
    let headers = {
        'Content-Type': 'application/json'
    }
    // const csrfTokenCookie = getCookie('csrftoken')
    // if (csrfTokenCookie) {
    //     headers['X-CSRFToken'] = csrfTokenCookie
    // }
    // console.log(url)
    let finalUrl = url
    let getParams = getURlParams(params)
    if (getParams) {
        finalUrl = `${finalUrl}?${getParams}`
    }

    const requestParams = {
        method,
        // credentials: 'same-origin',
        headers,
    }
    if (method !== 'GET') {
        requestParams.body = JSON.stringify({
            password: 123,
            username: 'artem',
        })
    }

    return fetcher(finalUrl, requestParams)
}

async function fetcher(url, requestParams) {
    try {
        const response = await fetch(url, requestParams)
        return processFetchResponse(response, url, requestParams)
    } catch (error) {
        throw new HttpError('Unknown error', error.response ? error.response.status : 500)
    }
}

async function processFetchResponse(resp, url, requestParams) {
    if (resp.ok) {
        const data = await resp.json()
        return data
    }

    let errorMessage
    if (resp.status === 503) {
        errorMessage = ''
    }
    if (resp.status === 401) {
        const currentLocation = window.location.href
        window.location = '/auth/ga-redirect/?next=' + currentLocation
    } else if (resp.status >= 400 && resp.status < 500) {
        errorMessage = await resp.text()
    } else if (resp.status >= 500) {
        errorMessage = 'Internal server error. Please, try later.'
    } else {
        errorMessage = 'Unknown error'
    }

    throw new HttpError(errorMessage, resp.status)
}
