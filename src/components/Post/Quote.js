import React from 'react';

export default (props) => (
    <div>
        <q>{props.post.text}</q>
        <div dangerouslySetInnerHTML={{ __html: props.post.source }} />
    </div>
);