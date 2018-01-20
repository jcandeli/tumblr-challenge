import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/Post.css';

class Post extends Component {
  render() {
    const { post, handleAdd, handleRemove } = this.props;

    return (
        <div className="post margined-bottom padded">
            <h3>{post.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.body }} />
            {
                handleAdd && (
                    <button className="btn btn-primary" onClick={handleAdd}>Add</button>
                )
            }
            {
                handleRemove && (
                    <button className="btn btn-primary" onClick={handleRemove}>Remove</button>
                )
            }
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

// TODO:
// disable button if already saved
// style correctly, max width, scroll?, float button on right