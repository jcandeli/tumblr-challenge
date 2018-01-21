import React from 'react';

export default (props) => {
    const { post } = props;
    return (
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
    );
};
