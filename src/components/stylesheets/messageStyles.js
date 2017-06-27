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
  bottom: 0
};

const TextContainer = {
  fontSize: '75%',
  padding: '1px',
  border: '1px solid lightblue',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  transition: 'boxShadow 0.3s, border 0.3s',
  width: '700px',
  height: '100px',
};

const ButtonSubmit = {
  position: 'absolute',
  bottom: '0%',
  right: '10%',
  left: '10%',
};

const MessageStyles = {
  Basic: glamorous.div(basicStyles),
  TextInput: glamorous.textArea(TextContainer),
  ButtonMessageSubmit: glamorous.button(ButtonSubmit)
};

export default MessageStyles;
