import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const UserCard = ({user}) => {
  let navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/profile', {id: user.id});
  };

  return (
    <Card style={{width: '17rem', margin: '1rem'}}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {user.username}
        </Card.Subtitle>
        <Card.Text>
          {/* <strong>ID:</strong> {user.id} <br /> */}
          <strong>Email:</strong> {user.email} <br />
          <strong>Phone:</strong> {user.phone} <br />
          <strong>Website:</strong> {user.website} <br />
          <strong>Address:</strong> {user.address.suite}, {user.address.street},{' '}
          {user.address.city}, {user.address.zipcode} <br />
          <strong>Company:</strong> {user.company.name} <br />
          <strong>Catch Phrase:</strong> {user.company.catchPhrase}
        </Card.Text>
        <Button
          variant="primary"
          href="#"
          target="_blank"
          onClick={handleBtnClick}
        >
          View Profile
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
