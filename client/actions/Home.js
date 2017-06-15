import { api } from '../utils';
import { requestInit, getFetchAction, getSuccessAction, getNotFoundAction } from './actionCreators';


export function doFetchReferrals(filters) {
    return requestInit(dispatch => {
        const params = {...filters}

        return api.get('/api/referrals', {params})
        .then(response => dispatch({type: 'FETCH_REFERRALS', user: response.data}));
    });
}
