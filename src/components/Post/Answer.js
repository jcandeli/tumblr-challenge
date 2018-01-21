import React from 'react';

export default (props) => (
    <div>
        <p>Q: <i><q>{props.post.question}</q></i></p>
        <div dangerouslySetInnerHTML={{ __html: props.post.answer }} />
    </div>
);