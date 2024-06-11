import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PostCard from '../conponents/PostCard';
import {useGetPostsQuery} from '../slices/postApiSlice';

const Posts = () => {
  const {
    data: posts,
    refetch: refresh,
    isLoading: loading,
    error: postsError,
  } = useGetPostsQuery();

  return (
    <div>
      <h1>Posts ....</h1>

      <Container>
        <Row>
          {posts?.map((post) => (
            <Col key={post.it} sm={12} md={6} lg={4} xl={3}>
              <PostCard post={post} />
            </Col>
          ))}
          {console.log('Posts: ', posts)}
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
