// initial state of reports
const initialState = {
    referrals: []
};

// export the state based on the action
const ReferralReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'FETCH_REFERRALS':
        return {...state, referrals: action.data}
    default:
        return state;
    }
};
export default ReferralReducer;
