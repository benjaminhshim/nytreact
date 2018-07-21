import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact';

class ResultImage extends React.Component {
  render() {
    return (
      <Card className=" p-3 d-inline-block mx-2 my-2">
        <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.venue}</CardText>
            <CardText>{this.props.date}</CardText>
            <CardText><a href={this.props.url} target="_blank">More Info</a></CardText>

            <Button onClick={() => this.props.saveArticle(this.props.id)}>Save</Button>
        </CardBody>
    </Card>
    )
  }
}
export default ResultImage;


