import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';
import VideoItem from '../VideoItem';

class FeaturesPage extends Component {
  render() {
    return(
      <Container>
        <section className="my-5">
          <Row>

            <Col lg="5" className="text-center text-lg-left">
              <img  className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" />
            </Col>

            <Col lg="7">
                <Row className="mb-3">
                {this.props.videoResults.map(i => (
                    <Col size="10">
                    <VideoItem 
                        src={i.id.videoId}/>
                        </Col>
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