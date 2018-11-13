import wretch from 'wretch'

/**
 * Gets JSON from URL
 * @param url
 * @returns {Promise<any>}
 */
export const getJSON = url => {
    return wretch(url)
        .accept('application/json')
        .get()
}

/**
 * Posts JSON to URL and returns Wretch response
 * @param url
 * @param body
 * @returns {Promise<any>}
 */
export const postJSON = (url, body) => {
    return wretch(url)
        .accept('application/json')
        .json(body)
        .post()
}

/**
 * Puts JSON to URL and returns Wretch response
 * @param url
 * @param body
 * @returns {Promise<any>}
 */
export const putJSON = (url, body) => {
    return wretch(url)
        .accept('application/json')
        .json(body)
        .put()
}

/**
 * Sends Delete request to URL and returns Wretch response
 * @param url
 * @param body
 * @returns {Promise<any>}
 */
export const deleteJSON = (url, body) => {
    return wretch(url)
        .accept('application/json')
        .json(body)
        .delete()
}

/**
 * Returns getJSONAuth function, which in turn receives JSON from
 * a given URL, using the provided authToken. Redirects to pathOnUnauthorized /on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*): Promise<{[p: string]: any}>}
 */
export const getJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => url => {
    return wretch(`${url}/${authToken}`)
        .accept('application/json')
        .get()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns postJSONAuth function, which Posts JSON to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=): ResponseChain}
 */
export const postJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body) => {
    return wretch(`${url}/${authToken}`)
        .accept('application/json')
        .json(body)
        .post()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns putJSONAuth function, which Puts JSON to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=): ResponseChain}
 */
export const putJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body) => {
    return wretch(`${url}/${authToken}`)
        .accept('application/json')
        .json(body)
        .put()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns deleteJSONAuth function, which sends a Delete request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param authToken {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*, *=): ResponseChain}
 */
export const deleteJSONAuthTokenFactory = (history, authToken, pathOnUnauthorized) => (url, body) => {
    return wretch(`${url}/${authToken}`)
        .accept('application/json')
        .json(body)
        .delete()
        .unauthorized(() => history.push(pathOnUnauthorized))
}

/**
 * Returns getJSONJwt function, which in turn receives JSON from
 * a given URL, using the provided JWT token. Redirects to pathOnUnauthorized on 401.
 * @param history {History}
 * @param jwt {String}
 * @param pathOnUnauthorized {String}
 * @returns {function(*=): Promise<{[p: string]: any}>}
 */
export const getJSONJwtFactory = (history, jwt, pathOnUnauthorized) => url => {
    return wretch(url)
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
 * @returns {function(*, *=): ResponseChain}
 */
export const postJSONJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body) => {
    return wretch(url)
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
 * @returns {function(*, *=): ResponseChain}
 */
export const putJSONJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body) => {
    return wretch(url)
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
 * @returns {function(*, *=): ResponseChain}
 */
export const deleteJSONJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body) => {
    return wretch(url)
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
 * @returns {function(*, *=): ResponseChain}
 */
export const postFormJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body) => {
    return wretch(url)
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
 * @returns {function(*, *=): ResponseChain}
 */
export const getFormJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body) => {
    return wretch(url)
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
 * @returns {function(*, *=): ResponseChain}
 */
export const putFormJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body) => {
    return wretch(url)
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
 * @returns {function(*, *=): ResponseChain}
 */
export const deæeteFormJwtFactory = (history, jwt, pathOnUnauthorized) => (url, body) => {
    return wretch(url)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .formData(body)
        .delete()
        .unauthorized(() => history.push(pathOnUnauthorized))
}
