import React from 'react';

const SavedItem = props => 
    <li>
        <p>{props.title}</p>
        <p>{props.date}</p>
        <p>{props.url}</p>
        <button onClick={() => props.deleteArticle(props.id)}>Delete</button>
    </li>

export default SavedItem;