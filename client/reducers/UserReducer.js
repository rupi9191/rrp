// initial state of reports
const initialState = {
    user: {},
};

// export the state based on the action
const UserReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'USER_DETAILS':
        return {...state, user: action.user}
    default:
        return state;
    }
};
export default UserReducer;
