import * as constants from './index';
import {
    FETCH_PUBLISHERS_BANKS,
    FETCH_PUBLISHER_BANK_HISTORY,
    FETCH_PUBLISHER_BANK_INFO,
    PUBLISHER_BANK_VERIFICATION
} from './actionTypes';

// product sharing action types and endpoints
export const publisher = Object.freeze({
    getBanks: {
        url: '/gap-operator-ui/data/bankDetails.json',
        actionType: FETCH_PUBLISHERS_BANKS,
        successMessage: undefined,
        notFoundMessage: undefined
    },
    getBankHistory: {
        url: '/gap-operator-ui/data/history.json',
        actionType: FETCH_PUBLISHER_BANK_HISTORY,
        successMessage: undefined,
        notFoundMessage: undefined
    },
    getBankInfo: {
        url: '/gap-operator-ui/data/bankReview.json',
        actionType: FETCH_PUBLISHER_BANK_INFO,
        successMessage: undefined,
        notFoundMessage: undefined
    },
    bankVerification: {
        url: '/gap-operator-ui/data/bankVerification.json',
        actionType: PUBLISHER_BANK_VERIFICATION,
        successMessage: undefined,
        notFoundMessage: undefined
    }
});
