import React from 'react';

export default (props) => (
    <div dangerouslySetInnerHTML={{ __html: props.post.body }} />
);