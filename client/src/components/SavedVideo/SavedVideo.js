import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact';


class SavedVideo extends React.Component {
    render() {
        return (

            // <div 
            //     className=" my-2 d-inline-block" 
            //     style={{margin: "0 auto"}}>
            //     {/* <iframe 
            //         className="embed-responsive-item" 
            //         src={`https://www.youtube.com/embed/${this.props.src}`}
            //         key={this.props.key}
            //         onClick={() => this.setMainVideo(this.props.key)}
            //         ></iframe> */}
            //     {/* <img 
            //         src={this.props.thumbnail} 
            //         key={this.props.src}
            //         alt=""
            //         height="125"
            //         width="225"
            //         onClick={() => {this.props.deleteVideo(this.props.video)}}/> */}

                   
            // </div>

            <Card className="w-25 p-3 d-inline-block mx-2 my-2">
                <CardBody>
                    <CardTitle>
                        <iframe 
                            className="embed-responsive embed-responsive-item" 
                            src={`https://www.youtube.com/embed/${this.props.src}`}>
                        </iframe>
                    </CardTitle>
                    
                    <CardText>{this.props.title}</CardText>

                    <Button 
                    onClick={() => {this.props.deleteVideo(this.props.video)}}>Delete</Button>
                </CardBody>
            </Card>
        )
    }
}

export default SavedVideo;