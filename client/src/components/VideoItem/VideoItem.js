import React from 'react';

class VideoItem extends React.Component {
    render() {
        return (

            <div 
                className="embed-responsive embed-responsive-16by9 w-25 mx-2 my-2 d-inline-block" 
                style={{margin: "0 auto"}}>
                {/* <iframe 
                    className="embed-responsive-item" 
                    src={`https://www.youtube.com/embed/${this.props.src}`}
                    key={this.props.key}
                    onClick={() => this.setMainVideo(this.props.key)}
                    ></iframe> */}
                <img 
                    src={this.props.thumbnail} 
                    key={this.props.src}
                    onClick={() => {this.props.setMainVideo(this.props.video)}}/>
            </div>
        )
    }
}

export default VideoItem;