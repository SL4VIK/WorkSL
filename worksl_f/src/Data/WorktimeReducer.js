const initialState = {
    worktime: [],
    worktimeedit: {},
}

export const WorktimeReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GETWORKTIME':
            return {...state, worktime: action.payload}
            case 'WORKTIMEEDIT':
            return {...state, worktimeedit: action.payload}
            case 'WORKTIMEDEL':
            return {...state, worktime: state.worktime.filter(worktime => worktime.worktime_id !== action.payload)}
        default:
            return state
    }
}
