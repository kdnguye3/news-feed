import React, {Component} from "react";

class Comment extends Component {
    render() {
        const {comment} = this.props;

        return (
            <div className="pb-2 ml-8 my-3 border-b-2 border-gray-300 text-sm">
                <div className="italic mb-1">
                    {comment.name}
                </div>
                {comment.body}
            </div>
        )
    }
}



export default Comment;