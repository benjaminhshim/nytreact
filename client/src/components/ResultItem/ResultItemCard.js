

import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class ResultImage extends React.Component {
  render() {
    return (
      <Card className="w-25 p-3 .d-inline-block">
        <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.date}</CardText>
            <CardText>{this.props.url}</CardText>
            <CardText>{this.props.venue}</CardText>

            <Button onClick={() => this.props.saveArticle(this.props.id)}>Save</Button>
        </CardBody>
    </Card>
    )
  }
}
export default ResultImage;