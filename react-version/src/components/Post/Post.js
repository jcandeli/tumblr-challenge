import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/Post.css';

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
        <div className="post">
            <h3>{post.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
    );
  }
}

Post.propTypes = {
    post: PropTypes.object
};

Post.defaultProps = {
    post: {}
};

export default Post;

