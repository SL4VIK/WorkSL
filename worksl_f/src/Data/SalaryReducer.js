const initialState = {
    salary: [],
    salaryedit: {},
}

export const SalaryReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GETSALARY':
            return {...state, salary: action.payload}
            case 'SALARYEDIT':
            return {...state, salaryedit: action.payload}
            case 'SALARYDEL':
            return {...state, salary: state.salary.filter(salary => salary.salary_id !== action.payload)}
        default:
            return state
    }
}
