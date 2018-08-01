/**
 * Throw error if HTTP status code is not in the 200 range
 * @param res
 * @returns {Promise<any>}
 */
const checkStatus = res => {
    return (res.status >= 200 && res.status < 300)
        ? Promise.resolve(res)
        : Promise.reject(new RangeError(res.status))
}

/**
 *  Redirects to login page, if error code is HTTP 401 Unauthorized
 * @param error {RangeError}
 * @param history {History}
 * @param path {String}
 */
const redirectOnUnauthorized = (error, history, path) => {
    error.message === '401' && history.push(path)
}

/**
 * Generic Fetch method to be built upon
 * @param url
 * @param settings
 * @returns {Promise<Response>}
 */
const ajax = (url, settings) => {
    return fetch(url, settings)
        .then(checkStatus)
}

/**
 * Gets JSON from URL
 * @param url
 * @returns {Promise<any>}
 */
export const getJSON = url => {
    const settings = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    return ajax(url, settings)
        .then(res => res.json())
}

/**
 * Posts JSON to URL and receives JSON as response
 * @param url
 * @param body
 * @returns {Promise<any>}
 */
export const postJSON = (url, body) => {
    const settings = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }

    return ajax(url, settings)
        .then(res => res.json())
}

/**
 * Puts JSON to URL and receives JSON as response
 * @param url
 * @param body
 * @returns {Promise<any>}
 */
export const putJSON = (url, body) => {
    const settings = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }

    return ajax(url, settings)
        .then(res => res.json())
}

/**
 * Sends Delete request to URL and receives JSON as response
 * @param url
 * @param body
 * @returns {Promise<any>}
 */
export const deleteJSON = (url, body) => {
    const settings = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }

    return ajax(url, settings)
        .then(res => res.json())
}

/**
 * Returns getJSONAuth function, which in turn receives JSON from
 * a given URL, using the provided authToken. Redirects to pathOnUnauthorized /on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(url: String): Promise<Response | void>}
 */
export const getJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => url => {
    const settings = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    return ajax(`${url}/${authToken}`, settings)
        .then(res => res.json())
        .catch(e => redirectOnUnauthorized(e, history, pathOnUnauthorized))
}

/**
 * Returns postJSONAuth function, which Posts JSON to URL, using the
 * provided authToken, and receives JSON as response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(url: String, body: Object): Promise<Response | void>}
 */
export const postJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body) => {
    const settings = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }

    return ajax(`${url}/${authToken}`, settings)
        .then(res => res.json())
        .catch(e => redirectOnUnauthorized(e, history, pathOnUnauthorized))
}

/**
 * Returns putJSONAuth function, which Puts JSON to URL, using the
 * provided authToken, and receives JSON as response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(url: String, body: Object): Promise<Response | void>}
 */
export const putJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body) => {
    const settings = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }

    return ajax(`${url}/${authToken}`, settings)
        .then(res => res.json())
        .catch(e => redirectOnUnauthorized(e, history, pathOnUnauthorized))
}

/**
 * Returns deleteJSONAuth function, which sends a Delete request to URL, using the
 * provided authToken, and receives JSON as response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(url: String, body: Object): Promise<Response | void>}
 */
export const deleteJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body) => {
    const settings = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }

    return ajax(`${url}/${authToken}`, settings)
        .then(res => res.json())
        .catch(e => redirectOnUnauthorized(e, history, pathOnUnauthorized))
}

/**
 * Returns getJSONJwt function, which in turn receives JSON from
 * a given URL, using the provided JWT token. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(url: String): Promise<Response | void>}
 */
export const getJSONJwtFactory = (history, jwt, pathOnUnauthorized) => url => {
    const settings = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        }
    }

    return ajax(url, settings)
        .then(res => res.json())
        .catch(e => redirectOnUnauthorized(e, history, pathOnUnauthorized))
}

/**
 * Returns postJSONJwt function, which Posts JSON to URL, using the
 * provided JWT token, and receives JSON as response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(url: String, body: Object): Promise<Response | void>}
 */
export const postJSONJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body) => {
    const settings = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json',
            body: JSON.stringify(body)
        }
    }

    return ajax(url, settings)
        .then(res => res.json())
        .catch(e => redirectOnUnauthorized(e, history, pathOnUnauthorized))
}

/**
 * Returns putJSONJwt function, which Puts JSON to URL, using the
 * provided JWT token, and receives JSON as response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(url: String, body: Object): Promise<Response | void>}
 */
export const putJSONJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body) => {
    const settings = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json',
            body: JSON.stringify(body)
        }
    }

    return ajax(url, settings)
        .then(res => res.json())
        .catch(e => redirectOnUnauthorized(e, history, pathOnUnauthorized))
}

/**
 * Returns deleteJSONAuth function, which sends a Delete request to URL, using the
 * provided JWT token, and receives JSON as response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(url: String, body: Object): Promise<Response | void>}
 */
export const deleteJSONJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body) => {
    const settings = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json',
            body: JSON.stringify(body)
        }
    }

    return ajax(url, settings)
        .then(res => res.json())
        .catch(e => redirectOnUnauthorized(e, history, pathOnUnauthorized))
}
