const initialState = {
    company: [],
    companyedit: {},
}

export const CompanyReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GETCOMPANY':
            return {...state, company: action.payload}
            case 'COMPANYEDIT':
            return {...state, companyedit: action.payload}
            case 'COMPANYDEL':
            return {...state, company: state.company.filter(company => company.company_id !== action.payload)}
        default:
            return state
    }
}
