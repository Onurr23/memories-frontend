import React from 'react';
import { Col, Row } from 'antd';
import { Post } from './Post/Post';
import { useStyles } from './Posts.styles';
import { useAppSelector } from '../../redux/hooks';

export const Posts = () => {
  const classes = useStyles();
  const posts = useAppSelector((state) => state.posts.posts);
  console.log(posts);
  return (
    <Row className={classes.mainContainer}>
      {/* {posts?.map((post) => (
        <Col key={post._id} xs={12} sm={6} md={6}>
          <Post post={post} />
        </Col>
      ))} */}
    </Row>
  );
};
