import React from 'react';

import SavedItem from '../../components/SavedItem';
import SavedVideo from '../../components/SavedVideo';

import API from "../../utils/API";

export default class SavedPage extends React.Component {
    state = {
        results: [],
        videoResults: []
    }

    componentDidMount() {
        this.getSavedArticles();
        this.getSavedVideos();
    }

    getSavedArticles = () => {
        API.getArticles({})
        .then(res => this.setState({results: res.data}))
        .catch(err => console.log(err))
    }

    getSavedVideos = () => {
        API.getVideos({})
        .then(res => {this.setState(
            {
                videoResults: res.data});
                console.log(res.data);

            }
            
        )
        .catch(err => console.log(err))
    }

    handleDeleteArticle = id => {
        console.log(id);

        // this.state.results.forEach(i => {
        //     if (id === i._id) {
                API.deleteArticle(id)
                .then(res => console.log('deleted article'))
                .catch(err => console.log(err));
        //     }
        // })

    }

    handleDeleteVideo = id => {
        console.log(id._id);

        // this.state.results.forEach(i => {
        //     if (id === i._id) {
                API.deleteVideo(id._id)
                .then(res => console.log('deleted video'))
                .catch(err => console.log(err));
        //     }
        // })

    }

    render() {
        return (
            <div>
                <h1 className="mt-5">Saved Videos</h1>
                <div className="container">
                    {this.state.videoResults.map(i => (
                        <SavedVideo 
                            src={i.url}
                            key={i._id}
                            title={i.title}
                            video={i}
                            deleteVideo={this.handleDeleteVideo}
                        />
                ))}
                </div>

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