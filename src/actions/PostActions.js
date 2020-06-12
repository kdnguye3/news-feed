import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios';

export const dispatchGetPosts = () => ({type: "REQUEST_POSTS"});

function* getPosts() {
    try {
        const {data} = yield call(() => axios.get('https://jsonplaceholder.typicode.com/posts'));
        const comment_response = yield call(() => axios.get('https://jsonplaceholder.typicode.com/comments'));
        var post_dict = data.reduce((acc, post) => {
            acc[post.id] = {...post, comments: []};
            return acc;
        }, {});

        for (const comment of comment_response.data) {
            if (post_dict[comment.postId]) {
                post_dict[comment.postId].comments = [...post_dict[comment.postId].comments, {...comment}];
            }
        }

        var posts = Object.values(post_dict);
        yield put({type: "RECEIVE_POSTS", posts, post_dict});
    }
    catch (error) {
        console.log(error)
    }
}

export const postSagas = [
    takeLatest("REQUEST_POSTS", getPosts),
];