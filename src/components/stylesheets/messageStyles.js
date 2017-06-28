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
  margin: `5rem 0`,
  padding: `1rem 0.5rem`,
  position: 'absolute',
  bottom: 0,
  left: '10%'
};

const TextContainer = {
  fontSize: '100%',
  padding: '5px',
  border: '1px solid lightblue',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  transition: 'boxShadow 0.3s, border 0.3s',
  width: '700px',
  height: '50px',
};

const ButtonSubmit = {
  position: 'absolute',
  bottom: '0%',
  right: '10%',
  left: '10%',
};

const OutputContainer = {
  padding: '1px',
  border: '1px solid lightblue',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  backgroundColor: 'white',
  transition: 'boxShadow 0.3s, border 0.3s',
  borderstyle: 'solid',
  overflowY: 'auto',
  oveflowWrap: 'breakWord',
  flex: 0.8,
  position: 'absolute',
  width: '825px',
  height: '350px',
  top: 10,
  right: '0%',
  left: '10%',
};

const UserDivStyles = {
  padding: '1px',
  border: '1px solid lightblue',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  backgroundColor: 'white',
  transition: 'boxShadow 0.3s, border 0.3s',
  overfloWrap: 'breakWord',
  wordWrap: 'breakWord',
  hyphens: 'auto'

};

const HomeLink = {
  position: 'absolute',
  bottom: '2%',
  right: '50%',

};

const MessageStyles = {
  Basic: glamorous.div(basicStyles),
  TextInput: glamorous.input(TextContainer),
  ButtonMessageSubmit: glamorous.button(ButtonSubmit),
  MessageDiv: glamorous.div(UserDivStyles),
  TextStyles: glamorous.text(OutputContainer),
  Link: glamorous.div(HomeLink)
};

export default MessageStyles;
