import React from 'react';
import { Typography, Layout, Button } from 'antd';
import memories from '../../images/memories.png';
import { useStyles } from './Navbar.style';

const { Title } = Typography;
const { Header } = Layout;

export const Navbar = () => {
  const classes = useStyles();

  // const user = null;

  return (
    <Header className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Title
          // component={Link}
          // to="/"
          className={classes.heading}
          level={2}
        >
          Memories
        </Title>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
      <div className={classes.toolbar}>
        {/* {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Title className={classes.userName} level={5}>
              {user.result?.name}
            </Title>
            <Button color="secondary">Logout</Button>
          </div>
        ) : (
          <Button color="secondary">Login</Button>
        )} */}
        <Button color="secondary">Login</Button>
      </div>
    </Header>
  );
};
