import React from 'react';
import TodosCard from '../conponents/TodosCard';
import {Container, Row, Col} from 'react-bootstrap';
import {useGetTodosQuery} from '../slices/todosApiSlice';

function Todo() {
  const {data: todos, refetch, isLoading, error} = useGetTodosQuery();
  return (
    <div>
      <h1>Todos Section</h1>
      {isLoading ? (
        <h1>Please Wait</h1>
      ) : (
        <Container>
          <Row>
            {todos?.map((todo) => (
              <Col key={todo.id} sm={12} md={6} lg={4} xl={3}>
                <TodosCard todo={todo} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Todo;
