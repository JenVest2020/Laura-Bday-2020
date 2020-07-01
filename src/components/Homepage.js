import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroupItemHeading
} from 'reactstrap';
import imageDataCU from './imageDataCU';

const Homepage = () => {

    return (
        <>
            {imageDataCU.map((Object, index) => {
                <Card key={index}>
                    <CardImg top width="100%" src={Object.imageSrc} alt={Object.alt} />
                    <CardBody>
                        <CardTitle>{Object.name}</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            })}

        </>
    )
};

export default Homepage;