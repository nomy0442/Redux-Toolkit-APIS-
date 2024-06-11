import React from 'react';
import {Card} from 'react-bootstrap';

const TodosCard = (props) => {
  return (
    <Card style={{width: '17rem', margin: '1rem'}}>
      <Card.Body>
        <Card.Title>{props.todo.title}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">
          {user.username}
        </Card.Subtitle> */}
      </Card.Body>
    </Card>
  );
};

export default TodosCard;
