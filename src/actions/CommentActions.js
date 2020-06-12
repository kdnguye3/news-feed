import {put, takeLatest} from 'redux-saga/effects'

export const dispatchAddComment = (post_id, message) => ({type: "REQUEST_ADD_COMMENT", post_id, message});

function* addComment({post_id, message}) {
    try {
        yield put({type: "RECEIVE_ADD_COMMENT", postId: post_id, comment : {
            postId: post_id,
            name: "Kevin Nguyen",
            body: message
        }});
    }
    catch (error) {
        console.log(error)
    }
}

export const commentSagas = [
    takeLatest("REQUEST_ADD_COMMENT", addComment),
];