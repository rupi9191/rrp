import { api } from '../utils';
import { requestInit, getFetchAction, getSuccessAction, getNotFoundAction } from './actionCreators';


export function doRegister(filters, page = 1) {
    return requestInit(dispatch => {
        const { email } = filters;

        return api.post('/register', {
          email
        })
        .then(response => console.log(response));
    });
}
