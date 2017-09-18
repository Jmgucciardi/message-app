import glamorous from 'glamorous';

const basicStyles = {
  textAlign: 'left',
  backgroundColor: 'white',
  color: 'cornflowerblue',
  border: '1px solid lightblue',
  borderRight: 'none',
  borderBottom: 'none',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  transition: 'all 0.1s linear',
  margin: `3rem 0`,
  padding: `1rem 0.5rem`,
  position: 'absolute',
  bottom: '30%'
};

const hoverStyles = {
  ':hover': {
    color: 'white',
    backgroundColor: 'lightgray',
    borderColor: 'aqua',
    boxShadow: `-15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue`
  },
  '& code': {
    backgroundColor: 'linen'
  }
};

const GetbasicStyles = {
  textAlign: 'left',
  backgroundColor: 'white',
  color: 'cornflowerblue',
  border: '1px solid lightblue',
  borderRight: 'none',
  borderBottom: 'none',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  transition: 'all 0.1s linear',
  margin: `3rem 0`,
  padding: `1rem 0.5rem`,
  position: 'absolute',
  overflowY: 'auto',
  top: '15%',
  right: '0%',
  left: '50%',
};

const avatarStyles = {
  textAlign: 'left',
  backgroundColor: 'white',
  color: 'cornflowerblue',
  border: '1px solid lightblue',
  borderRight: 'none',
  borderBottom: 'none',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  transition: 'all 0.1s linear',
  margin: '3rem 0',
  padding: '1rem 0.5rem',
  position: 'absolute',
  bottom: '50%',
  left: '22%'
};


const styles = {
  Basic: glamorous.div(basicStyles),
  Combined: glamorous.div(basicStyles, hoverStyles),
  GetCombined: glamorous.div(GetbasicStyles, hoverStyles),
  AvatarInput: glamorous.input(avatarStyles)
};

export default styles;
