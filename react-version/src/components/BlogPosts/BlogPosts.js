import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as tumblrActions } from '../../redux/tumblr';
import { actions as favoritesActions } from '../../redux/favorites';
import Post from '../Post';

class BlogPostsComponent extends Component {
    render() {
      return (
            <div className="blog-posts">
                {
                  this.props.loading && <p>Loading ...</p>
                }
                {
                  this.props.posts.map(post => (
                    <Post
                        post={post}
                        key={post.id}
                        handleAdd={() => { this.props.saveFavorite(post) }}
                    />
                  ))
                }
            </div>
      );
    }
}

const mapStateToProps = ({ tumblr: { posts, loading } }) => ({ posts, loading });

BlogPostsComponent.propTypes = {
    posts: PropTypes.array,
    loading: PropTypes.bool
};

BlogPostsComponent.defaultProps = {
    posts: [],
    loading: PropTypes.bool
};

const BlogPosts = connect(
    mapStateToProps,
    { ...tumblrActions, ...favoritesActions }
)(BlogPostsComponent);

export default BlogPosts;
