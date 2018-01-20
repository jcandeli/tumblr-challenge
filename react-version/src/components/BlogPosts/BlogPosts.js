import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from '../../redux/tumblr';
import Post from '../Post';

class BlogPostsComponent extends Component {
  render() {
    return (
        <div className="blog-posts">
            {
                this.props.posts.map(post => (
                    <Post post={post} key={post.id} />
                ))
            }
        </div>
    );
  }
}

const mapStateToProps = ({ tumblr: { posts } }) => ({ posts });

BlogPostsComponent.propTypes = {
    posts: PropTypes.array
};

BlogPostsComponent.defaultProps = {
    posts: []
};

const BlogPosts = connect(
    mapStateToProps,
    actions
)(BlogPostsComponent);

export default BlogPosts;
