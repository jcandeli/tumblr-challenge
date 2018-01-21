import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as tumblrActions } from '../../redux/tumblr';
import { actions as favoritesActions } from '../../redux/favorites';
import Post from '../Post';

class FavoritesComponent extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
    }

    handleRemoveFavorite(postId) {
        this.props.deleteFavorite(postId);
        this.props.postUnfavorited(postId);
    }

    render() {
        return (
            <div className="favorites">
                <h2>Favorites</h2>
                {
                    this.props.favorites.map(post => (
                        <Post
                            post={post}
                            key={post.id}
                            handleRemove={() => { this.handleRemoveFavorite(post.id) }}
                        />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = ({ favorites: { favorites } }) => ({ favorites });

FavoritesComponent.propTypes = {
    favorites: PropTypes.array
};

FavoritesComponent.defaultProps = {
    favorites: []
};

const Favorites = connect(
    mapStateToProps,
    { ...tumblrActions, ...favoritesActions }
)(FavoritesComponent);

export default Favorites;
