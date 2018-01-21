import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/Post.css';

class Post extends Component {
    render() {
        const { post, handleAdd, handleRemove } = this.props;
    
        return (
            <div className="post margined-bottom padded">
                {
                    /*
                     * Text
                     */
                    (post.type === 'text') && <div dangerouslySetInnerHTML={{ __html: post.description }} />
                }
                {
                    /*
                     * Photos
                     */
                    (post.type === 'photo') && post.photos.map(
                        photo => (
                            <figure key={photo.original_size.url}>
                                <img src={photo.original_size.url} alt={photo.caption} />
                                <figcaption>{photo.caption}</figcaption>
                            </figure>
                        )
                    )
                }
                {
                    /*
                     * Quote
                     */
                    (post.type === 'quote') && (
                        <div>
                            <q>{post.text}</q>
                            <div dangerouslySetInnerHTML={{ __html: post.source }} />
                        </div>
                    )
                }
                {
                    /*
                     * Link
                     */
                    (post.type === 'link') && (
                        <div>
                            <h3>{post.title}</h3>
                            <a href={post.url} target="_blank" >{post.url}</a>
                            <div dangerouslySetInnerHTML={{ __html: post.description }} />
                            {
                                post.photos && post.photos.map(
                                    photo => (
                                        <figure key={photo.original_size.url}>
                                            <img src={photo.alt_sizes[1].url} alt={photo.caption} />
                                            <figcaption>{photo.caption}</figcaption>
                                        </figure>
                                    )
                                )
                            }
                        </div>
                    )
                }
                {
                    /*
                     * Video
                     */
                    (post.type === 'video') && (
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: post.caption }} />
                            <div dangerouslySetInnerHTML={{ __html: post.player[1].embed_code }} />
                        </div>
                    )
                }
                {
                    /*
                     * Answer
                     */
                    (post.type === 'answer') && (
                        <div>
                            <p>Q: <i><q>{post.question}</q></i></p>
                            <div dangerouslySetInnerHTML={{ __html: post.answer }} />
                        </div>
                    )
                }
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
