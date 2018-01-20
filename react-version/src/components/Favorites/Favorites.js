import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions  } from '../../redux/favorites';
import Post from '../Post';

class FavoritesComponent extends Component {
    render() {
      return (
            <div className="favorites">
                {
                  this.props.favorites.map(post => (
                    <Post
                        post={post}
                        key={post.id}
                        handleRemove={() => { this.props.deleteFavorite(post.id) }}
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
   actions
)(FavoritesComponent);

export default Favorites;
