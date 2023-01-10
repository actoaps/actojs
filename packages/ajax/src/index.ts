import wretch, { WretchOptions, WretchResponseChain } from 'wretch'
import AbortAddon, { AbortResolver, AbortWretch } from 'wretch/addons/abort'
import FormData, { FormDataAddon } from 'wretch/addons/formData'

declare type ResponseType = AbortResolver & WretchResponseChain<AbortWretch, AbortResolver>
    | AbortResolver & WretchResponseChain<AbortWretch & FormDataAddon, AbortResolver>

let responseHandling = (res: ResponseType) => res

export function setResponseHandling(handler: (res: ResponseType) => ResponseType) {
    responseHandling = handler
}

/**
 * Gets JSON from URL
 */
export const getJSON = (url: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .get())
}

/**
 * Posts JSON to URL and returns Wretch response
 */
export const postJSON = (url: string, body: object, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .json(body)
        .post())
}

/**
 * Puts JSON to URL and returns Wretch response
 */
export const putJSON = (url: string, body: object, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .json(body)
        .put())
}

/**
 * Sends Delete request to URL and returns Wretch response
 */
export const deleteJSON = (url: string, body: object, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .json(body)
        .delete())
}

/**
 * Submits a form request with the GET method and returns Wretch response.
 */
export const getForm = (url: string, body: object, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .formData(body)
        .get())
}

/**
 * Submits a form request with the POST method and returns Wretch response.
 */
export const postForm = (url: string, body: object, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .formData(body)
        .post())
}

/**
 * Submits a form request with the PUT method and returns Wretch response.
 */
export const putForm = (url: string, body: object, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .formData(body)
        .put())
}

/**
 * Submits a form request with the DELETE method and returns Wretch response.
 */
export const deleteForm = (url: string, body: object, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .formData(body)
        .delete())
}

/**
 * Receives JSON from a given URL, using the provided authToken.
 */
export const getJSONAuthToken = (url: string, authToken: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(`${url}/${authToken}`)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .get())
}

/**
 * Posts JSON to URL, using the provided authToken, and returns Wretch response.
 */
export const postJSONAuthToken = (url: string, body: object, authToken: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(`${url}/${authToken}`)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .json(body)
        .post())
}

/**
 * Puts JSON to URL, using the provided authToken, and returns Wretch response.
 */
export const putJSONAuthToken = (url: string, body: object, authToken: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(`${url}/${authToken}`)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .json(body)
        .put())
}

/**
 * Sends a Delete request to URL, using the provided authToken, and returns Wretch response.
 */
export const deleteJSONAuthToken = (url: string, body: object, authToken: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(`${url}/${authToken}`)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .json(body)
        .delete())
}

/**
 * Sends a GET form request to URL, using the provided authToken, and returns Wretch response.
 */
export const getFormAuthToken = (url: string, body: object, authToken: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(`${url}/${authToken}`)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .formData(body)
        .get())
}

/**
 * Sends a POST form request to URL, using the provided authToken, and returns Wretch response.
 */
export const postFormAuthToken = (url: string, body: object, authToken: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(`${url}/${authToken}`)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .formData(body)
        .post())
}

/**
 * Sends a PUT form request to URL, using the provided authToken, and returns Wretch response.
 */
export const putFormAuthToken = (url: string, body: object, authToken: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(`${url}/${authToken}`)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .formData(body)
        .put())
}

/**
 * Sends a DELETE form request to URL, using the provided authToken, and returns Wretch response.
 */
export const deleteFormAuthToken = (url: string, body: object, authToken: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(`${url}/${authToken}`)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .formData(body)
        .delete())
}

/**
 * Receives JSON from a given URL, using the provided JWT token.
 */
export const getJSONJwt = (url: string, jwt: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .options(options || {})
        .get())
}

/**
 * Posts JSON to URL, using the provided JWT token, and returns Wretch response.
 */
export const postJSONJwt = (url: string, body: object, jwt: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .options(options || {})
        .json(body)
        .post())
}

/**
 * Puts JSON to URL, using the provided JWT token, and returns Wretch response.
 */
export const putJSONJwt = (url: string, body: object, jwt: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .options(options || {})
        .json(body)
        .put())
}

/**
 * Sends a Delete request to URL, using the provided JWT token, and returns Wretch response.
 */
export const deleteJSONJwt = (url: string, body: object, jwt: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .options(options || {})
        .json(body)
        .delete())
}

/**
 * Posts a Form to a URL, using the provided JWT token, and returns Wretch response.
 */
export const postFormJwt = (url: string, body: object, jwt: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .options(options || {})
        .formData(body)
        .post())
}

/**
 * Gets a Form to a URL, using the provided JWT token, and returns Wretch response.
 */
export const getFormJwt = (url: string, body: object, jwt: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .options(options || {})
        .formData(body)
        .get())
}

/**
 * Puts a Form to a URL, using the provided JWT token, and returns Wretch response.
 */
export const putFormJwt = (url: string, body: object, jwt: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .options(options || {})
        .formData(body)
        .put())
}

/**
 * 'Deletes' a Form to a URL, using the provided JWT token, and returns Wretch response.
 */
export const deleteFormJwt = (url: string, body: object, jwt: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .addon(FormData)
        .errorType('json')
        .signal(controller)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .options(options || {})
        .formData(body)
        .delete())
}

/**
 * Get wretch factory, for building custom ajax functions
 */
export const getWretch = () => wretch
