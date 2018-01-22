import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import Photos from './Photos';
import Quote from './Quote';
import Link from './Link';
import Chat from './Chat';
import Video from './Video';
import Audio from './Audio';
import Answer from './Answer';

import './styles/Post.css';

class Post extends Component {
    getPostType(postType) {
        switch (postType) {
        case 'text':
            return Text;
        case 'photo':
            return Photos;
        case 'quote':
            return Quote;
        case 'link':
            return Link;
        case 'chat':
            return Chat;
        case 'video':
            return Video;
        case 'audio':
            return Audio;
        case 'answer':
            return Answer;
        default:
            return Text;
        }
    }

    render() {
        const { post, handleAdd, handleRemove } = this.props;
        const PostType = this.getPostType(post.type);
    
        return (
            <div className="post margined-bottom padded">
                <PostType post={post} />

                <div className="text-right">
                    {
                        handleAdd && (
                            <button
                                className="btn btn-primary"
                                onClick={handleAdd}
                                disabled={post.favorited}
                            >
                                Add
                            </button>
                        )
                    }
                    {
                        handleRemove && (
                            <button className="btn btn-warning" onClick={handleRemove}>
                                Remove
                            </button>
                        )
                    }
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object,
    handleAdd: PropTypes.func,
    handleRemove: PropTypes.func
};

Post.defaultProps = {
    post: {},
    handleAdd: null,
    handleRemove: null
};

export default Post;
