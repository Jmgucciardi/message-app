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
  margin: '3rem 0',
  padding: '1rem 0.5rem',
  position: 'center',
  top: '0%',
  left: '5%',
  fontSize: '40px'
};

const padding = {
  padding: '75px',
  display: 'inline',
  marginRight: '1em',
};

const header = {
  color: 'cornflowerblue',
  fontSize: '100px',
  textAlign: 'center'
};

const styles = {
  Basic: glamorous.div(basicStyles),
  Padding: glamorous.div(padding),
  Header: glamorous.h1(header)
};

export default styles;
