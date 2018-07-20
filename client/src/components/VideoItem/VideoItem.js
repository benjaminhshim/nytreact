import React from 'react';
import { Col } from 'mdbreact';

class VideoItem extends React.Component {
    render() {
        return (

            <div 
                className="embed-responsive embed-responsive-16by9 w-25 mx-2 my-2 d-inline-block" 
                style={{margin: "0 auto"}}>
                <iframe 
                    className="embed-responsive-item" 
                    src={`https://www.youtube.com/embed/${this.props.src}`}
                    key={this.props.key}
                    ></iframe>
            </div>
        )
    }
}

export default VideoItem;