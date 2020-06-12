import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {dispatchAddComment} from "../actions/CommentActions"
import Comment from "./Comment";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComment: false,
            message: ""
        };
    }

    toggleComments = (e) => {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                showComment: !prevState.showComment
            }
        });
    };

    submitComment = (e) => {
        e.preventDefault();
        const {post} = this.props;
        const {message} = this.state;
        this.props.dispatchAddComment(post.id, message);
        this.setState({message: ""});

    };

    handleUpdateComment = (e) => {
        e.preventDefault();
        this.setState({message: e.target.value});
    };

    render() {
        const {post, user_dict} = this.props;
        const {showComment, message} = this.state;

        return (
            <div className="w-full md:w-1/2 bg-gray-100 rounded shadow my-4 p-4">

                <div className="italic">
                    {user_dict[post.userId].name}
                </div>
                <div className="font-semibold text-lg pb-2 mb-3 border-b-2 border-gray-300">
                    {post.title}
                </div>
                <div className="pb-2 mb-3 border-b-2 border-gray-300">
                    {post.body}
                </div>
                {
                    post.comments.length && (<Fragment>
                        <button className="text-blue-400" onClick={this.toggleComments}>
                            {this.state.showComment ? "Hide Comments" : "View Comments"}
                        </button>
                        {
                            showComment ? post.comments.map((comment,index) => (
                                <Fragment>
                                    <Comment key={comment.id || `${post.id}_${index}`} comment={comment}/>
                                </Fragment>
                            )) : null
                        }
                        {
                            showComment && <div className="pb-2 ml-8 my-3 text-sm">
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-2  focus:outline-none focus:shadow-outline break-words"
                                    placeholder="Write a comment..."
                                    value={message}
                                    onChange={this.handleUpdateComment}
                                />
                                <button
                                    disabled={!message}
                                    className="border rounded py-2 px-3 bg-blue-400  disabled:bg-blue-200 disabled:cursor-not-allowed"
                                    onClick={this.submitComment}
                                >
                                    Send Comment
                                </button>
                            </div>
                        }
                    </Fragment>)
                }
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        posts: state.Posts.posts,
        user_dict: state.Users.user_dict
    }
};

const mapDispatchToProps = {
    dispatchAddComment
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);