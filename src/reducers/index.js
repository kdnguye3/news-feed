import { combineReducers } from 'redux';
import Posts from './Posts'
import Users from './Users'

const AppReducers = combineReducers({
    Posts,
    Users
});

export default AppReducers;