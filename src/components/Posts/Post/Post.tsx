import React from 'react';
import moment from 'moment';
import { Typography, Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { useStyles } from './Post.styles';
import { postActions } from '../../../redux/PostSlice';
import { deletePost, likePost } from '../../../api';
import { useAppDispatch } from '../../../redux/hooks';
import { PostProps } from './Post.type';

const { Title } = Typography;
const { Meta } = Card;

export const Post = ({ post }: PostProps) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const deleteFunc = async () => {
    dispatch(postActions.setLoading(true));
    await deletePost(post._id).then((response) => {
      dispatch(postActions.deletePost(response.data));
    });
    dispatch(postActions.setLoading(false));
  };

  const likeFunc = async () => {
    dispatch(postActions.setLoading(true));
    await likePost(post._id).then((response) => {
      dispatch(postActions.updatePost(response.data));
    });
    dispatch(postActions.setLoading(false));
  };

  return (
    <Card
      extra={<Title level={3}>{moment(post.createdAt).fromNow()}</Title>}
      className={classes.card}
      cover={
        <img
          className={classes.media}
          alt="example"
          src={
            post.selectedFile ||
            'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
          }
        />
      }
      actions={[
        <SettingOutlined key="setting" onClick={likeFunc} />,
        <EditOutlined
          key="edit"
          onClick={() => {
            dispatch(postActions.setCurrentPost(post._id));
          }}
        />,
        <EllipsisOutlined key="ellipsis" onClick={deleteFunc} />
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={post.title}
        description={post.message}
      />
    </Card>
  );
};
