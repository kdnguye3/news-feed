import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AppReducers from './reducers/index';
import { commentSagas } from './actions/CommentActions';
import { postSagas } from './actions/PostActions';
import { userSagas } from './actions/UserActions';
import { all } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    AppReducers,
    applyMiddleware(sagaMiddleware)
);

function* rootSaga() {
    yield all([
        ...commentSagas,
        ...userSagas,
        ...postSagas

    ])
}

sagaMiddleware.run(rootSaga);

export default store;