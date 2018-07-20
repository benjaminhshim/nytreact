import React from 'react';

import SavedItem from '../../components/SavedItem';

import API from "../../utils/API";

export default class SavedPage extends React.Component {
    state = {
        results: []
    }

    componentDidMount() {
        this.getSavedArticles();
    }

    getSavedArticles = () => {
        API.getArticles({})
        .then(res => this.setState({results: res.data}))
        .catch(err => console.log(err))
    }

    handleDeleteArticle = id => {
        console.log(id);

        // this.state.results.forEach(i => {
        //     if (id === i._id) {
                API.deleteArticle(id)
                .then(res => console.log('deleted'))
                .catch(err => console.log(err));
        //     }
        // })

    }

    render() {
        return (
            <div>
                <h1 className="mt-5">Saved Show Dates</h1>
                <div className="container">

                {this.state.results.map(i => (
                    <SavedItem 
                    title={i.title}
                    date={i.date}
                    url={i.url}
                    key={i._id}
                    id={i._id}
                    deleteArticle={this.handleDeleteArticle}
                    />
                ))}
                </div>
            </div>
        )
    }
}