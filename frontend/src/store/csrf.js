import Cookies from 'js-cookie';

export async function csrfFetch(url, options = {}) {
    //if no method, set to GET method
    options.method = options.method || 'GET';
    //set headers to empty object if no header
    options.headers = options.headers || {};


    // if the method is not GET then set Content-Type to application/json
    //and set XSRF-TOKEN header to value of XSRF-TOKEN cookie
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
            options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }
    // default window fetch call, url and options passed in
    const res = await window.fetch(url, options);

    // if code is 400 or above, throw an error for the response

    if (res.status >= 400) throw res;

    //if under 400, return response
    return res;
}

// the follwoing should only be used in development
export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
}
