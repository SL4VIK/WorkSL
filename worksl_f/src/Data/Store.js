import {createStore} from 'redux';
import {UserReducer} from './UserReducer';
import {combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {UsersReducer} from './UsersReduser';
import {CompanyReducer} from './CompanyReduser';
import {WorktimeReducer} from './WorktimeReducer';
import {SalaryReducer} from './SalaryReducer';
import {WorktimeuserReducer} from './WorktimeuserReducer';
import {SalaryUserReducer} from './SalaryUserReducer';

export const rootReducer = combineReducers({
    userLog: UserReducer,
    users: UsersReducer,
    company: CompanyReducer,
    worktime: WorktimeReducer,
    salary: SalaryReducer,
    worktimeuser: WorktimeuserReducer,
    salaryuser: SalaryUserReducer,

});

export const store = createStore(rootReducer, composeWithDevTools());