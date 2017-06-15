/*****************************************************************
 * Redux Middlewares. Any new middlewares shold be putting here. *
 *****************************************************************/

import Alert from 'react-s-alert';
import { I18n } from 'react-redux-i18n';
import {
    REQUEST_FAILURE,
    REQUEST_SUCCESS,
    REQUEST_ERROR,
    REQUEST_NOTFOUND,
    REQUEST_TIMEOUT
} from './constants';

// request middleware for handling request based on the action type
export const requestMiddleware = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }

    const payload = action.payload || {};

    switch (action.type) {
    // handling failure of request
    case REQUEST_FAILURE:
        let error = payload.error || {};
        let errorMessages = [];

        if (Array.isArray(error)) {
            errorMessages = error;
        } else if (error.response && Array.isArray(error.response.data)) {
            errorMessages = error.response.data;
        // request timeout
        } else if (error.hasOwnProperty('code') && error.code === 'ECONNABORTED') {
            errorMessages.push({ code: REQUEST_TIMEOUT, message: 'message.requestTimeout' });
        // unknown when something went wrong
        } else {
            errorMessages.push({ code: REQUEST_ERROR, message: 'message.somethingWentWrong' });
        }

        Alert.error(handleContent(errorMessages));
        break;
    // handling not found of request
    case REQUEST_NOTFOUND:
        let info = payload.info || {};

        if (Array.isArray(info) && info.length) {
            Alert.info(handleContent(info));
        }
        break;
    // handling success of request
    case REQUEST_SUCCESS:
        let success = payload.success || [];

        if (Array.isArray(success) && success.length) {
            Alert.success(handleContent(success));
        }
        break;
    }

    return next(action);
};

// processing the messages from the response based on the context
const handleContent = (messages = []) => {
    const messagesHtml = ['<ul>'];

    messages.map(messageObj => {
        messagesHtml.push(`<li>`);

        // prefix with error code
        if (messageObj.hasOwnProperty('code')) {
            messagesHtml.push(`[${messageObj.code}] `);
        }

        // message translation handling
        messagesHtml.push(`${I18n.t(messageObj.message)}`);
        messagesHtml.push(`</li>`);
    });

    messagesHtml.push('</ul>');
    return messagesHtml.join('');
};
