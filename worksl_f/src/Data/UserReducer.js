const initialState = {
    isLoggedIn: false,
    user: {},
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LOGIN':
            return {...state, user: action.payload, isLoggedIn: true}
        case 'LOGOUT':
            return {...state, isLoggedIn: false}
        default:
            return state
    }
}
