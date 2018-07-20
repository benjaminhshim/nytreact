import React from 'react';

const ResultItem = props => 
    <li>
        <p>{props.title}</p>
        <p>{props.date}</p>
        <p>{props.url}</p>
        <button onClick={() => props.saveArticle(props.id)}>Save</button>
    </li>

export default ResultItem;