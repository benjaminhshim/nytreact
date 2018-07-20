import React from 'react';
import axios from 'axios';
import API from "../../utils/API";

import ResultItem from '../../components/ResultItem';

export default class SearchPage extends React.Component {

    state = {
        results: [],
        topic: '',
        startYear: '',
        endYear: ''
    }

    componentDidMount() {
        this.searchArticles();
    }

    searchArticles = (topic, startYear, endYear) => {
        // axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?query=${topic}&begin_date=${startYear}0101&end_date=${endYear}0101&offset=1&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`)
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?query=drake&begin_date=20150101&end_date=20180101&offset=1&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`)
        .then(res => {console.log(res.data.response.docs); this.setState({results: res.data.response.docs})})
        .catch(err => console.log(err))
    }

    onInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })    
    }

    handleSubmit = event => {
        event.preventDefault();
        this.searchArticles(this.state.topic, this.state.startYear, this.state.endYear);
    }

    handleSaveArticle = id => {
        console.log(id);

        this.state.results.forEach(i => {
            if (id === i._id) {
                API.saveArticle({
                    title: i.headline.main,
                    date: i.pub_date,
                    url: i.web_url,
                    id: i._id
                })
                .then(res => console.log('saved'))
                .catch(err => console.log(err));
            }
        })

    }


    render() {
        return (
            <div>
                <h1>SearchPage</h1>
                <form 
                    onSubmit={this.handleSubmit}>
                    <div>
                        Topic
                        <input 
                            name='topic'
                            value={this.state.topic}
                            onChange={this.onInputChange}/>
                    </div>
                    <div>
                        Start Year
                        <input 
                            name='startYear'
                            value={this.state.startYear}
                            onChange={this.onInputChange}/>

                    </div>
                    <div>
                        End Year
                        <input 
                            name='endYear'
                            value={this.state.endYear}
                            onChange={this.onInputChange}/>

                    </div>
                    <button>Search</button>
                </form>

                {this.state.results.map(i => (
                    // <li key={i}>{i.headline.main}{i.pub_date}{i.url}</li>
                    <ResultItem 
                        title={i.headline.main}
                        date={i.pub_date}
                        url={i.web_url}
                        key={i._id}
                        id={i._id}
                        saveArticle={this.handleSaveArticle}
                        />
                ))}
                
            </div>
        )
    }
}