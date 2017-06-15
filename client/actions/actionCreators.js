import { I18n } from 'react-redux-i18n';

// return request init action with options assignment, if any
const defaultOptions = {
    showLoader: true
};

export function requestInit(callback, options = defaultOptions) {
    const initRequestAction = {
        type: 'REQUEST_INIT',
        options
    };

    return (dispatch, getState) => {
        return Promise.resolve(dispatch(initRequestAction))
        .then(action => callback(dispatch, getState));
    };
}

// return shaped success action
export const getSuccessAction = (message = '') => {
    if (message) {
        return {
            type: REQUEST_SUCCESS,
            payload: {
                success: [{ message }]
            }
        };
    }

    return { type: REQUEST_SUCCESS };
};

// return shaped failure action
export const getFailureAction = (messages = []) => {
    if (messages) {
        return {
            type: REQUEST_FAILURE,
            payload: {
                error: messages
            }
        };
    }

    return { type: REQUEST_FAILURE };
};

// return fetch not found action
export const getNotFoundAction = (message = '') => {

    return {
        type: REQUEST_NOT_FOUND,
        payload: {
            info: [{ message }]
        }
    };
};

// return dismiss loader action
export function getDismissLoaderAction() {
    return {
        type: DISMISS_LOADER
    };
}
