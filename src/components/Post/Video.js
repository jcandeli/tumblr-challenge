import React from 'react';

export default (props) => (
    <div>
        <div dangerouslySetInnerHTML={{ __html: props.post.caption }} />
        <div dangerouslySetInnerHTML={{ __html: props.post.player[1].embed_code }} />
    </div>
);