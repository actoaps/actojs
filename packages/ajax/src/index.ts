import wretch, {WretcherOptions} from 'wretch'
import {History} from "history";

/**
 * Gets JSON from URL
 */
export const getJSON = (url: string, options?: WretcherOptions, controller = new AbortController()) => {
    return wretch(url)
        .signal(controller)
        .accept('application/json')
        .options(options)
        .get()
}

/**
 * Posts JSON to URL and returns Wretch response
 */
export const postJSON = (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
    return wretch(url)
        .signal(controller)
        .accept('application/json')
        .options(options)
        .json(body)
        .post()
}

/**
 * Puts JSON to URL and returns Wretch response
 */
export const putJSON = (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
    return wretch(url)
        .signal(controller)
        .accept('application/json')
        .options(options)
        .json(body)
        .put()
}

/**
 * Sends Delete request to URL and returns Wretch response
 */
export const deleteJSON = (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
    return wretch(url)
        .signal(controller)
        .accept('application/json')
        .options(options)
        .json(body)
        .delete()
}

/**
 * Submits a form request with the GET method and returns Wretch response.
 */
export const getForm = (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
    return wretch(url)
        .signal(controller)
        .accept('application/json')
        .options(options)
        .formData(body)
        .get()
}

/**
 * Submits a form request with the POST method and returns Wretch response.
 */
export const postForm = (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
    return wretch(url)
        .signal(controller)
        .accept('application/json')
        .options(options)
        .formData(body)
        .post()
}

/**
 * Submits a form request with the PUT method and returns Wretch response.
 */
export const putForm = (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
    return wretch(url)
        .signal(controller)
        .accept('application/json')
        .options(options)
        .formData(body)
        .put()
}

/**
 * Submits a form request with the DELETE method and returns Wretch response.
 */
export const deleteForm = (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
    return wretch(url)
        .signal(controller)
        .accept('application/json')
        .options(options)
        .formData(body)
        .delete()
}

function onUnauthorized (history: History, redirectPath: string) {
    history.push(redirectPath, { referrer: history.location.pathname })
}

/**
 * Returns getJSONAuthToken function, which in turn receives JSON from
 * a given URL, using the provided authToken. Redirects to pathOnUnauthorized /on 401.
 */
export const getJSONAuthTokenFactory = (history: History, authToken: string, pathOnUnauthorized: string) =>
    (url: string, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(`${url}/${authToken}`)
            .signal(controller)
            .accept('application/json')
            .options(options)
            .get()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
    }

/**
 * Returns postJSONAuthToken function, which Posts JSON to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const postJSONAuthTokenFactory = (history: History, authToken: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(`${url}/${authToken}`)
            .signal(controller)
            .accept('application/json')
            .options(options)
            .json(body)
            .post()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns putJSONAuthToken function, which Puts JSON to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const putJSONAuthTokenFactory = (history: History, authToken: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(`${url}/${authToken}`)
            .signal(controller)
            .accept('application/json')
            .options(options)
            .json(body)
            .put()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns deleteJSONAuthToken function, which sends a Delete request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const deleteJSONAuthTokenFactory = (history: History, authToken: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(`${url}/${authToken}`)
            .signal(controller)
            .accept('application/json')
            .options(options)
            .json(body)
            .delete()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns getFormAuthToken function, which sends a GET form request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const getFormAuthTokenFactory = (history: History, authToken: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(`${url}/${authToken}`)
            .signal(controller)
            .accept('application/json')
            .options(options)
            .formData(body)
            .get()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns postFormAuthToken function, which sends a POST form request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const postFormAuthTokenFactory = (history: History, authToken: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(`${url}/${authToken}`)
            .signal(controller)
            .accept('application/json')
            .options(options)
            .formData(body)
            .post()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns putFormAuthToken function, which sends a PUT form request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const putFormAuthTokenFactory = (history: History, authToken: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(`${url}/${authToken}`)
            .signal(controller)
            .accept('application/json')
            .options(options)
            .formData(body)
            .put()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns deleteFormAuthToken function, which sends a DELETE form request to URL, using the
 * provided authToken, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const deleteFormAuthTokenFactory = (history: History, authToken: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(`${url}/${authToken}`)
            .signal(controller)
            .accept('application/json')
            .options(options)
            .formData(body)
            .delete()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns getJSONJwt function, which in turn receives JSON from
 * a given URL, using the provided JWT token. Redirects to pathOnUnauthorized on 401.
 */
export const getJSONJwtFactory = (history: History, jwt: string, pathOnUnauthorized: string) =>
    (url: string, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(url)
            .signal(controller)
            .accept('application/json')
            .auth(`Bearer ${jwt}`)
            .options(options)
            .get()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns postJSONJwt function, which Posts JSON to URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const postJSONJwtFactory = (history: History, jwt: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(url)
            .signal(controller)
            .accept('application/json')
            .auth(`Bearer ${jwt}`)
            .options(options)
            .json(body)
            .post()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns putJSONJwt function, which Puts JSON to URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const putJSONJwtFactory = (history: History, jwt: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(url)
            .signal(controller)
            .accept('application/json')
            .auth(`Bearer ${jwt}`)
            .options(options)
            .json(body)
            .put()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns deleteJSONAuth function, which sends a Delete request to URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const deleteJSONJwtFactory = (history: History, jwt: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(url)
            .signal(controller)
            .accept('application/json')
            .auth(`Bearer ${jwt}`)
            .options(options)
            .json(body)
            .delete()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns postFormJwt function, which Posts a Form to a URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const postFormJwtFactory = (history: History, jwt: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(url)
            .signal(controller)
            .accept('application/json')
            .auth(`Bearer ${jwt}`)
            .options(options)
            .formData(body)
            .post()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns getFormJwt function, which Gets a Form to a URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const getFormJwtFactory = (history: History, jwt: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(url)
            .signal(controller)
            .accept('application/json')
            .auth(`Bearer ${jwt}`)
            .options(options)
            .formData(body)
            .get()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns putFormJwt function, which Puts a Form to a URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const putFormJwtFactory = (history: History, jwt: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(url)
            .signal(controller)
            .accept('application/json')
            .auth(`Bearer ${jwt}`)
            .options(options)
            .formData(body)
            .put()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Returns deleteFormJwt function, which 'Deletes' a Form to a URL, using the
 * provided JWT token, and returns Wretch response. Redirects to pathOnUnauthorized on 401.
 */
export const deleteFormJwtFactory = (history: History, jwt: string, pathOnUnauthorized: string) =>
    (url: string, body: object, options?: WretcherOptions, controller = new AbortController()) => {
        return wretch(url)
            .signal(controller)
            .accept('application/json')
            .auth(`Bearer ${jwt}`)
            .options(options)
            .formData(body)
            .delete()
            .unauthorized(() => onUnauthorized(history, pathOnUnauthorized))
}

/**
 * Get wretch factory, for building custom ajax functions
 */
export const getWretch = () => wretch
