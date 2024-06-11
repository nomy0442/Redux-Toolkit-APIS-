import React from 'react';
import {Card} from 'react-bootstrap';

const CommentCard = (props) => {
  return (
    <Card style={{width: '17rem', margin: '1rem'}}>
      <Card.Body>
        <Card.Title>{props.comment.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.comment.email}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {props.comment.body}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default CommentCard;
