import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CommentCard from '../conponents/CommentCard';
import {useGetCommentsQuery} from '../slices/commentsApiSlice';

const Comments = () => {
  const {
    data: comments,
    refetch: reGet,
    isLoading: load,
    error: commentsError,
  } = useGetCommentsQuery();
  return (
    <div>
      <h1>Comments...</h1>

      <Container>
        <Row>
          {comments?.map((comment) => (
            <Col key={comment.id} sm={12} md={6} lg={4} xl={3}>
              <CommentCard comment={comment} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Comments;
