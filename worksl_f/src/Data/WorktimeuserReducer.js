const initialState = {
    worktimeuser: [],
}

export const WorktimeuserReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GETWT':
            return {...state, worktime: action.payload}
        default:
            return state
    }
}
