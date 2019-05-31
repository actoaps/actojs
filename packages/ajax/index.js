import wretch from 'wretch'

/**
 * Gets JSON from URL
 * @param url
 * @param signal
 * @returns {Promise<any>}
 */
export const getJSON = (url, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .get()
}

/**
 * Posts JSON to URL and returns Wretch response
 * @param url
 * @param body
 * @param signal
 * @returns {Promise<any>}
 */
export const postJSON = (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .json(body)
        .post()
}

/**
 * Puts JSON to URL and returns Wretch response
 * @param url
 * @param body
 * @param signal
 * @returns {Promise<any>}
 */
export const putJSON = (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .json(body)
        .put()
}

/**
 * Sends Delete request to URL and returns Wretch response
 * @param url
 * @param body
 * @param signal
 * @returns {Promise<any>}
 */
export const deleteJSON = (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .json(body)
        .delete()
}

/**
 * Submits a form request with the GET method and returns Wretch response.
 * @param url
 * @param body
 * @param signal
 * @returns {ResponseChain & Promise<any>}
 */
export const getForm = (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .formData(body)
        .get()
}

/**
 * Submits a form request with the POST method and returns Wretch response.
 * @param url
 * @param body
 * @param signal
 * @returns {ResponseChain & Promise<any>}
 */
export const postForm = (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .formData(body)
        .post()
}

/**
 * Submits a form request with the PUT method and returns Wretch response.
 * @param url
 * @param body
 * @param signal
 * @returns {ResponseChain & Promise<any>}
 */
export const putForm = (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .formData(body)
        .put()
}

/**
 * Submits a form request with the DELETE method and returns Wretch response.
 * @param url
 * @param body
 * @param signal
 * @returns {ResponseChain & Promise<any>}
 */
export const deleteForm = (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .formData(body)
        .delete()
}

/**
 * Returns getJSONAuthToken function, which in turn receives JSON from
 * a given URL, using the provided authToken. Redirects to pathOnUnauthorized /on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=): ResponseChain}
 */
export const getJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, signal = new AbortController()) => {
    return wretch(`${url}/${authToken}`)
        .signal(signal)
        .accept('application/json')
        .get()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns postJSONAuthToken function, which Posts JSON to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const postJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(`${url}/${authToken}`)
        .signal(signal)
        .accept('application/json')
        .json(body)
        .post()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns putJSONAuthToken function, which Puts JSON to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const putJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(`${url}/${authToken}`)
        .signal(signal)
        .accept('application/json')
        .json(body)
        .put()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns deleteJSONAuthToken function, which sends a Delete request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const deleteJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(`${url}/${authToken}`)
        .signal(signal)
        .accept('application/json')
        .json(body)
        .delete()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns getFormAuthToken function, which sends a GET form request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const getFormAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(`${url}/${authToken}`)
        .signal(signal)
        .accept('application/json')
        .formData(body)
        .get()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns postFormAuthToken function, which sends a POST form request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const postFormAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(`${url}/${authToken}`)
        .signal(signal)
        .accept('application/json')
        .formData(body)
        .post()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns putFormAuthToken function, which sends a PUT form request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const putFormAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(`${url}/${authToken}`)
        .signal(signal)
        .accept('application/json')
        .formData(body)
        .put()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns deleteFormAuthToken function, which sends a DELETE form request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const deleteFormAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(`${url}/${authToken}`)
        .signal(signal)
        .accept('application/json')
        .formData(body)
        .delete()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns getJSONJwt function, which in turn receives JSON from
 * a given URL, using the provided JWT token. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*=, *=): ResponseChain}
 */
export const getJSONJwtFactory = (history, jwt, pathOnUnauthorized) => (url, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .get()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns postJSONJwt function, which Posts JSON to URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const postJSONJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .json(body)
        .post()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns putJSONJwt function, which Puts JSON to URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const putJSONJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .json(body)
        .put()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns deleteJSONAuth function, which sends a Delete request to URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const deleteJSONJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .json(body)
        .delete()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns postFormJwt function, which Posts a Form to a URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const postFormJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .formData(body)
        .post()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns getFormJwt function, which Gets a Form to a URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const getFormJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .formData(body)
        .get()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns putFormJwt function, which Puts a Form to a URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const putFormJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .formData(body)
        .put()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns deleteFormJwt function, which 'Deletes' a Form to a URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=, *=): ResponseChain}
 */
export const deleteFormJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body, signal = new AbortController()) => {
    return wretch(url)
        .signal(signal)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .formData(body)
        .delete()
        .unauthorized(() => history.push(pathOnUnauthorized))
}
