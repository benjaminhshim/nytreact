import React from 'react';
import API from '../../utils/API';


export default class ResultsPage extends React.Component {
    state = {
        articles: [],
        title: '',
        date: '',
        url: ''
    };

    

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
        .then(res => 
            this.setState({
                articles: res.data,
                title: '',
                data: '',
                url: ''
            }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>ResultsPage</h1>
                <div>{this.state.articles}</div>
            </div>
        )
    }
}