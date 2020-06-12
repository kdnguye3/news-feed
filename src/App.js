import React, { Component } from 'react';
import { connect } from "react-redux";
import { dispatchGetPosts } from "./actions/PostActions";
import { dispatchGetUsers } from "./actions/UserActions";
import Post from './components/Post'

class App extends Component {

  componentDidMount() {
      this.props.dispatchGetUsers();
      this.props.dispatchGetPosts();
  }

  render () {
    return (
        <div className="flex flex-col items-center justify-start mx-4">
            {
                this.props.posts.map((post) => {
                    return (
                        <Post post={post} key={post.id}/>
                    );
                })
            }
        </div>
    );

  }
}


const mapStateToProps = state => {
    return {
        posts: state.Posts.posts
    }
};

const mapDispatchToProps = {
    dispatchGetPosts,
    dispatchGetUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
