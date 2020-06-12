import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios';

export const dispatchGetUsers = () => ({type: "REQUEST_USERS"});

function* getUsers() {
    try {
        const { data } = yield call(() => axios.get('https://jsonplaceholder.typicode.com/users'));
        var user_dict = data.reduce((acc, user) => {
            acc[user.id] = {...user};
            return acc;
        }, {});

        yield put({type: "RECEIVE_USERS", user_dict: user_dict});
    }
    catch (error) {
        console.log(error)
    }
}

export const userSagas = [
    takeLatest("REQUEST_USERS", getUsers),
];