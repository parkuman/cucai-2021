import React from "react";
import styled from "styled-components";
import {Card, CardDeck, Carousel, Row} from 'react-bootstrap'

const CardDisplay = () => {
  return(
    <Carousel>
    <Carousel.Item>
    <Card>
  <Row>
  <Col>
  <Card.Img/>
  </Col>
  <Col>
  <Card.Body>

    <Card.Title>Happy Transformer</Card.Title>
    <Card.Text>
      “In summary, we published a library that allows NLP beginners to use state-of-the-art NLP models. This library went on to be used by experts from around the world. Our project demonstrates that even undergraduate students can create an impact within the AI community.”
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>

  </Card.Body>
  </Col>
   </Row>
</Card>
</Carousel.Item>
<Carousel.Item>
<Card>
<Row>
<Col>
<Card.Img/>
</Col>
<Col>
<Card.Body>

<Card.Title>Happy Transformer</Card.Title>
<Card.Text>
  “In summary, we published a library that allows NLP beginners to use state-of-the-art NLP models. This library went on to be used by experts from around the world. Our project demonstrates that even undergraduate students can create an impact within the AI community.”
</Card.Text>
<Button variant="primary">Go somewhere</Button>

</Card.Body>
</Col>
</Row>
</Card>
</Carousel.Item>
</Carousel>
);
}
export default CardDisplay;
