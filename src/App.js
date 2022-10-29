import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./api";
import { postActions } from "./redux/PostSlice";
import "./index.css";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    dispatch(postActions.setLoading(true));
    await fetchPosts()
      .then((response) => dispatch(postActions.getPosts(response.data)))
      .catch((err) => console.log(err));
    dispatch(postActions.setLoading(false));
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
              <Posts />
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
