import React from 'react';

export default (props) => (
    <div>
        <div dangerouslySetInnerHTML={{ __html: props.post.caption }} />
        <div dangerouslySetInnerHTML={{ __html: props.post.player }} />
    </div>
);