import React, { Component } from 'react';
import { Container, Row, Col } from 'mdbreact';
import VideoItem from '../VideoItem';
import MainVideo from '../MainVideo';

class VideoDisplay extends Component {

  render() {
    return(
      <Container>
        <section className="my-5">
          <Row>
            
            <Col lg="8" className="text-center text-lg-left" style={{margin: "0 auto"}}>

              <MainVideo lg="5" 
                className="text-center" 
                mainVideo={this.props.mainVideo}
                saveVideo={this.props.saveVideo}/>

            </Col>

          </Row>

          <Row className="mb-3">

            {this.props.videoResults.map(i => (
                <VideoItem 
                    src={i.id.videoId}
                    key={i}
                    thumbnail={i.snippet.thumbnails.medium.url}
                    video={i}
                    setMainVideo={this.props.setMainVideo}/>
            ))}
          </Row>

        </section>
      </Container>
    );
  };
}

export default VideoDisplay;