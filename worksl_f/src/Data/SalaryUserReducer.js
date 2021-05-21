const initialState = {
    salaryuser: [],
    salaryuseredit: {},
}

export const SalaryUserReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GETSALARYUSER':
            return {...state, salaryuser: action.payload}
            case 'SALARYUSEREDIT':
            return {...state, salaryuseredit: action.payload}
        default:
            return state
    }
}
