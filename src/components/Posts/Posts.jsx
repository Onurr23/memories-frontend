import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post'
import useStyles from "./styles";
import { Grid, Typography,CircularProgress } from '@material-ui/core';

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state)=>state.posts.posts);
  const isLoading = useSelector((state)=>state.posts.isLoading);

  console.log(isLoading)

  const returnPosts=()=>{
    return(
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <>
    {isLoading ? <CircularProgress/>:returnPosts()}
    </>
  )
}

export default Posts