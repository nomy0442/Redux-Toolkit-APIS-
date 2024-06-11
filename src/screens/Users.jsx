import React from 'react';
import UserCard from '../conponents/UserCard';
import {Container, Row, Col} from 'react-bootstrap';
import {useGetUsersQuery} from '../slices/userApiSlice';

const Team = () => {
  const {data: users, refetch, isLoading, error} = useGetUsersQuery();

  return (
    <div>
      <h1>Our Users</h1>
      {isLoading ? (
        <h1>Please Wait</h1>
      ) : (
        <Container>
          <Row>
            {users?.map((user) => (
              <Col key={user.id} sm={12} md={6} lg={4} xl={3}>
                <UserCard user={user} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Team;
