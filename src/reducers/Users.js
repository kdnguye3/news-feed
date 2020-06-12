const initialState = {
    user_dict: {},
};

const Users = (state = initialState, action) => {
    switch (action.type) {
        case "RECEIVE_USERS":
            return {
                ...state,
                user_dict: action.user_dict,
            };
        default:
            return state;
    }
};

export default Users;