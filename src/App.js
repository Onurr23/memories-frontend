import React, { useEffect, useState } from 'react';
import {
  Container,
  AppBar,
  Typography,
  Grid,
  Grow,
  CircularProgress,
} from '@material-ui/core';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './api';
import { postActions } from './redux/PostSlice';
import './index.css';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const updatedPost = useSelector((state) => state.posts.updatedPost);
  const deletedPost = useSelector((state) => state.posts.deletedPost);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts();
  }, [dispatch, updatedPost, deletedPost]);

  const getAllPosts = async () => {
    await fetchPosts()
      .then((response) => dispatch(postActions.getPosts(response.data)))
      .catch((err) => console.log(err));
    setLoading(false);
  };

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              {loading ? <CircularProgress /> : <Posts />}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
