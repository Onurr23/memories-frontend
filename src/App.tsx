import React, { useEffect, useState } from 'react';
import { Layout, Col, Row, Spin } from 'antd';
import { FormComponent } from './components/Form/Form';
import { Posts } from './components/Posts/Posts';
import { fetchPosts } from './api';
import { postActions } from './redux/PostSlice';
import './index.css';
import { Navbar } from './components/Navbar/Navbar';
import { useAppDispatch, useAppSelector } from './redux/hooks';

const { Content } = Layout;

export const App = () => {
  const dispatch = useAppDispatch();
  const updatedPost = useAppSelector((state) => state.posts.updatedPost);
  const deletedPost = useAppSelector((state) => state.posts.deletedPost);
  const [loading, setLoading] = useState(true);

  const getAllPosts = async () => {
    await fetchPosts()
      .then((response) => dispatch(postActions.getPosts(response.data)))
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    getAllPosts();
  }, [dispatch, updatedPost, deletedPost]);

  return (
    <Content>
      <Navbar />
      <Row>
        <Col xs={12} sm={7}>
          {loading ? <Spin /> : <Posts />}
        </Col>
        <Col xs={12} sm={4}>
          <FormComponent />
        </Col>
      </Row>
    </Content>
  );
};
