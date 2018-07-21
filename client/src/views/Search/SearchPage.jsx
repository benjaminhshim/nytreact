import React from 'react';
import axios from 'axios';
import API from "../../utils/API";

import ResultItem from '../../components/ResultItem';
import VideoDisplay from '../../components/VideoDisplay';


import { Input, Button } from 'mdbreact';

export default class SearchPage extends React.Component {

    state = {
        results: [],
        topic: '',
        startYear: '',
        endYear: '',
        videoSrc: '',
        videoResults: [],
        selectedVideo: null
    }

    searchArticles = (topic, startYear, endYear) => {
        axios.get(`https://rest.bandsintown.com/artists/${topic}/events?app_id=codingbootcamp&date=${startYear}-01-01%2C${endYear}-12-31`)


        .then(res => {console.log(res); this.setState({results: res.data}); this.searchMusicVideo(res.data[0].lineup[0])})
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
            if (id === i.id) {
                API.saveArticle({
                    title: i.lineup[0],
                    date: i.datatime,
                    url: i.url,
                    id: i.id
                })
                .then(res => console.log('saved'))
                .catch(err => console.log(err));
            }
        })
    }

    handleSaveVideo = video => {
        console.log(video.id.videoId);

        this.state.videoResults.forEach(i => {

            if (video.id.videoId === i.id.videoId) {

                API.saveVideo({
                    title: i.snippet.title,
                    date: i.snippet.publishedAt,
                    url: i.id.videoId,
                })
                .then(res => console.log('saved'))
                .catch(err => console.log(err));
            }
        })
    }

    searchMusicVideo = (artist) => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${artist}&key=AIzaSyBtv3FuM4yag2Qpr17dHewi4EmhFzeWEy0&type=video`)
        // .then(res => this.setState({videoSrc: res.data.items[0].id.videoId}))
        .then(res => {
            this.setState({
                videoResults: res.data.items, 
                selectedVideo: res.data.items[0]
            }); 
            console.log(res.data.items)})
        .catch(err => console.log(err))
    }


    render() {
        // const src="https://www.youtube.com/embed/" + this.state.videoSrc;
        const newArr = [...this.state.results].slice(0, 10);

        return (
            <div>
                <h3 className="mt-5 mb-3">Search Artists</h3>

                <form onSubmit={this.handleSubmit}>
                    
                    <div className="row w-75" style={{margin: "0 auto"}}>

                        <div className="col-md-4">
                            <Input 
                                label="Artist" 
                                name='topic'
                                value={this.state.topic}
                                onChange={this.onInputChange}/>
                        </div>

                        <div className="col-md-4">
                            <Input 
                                label="Start Year" 
                                name='startYear'
                                value={this.state.startYear}
                                onChange={this.onInputChange}/>
                        </div>

                        <div className="col-md-4">
                            <Input 
                                label="End Year" 
                                name='endYear'
                                value={this.state.endYear}
                                onChange={this.onInputChange}/>
                        </div>

                    </div>
                    <Button color="elegant" type="submit">SEARCH</Button>
                </form >


                <h3 className="mt-5 mb-3">Music Videos</h3>
                
                <VideoDisplay 
                    videoResults={this.state.videoResults}
                    mainVideo={this.state.selectedVideo}
                    saveVideo={this.handleSaveVideo}
                    setMainVideo={selectedVideo => this.setState({selectedVideo})}/>
                

                <h3 className="mt-5 mb-3">Show Dates</h3>

                <div className="">
                {newArr.map(i => (
                    <ResultItem 
                        title={i.lineup[0]}
                        date={i.datetime}
                        url={i.url}
                        venue={i.venue.name}
                        key={i.id}
                        id={i.id}
                        saveArticle={this.handleSaveArticle}
                        />
                ))}
                </div>
            
            </div>
        )
    }
}