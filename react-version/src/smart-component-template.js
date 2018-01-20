import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/photos';

export class GalleryComponent extends Component {
    render() {
        return (
        );
    }
}

const mapStateToProps = () => ();

GalleryComponent.propTypes = {
};

GalleryComponent.defaultProps = {
};

const Gallery = connect(
    mapStateToProps,
    actions
)(GalleryComponent);

export default Gallery;