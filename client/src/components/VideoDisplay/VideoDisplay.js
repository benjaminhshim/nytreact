import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';
import VideoItem from '../VideoItem';

class FeaturesPage extends Component {
  state = {
    mainVideo: false
  }



  render() {
    return(
      <Container>
        <section className="my-5">
          <Row>
            

            <Col lg="5" className="text-center text-lg-left">
              <img  className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" />
              {/* <iframe src={this.props.videoResults[0].id.videoId}>
              </iframe> */}
            </Col>

            <Col lg="7" className="flex-row" style={{border: "1px solid red"}}>
                <Row className="mb-3" style={{border: "1px solid green"}}>

                {this.props.videoResults.map(i => (
                    <VideoItem 
                        src={i.id.videoId}
                        thumbnail={i.snippet.thumbnails.default.url}
                        video={i}
                        setMainVideo={this.props.setMainVideo}/>
                ))}
                </Row>
            </Col>

          </Row>
        </section>
      </Container>
    );
  };
}

export default FeaturesPage;