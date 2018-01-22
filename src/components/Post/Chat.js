import React from 'react';

export default (props) => (
    props.post.dialogue.map(chat => (
        <p>
            <strong>{chat.name}</strong>
            <br /><q>{chat.phrase}</q>
        </p>
    ))
);