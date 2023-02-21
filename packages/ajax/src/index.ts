import wretch, {WretchOptions, WretchResponseChain} from 'wretch'
import AbortAddon, { AbortResolver, AbortWretch } from 'wretch/addons/abort'
import FormData, { FormDataAddon } from 'wretch/addons/formData'

export declare type AbortResolverResponse = AbortResolver & WretchResponseChain<AbortWretch, AbortResolver>
export declare type FormDataResponse = AbortResolver & WretchResponseChain<AbortWretch & FormDataAddon, AbortResolver>

export declare type ResponseType = AbortResolverResponse | FormDataResponse

let responseHandling = <T = ResponseType> (res: T) => res

export function setResponseHandling (handler: (x: ResponseType) => ResponseType) {
    // @ts-ignore
    responseHandling = handler
}

/**
 * Gets JSON from URL
 */
export const getJSON = (url: string, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
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
        .signal(controller)
        .accept('application/json')
        .options(options || {})
        .json(body)
        .delete())
}

/**
 * Submits a form request with the POST method and returns Wretch response.
 */
export const postForm = (url: string, body: object, options?: WretchOptions, controller = new AbortController()) => {
    return responseHandling(wretch(url)
        .addon(AbortAddon())
        .addon(FormData)
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
        .signal(controller)
        .accept('application/json')
        .auth(`Bearer ${jwt}`)
        .options(options || {})
        .formData(body)
        .delete())
}

/**
 * Exposes a builder to build your own custom request, using JWT auth and the rest of the acto/ajax setup.
 * @param url
 * @param jwt
 * @param reqBuilder
 * @param controller
 */
export const customReqJwt = (url: string, jwt: string, reqBuilder: (builder: AbortWretch) => ResponseType, controller = new AbortController()) => {
    const baseRequest = wretch(url)
        .addon(AbortAddon())
        .signal(controller)
        .auth(`Bearer ${jwt}`)

    return responseHandling(reqBuilder(baseRequest))
}
