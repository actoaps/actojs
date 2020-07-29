# ActoJS Ajax
Ajax, in lack of a better name, is a collection of handy HTTP abstractions, built on top of [Wretch](https://github.com/elbywan/wretch).  

Ajax is split into 3 categories:  
* Simple (no authorization)  
* AuthToken (Authtoken is appended to the end of the URI)  
* JWT (Sets Authorization header with a given JWT as the bearer)  

The `Simple` category is just a set of simple functions, abstracting away a bit of logic. 
These are the exact same functions as the `AuthToken` and `JWT` functions, just without the authorization bit.
They all set an accept header with `application/json`.

As Ajax is built on top of Wretch, a Wretch ResponseChain is returned in favor of a regular Promise. 
A Wretch Response is chainable, just like a Promise, but there are a series of additional helper functions that you can use to further configure your request.  
For instance, you can chain a series of [Catchers](https://github.com/elbywan/wretch#catchers) which you then follow by a [Response Type](https://github.com/elbywan/wretch#response-types).  

In order to configure defaults for how you would like to handle different HTTP response status codes, Ajax exposes a `setResponseHandling(handler: (res: ResponseChain) => ResponseChain): void` function. By setting a default response handler using this function, every single HTTP request made through the Ajax library will use those defaults. For example, if you want to write a log error every time that you receive an HTTP 500, you could do the following: `setResponseHandling(res => res.internalError(() => console.log('You just experienced an internal server error...')))`. Now if you call `getJson('/api/user')` and it receives an HTTP 500 status code, "You just experienced an internal server error" will be written to stdout. This can also be very useful, if you want to show your users the login page, whenever they receive an HTTP 401. These however are just defaults, as the ResponseChain is chainable, you can overwrite these locally if you need to.

In the `Form` varieties of the functions, Wretch [automatically converts your Javascript object body to an FormData object](https://github.com/elbywan/wretch#formdataformobject-object).

All functions contain an optional [Options](https://github.com/elbywan/wretch#optionsoptions-object-mixin-boolean--true) parameter, as well as an optional last [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) parameter.

The `Simple` category exposes the following functions:  
* `getJSON: (url: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `postJSON: (url: string, body: object, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `putJSON: (url: string, body: object, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `deleteJSON: (url: string, body: object, options?: WretcherOptions, controller?: AbortController) => ResponseChain`    
* `getForm: (url: string, body: object, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `postForm: (url: string, body: object, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `putForm: (url: string, body: object, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `deleteForm: (url: string, body: object, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  

The `AuthToken` category exposes the following functions:  
* `getJSONAuthToken: (url: string, authToken: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `postJSONAuthToken: (url: string, body: object, authToken: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `putJSONAuthToken: (url: string, body: object, authToken: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `deleteJSONAuthToken: (url: string, body: object, authToken: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `getFormAuthToken: (url: string, body: object, authToken: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `postFormAuthToken: (url: string, body: object, authToken: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `putFormAuthToken: (url: string, body: object, authToken: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `deleteFormAuthToken: (url: string, body: object, authToken: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  

The `JWT` category exposes the following functions:  
* `getJSONJwt: (url: string, jwt: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `postJSONJwt: (url: string, body: object, jwt: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `putJSONJwt: (url: string, body: object, jwt: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `deleteJSONJwt: (url: string, body: object, jwt: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `postFormJwt: (url: string, body: object, jwt: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `getFormJwt: (url: string, body: object, jwt: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `putFormJwt: (url: string, body: object, jwt: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  
* `deleteFormJwt: (url: string, body: object, jwt: string, options?: WretcherOptions, controller?: AbortController) => ResponseChain`  

If you need to build a really special snowflake, then you can get the `Wretch` object directly, by calling the `getWretch()` function.  
