import { api } from '../utils';
import { requestInit, getFetchAction, getSuccessAction, getNotFoundAction } from './actionCreators';


export function doRegister(filters) {
    return requestInit(dispatch => {
        const { email, password, username, firstName, lastName, type } = filters;

        return api.post('/register', {
          email,
          password,
          username,
          firstName,
          lastName,
          type
        })
        .then(response => dispatch({type: 'USER_DETAILS', user: response.data}));
    });
}

export function doLogin(filters) {
    return requestInit(dispatch => {
        const { email, password } = filters;

        return api.post('/login', {
            email,
            password
        })
        .then(response => {
            dispatch({type: 'USER_DETAILS', user: response.data.user});
            return response.data;
        });
    });
}
