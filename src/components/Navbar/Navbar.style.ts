import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    border: '1px solid black',
    backgroundColor: 'white'
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none'
  },
  image: {
    marginLeft: '15px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px'
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px'
  },
  userName: {
    display: 'flex',
    alignItems: 'center'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  purple: {
    color: '#8a2be2',
    backgroundColor: '#8a2be2'
  }
});
