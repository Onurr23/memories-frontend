import React, { useState, useEffect } from 'react';
import { Typography, Card, Button, Input, Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useStyles } from './Form.style';
import { createPost, updatePost } from '../../api';
import { Post, postActions } from '../../redux/PostSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const { Title } = Typography;

export const FormComponent = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const currentPost = useAppSelector((state) => state.posts.currentPost);
  const posts = useAppSelector((state) => state.posts.posts);
  const [postData, setPostData] = useState<Post>({
    creator: '',
    title: '',
    message: '',
    tags: [''],
    selectedFile: ''
  });

  useEffect(() => {
    currentPost &&
      setPostData(posts.find((post) => post._id === currentPost._id)!);
  }, [currentPost]);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(postActions.setLoading(true));
    if (currentPost) {
      await updatePost(currentPost, postData).then((response) =>
        dispatch(postActions.updatePost(response.data))
      );
    } else {
      await createPost(postData).then((response) =>
        dispatch(postActions.createPost(response.data))
      );
    }

    dispatch(postActions.setLoading(false));
  };

  const clear = () => {
    dispatch(postActions.setCurrentPost(null));
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: [''],
      selectedFile: ''
    });
  };

  return (
    <Card size="default" className={classes.paper}>
      <Title level={5}>{currentPost ? 'Editing' : 'Creating'} a Memory</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="on"
      >
        <Form.Item
          label="Creator"
          name="creator"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Tags (coma separated)"
          name="tags"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Upload>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
