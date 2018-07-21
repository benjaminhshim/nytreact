import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact';

class SavedItem extends React.Component {
  render() {
    return (
      <Card className="w-25 p-3 d-inline-block mx-2 my-2">
        <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.venue}</CardText>
            <CardText>{this.props.date}</CardText>
            <CardText><a href={this.props.url} target="_blank">More Info</a></CardText>

            <Button onClick={() => this.props.deleteArticle(this.props.id)}>Delete</Button>
        </CardBody>
    </Card>
    )
  }
}
export default SavedItem;