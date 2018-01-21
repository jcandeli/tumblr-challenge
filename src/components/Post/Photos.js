import React from 'react';

export default (props) => (
    props.post.photos.map(
        photo => (
            <figure key={photo.original_size.url}>
                <img src={photo.original_size.url} alt={photo.caption} />
                <figcaption>{photo.caption}</figcaption>
            </figure>
        )
    )
);