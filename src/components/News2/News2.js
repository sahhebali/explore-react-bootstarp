import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News2 = (props) => {
    const {author,content, urlToImage} = props.news
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Text>
            {content}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default News2;