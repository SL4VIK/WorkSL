const initialState = {
    users: [],
    useredit: {},
}

export const UsersReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GETUSERS':
            return {...state, users: action.payload}
            case 'USEREDIT':
            return {...state, useredit: action.payload}
            case 'USERDEL':
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        default:
            return state
    }
}
