import React from 'react';
import {Button} from 'mdbreact';

const MainVideo = ({mainVideo, saveVideo}) => {
    if (!mainVideo ) {
        return <div style={{textAlign: "center"}}>Waiting...</div>
    }
    
    const videoId = mainVideo.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    console.log(videoId);

    return (
        <div className="video-detail mb-3" >
            <div className="embed-responsive embed-responsive-16by9 w-100 d-inline-block">
                <iframe 
                    className="embed-responsive-item" 
                    title="video"
                    src={url}/>
                <Button className="float-right" onClick={() => saveVideo(mainVideo)}>SAVE VIDEO</Button>
            </div>
        </div>
    )
};

export default MainVideo;