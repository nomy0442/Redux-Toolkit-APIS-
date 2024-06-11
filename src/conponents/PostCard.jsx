import React from 'react';
import {Card} from 'react-bootstrap';

const PostCard = (props) => {
  return (
    <Card style={{width: '17rem', margin: '1rem'}}>
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.post.body}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
