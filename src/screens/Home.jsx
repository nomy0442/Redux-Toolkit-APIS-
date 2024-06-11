import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import UserCard from '../conponents/UserCard';
import {useGetUsersQuery} from '../slices/userApiSlice';
import {useGetCommentsQuery} from '../slices/commentsApiSlice';
import {useGetPostsQuery} from '../slices/postApiSlice';
import PostCard from '../conponents/PostCard';
import CommentCard from '../conponents/CommentCard';

const Home = () => {
  const {data: users, refetch, isLoading, error} = useGetUsersQuery();
  const {
    data: posts,
    refetch: refresh,
    isLoading: loading,
    error: postsError,
  } = useGetPostsQuery();
  const {
    data: comments,
    refetch: reGet,
    isLoading: load,
    error: commentsError,
  } = useGetCommentsQuery();

  return (
    <div>
      {/* <div className="Users">
        {error?.status === 404 && <h1>Not found 404</h1>}
        {isLoading ? (
          <h1>loading....</h1>
        ) : (
          <div className="">
            <h1>Users Section</h1>
            <Container>
              <Row>
                {users?.map((user) => (
                  <Col key={user.id} sm={12} md={6} lg={4} xl={3}>
                    <UserCard user={user} />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}
      </div>
      <div className="">
        <h1>Posts Section</h1>
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
      <div className="">
        <h1>Comments Section</h1>
        <Container>
          <Row>
            {comments?.map((comment) => (
              <Col key={comment.id} sm={12} md={6} lg={4} xl={3}>
                <CommentCard comment={comment} />
              </Col>
            ))}
          </Row>
        </Container>
      </div> */}
    </div>
  );
};

export default Home;
