# ActoJS Ajax
Ajax, in lack of a better name, is a collection of handy Fetch abstractions, built on top of [Wretch](https://github.com/elbywan/wretch).  

Ajax is split into 3 categories:  
* Simple (no authorization)  
* AuthToken (Authtoken is appended to the end of the URI)  
* JWT (Sets Authorization header with a given JWT as the bearer)  

The `Simple` category is just a set of simple functions, abstracting away a bit of logic. 
These are also the functions returned from the `AuthToken` and `JWT` factories.
They all set an accept header with `application/json`.

As Ajax is built on top of Wretch, a Wretch Response is returned in favor of a regular Promise. 
A Wretch Response is chainable, just like a Promise, but there are a series of additional helper functions that you can use to further configure your request.  
For instance, you can chain a series of [Catchers](https://github.com/elbywan/wretch#catchers) which you then follow by a [Response Type](https://github.com/elbywan/wretch#response-types).  

The factories in Ajax automatically redirect to a given path (`pathOnUnauthorized`) when the response type of a request is an HTTP 401.
It does this by using the History object, which you pass to the `history` parameter. A typical use case for this, would be to redirect your users to the login page, when their session has expired.

In the `Form` varieties of the factories, Wretch [automatically converts your Javascript object body to an FormData object](https://github.com/elbywan/wretch#formdataformobject-object).

All functions contain an optional last [AbortController.signal](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal) parameter.

The `Simple` category exposes the following functions:  
* `getJSON(url: String, [signal: AbortController.signal])`  
* `postJSON(url: String, body: Object, [signal: AbortController.signal])`  
* `putJSON(url: String, body: Object, [signal: AbortController.signal])`  
* `deleteJSON(url: String, body: Object, [signal: AbortController.signal])`  
* `getForm(url: String, body: Object, [signal: AbortController.signal])`  
* `postForm(url: String, body: Object, [signal: AbortController.signal])`  
* `putForm(url: String, body: Object, [signal: AbortController.signal])`  
* `deleteForm(url: String, body: Object, [signal: AbortController.signal])`  

The `AuthToken` category exposes the following factories:  
* `getJSONAuthTokenFactory(history: History, authToken: String, pathOnUnauthorized: String)`  
* `postJSONAuthTokenFactory(history: History, authToken: String, pathOnUnauthorized: String)`  
* `putJSONAuthTokenFactory(history: History, authToken: String, pathOnUnauthorized: String)`  
* `deleteJSONAuthTokenFactory(history: History, authToken: String, pathOnUnauthorized: String)`  
* `getFormAuthTokenFactory(history: History, authToken: String, pathOnUnauthorized: String)`  
* `postFormAuthTokenFactory(history: History, authToken: String, pathOnUnauthorized: String)`  
* `putFormAuthTokenFactory(history: History, authToken: String, pathOnUnauthorized: String)`  
* `deleteFormAuthTokenFactory(history: History, authToken: String, pathOnUnauthorized: String)`  

The `JWT` category exposes the following factories:  
* `getJSONJwtFactory(history: History, jwt: String, pathOnUnauthorized: String)`  
* `postJSONJwtFactory(history: History, jwt: String, pathOnUnauthorized: String)`  
* `putJSONJwtFactory(history: History, jwt: String, pathOnUnauthorized: String)`  
* `deleteJSONJwtFactory(history: History, jwt: String, pathOnUnauthorized: String)`  
* `getFormJwtFactory(history: History, jwt: String, pathOnUnauthorized: String)`  
* `postFormJwtFactory(history: History, jwt: String, pathOnUnauthorized: String)`  
* `putFormJwtFactory(history: History, jwt: String, pathOnUnauthorized: String)`  
* `deleteFormJwtFactory(history: History, jwt: String, pathOnUnauthorized: String)`  
