import axios from 'axios';
import queryString from 'query-string';
import dataset from 'dataset';
import moment from 'moment';

import { URLS, LOCALE_STORAGE_KEY, DEFAULT_LOCALE, INVALID_USER_CODE } from './constants/index';
import { getFailureAction } from './actions/actionCreators';
import store from './store';

/**
* ajax setup
* @return promise
*/
export const api = (function() {
    const instance = axios.create({
        timeout: 10000,
        headers: {
            'authorization': getLocalStorage('authorization')
        }
    });

    // global reject and catch error handler
    const dispatchReject = error =>
    Promise.reject(getFailureAction(error))
    .catch(errorMessage => store.dispatch(errorMessage));

    // intercept response before actual handling in invoked action creator
    // this to serve response/error handling across application
    instance.interceptors.response.use(response => {
        // for say, validation message(s)
        return response;
    }, error => {
          dispatchReject(error);
          return dispatchReject(error);
    });
    return instance;

}());

/**
 * Set the local storage value based on the name and value.
 *
 * @param {String} name       The local storage property name
 * @param {String} [value=''] The local storage property value to be set
 */
export const setLocalStorage = (name, value = '') => {
    return window.localStorage.setItem(name, value);
};

/**
 * Get the local storage value based on the name.
 *
 * @param  {String} name The local storage property name
 * @return {[type]}      The local storage valueter
 */
export function getLocalStorage(name) {
    return window.localStorage.getItem(name);
};
