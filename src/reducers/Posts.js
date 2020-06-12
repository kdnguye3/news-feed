const initialState = {
    posts: [],
    post_dict: {}
};

const Posts = (state = initialState, action) => {
    switch (action.type) {
        case "RECEIVE_POSTS":
            return {
                ...state,
                posts: action.posts,
                post_dict: action.post_dict
            };
        case "RECEIVE_ADD_COMMENT":
            var post_dict =  {
                ...state.post_dict,
                [action.postId] : {
                    ...state.post_dict[action.postId],
                    comments: [...state.post_dict[action.postId].comments, action.comment]
                }
            };
            var posts = Object.values(post_dict);
            return {
                ...state,
                post_dict: post_dict,
                posts: posts
            };
        default:
            return state;
    }
};

export default Posts;