import React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

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
  left: '17%',
};

const Basic = glamorous.div(basicStyles);
const TextInput = glamorous.textArea(TextContainer);
const ButtonMessageSubmit = glamorous.button(ButtonSubmit);

class CreateMessages extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: {
        message: ''
      },
      users: {
        username: ''
      }
    };
  }

  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      this.props.getUsers(id);
    }
  }

  render() {

    return (
      <div>
      <div>
        <form onSubmit={ e => {
          e.preventDefault();
          if (this.props.createMessages) {
            this.props.createMessages(this.state.messages);
          }
        }}>
          <Basic>
            UserName:
             <TextInput onChange={ e => {
               const messages = {message: e.target.value};
               this.setState({
                 messages: Object.assign(this.state.messages,messages)
               });
             }}/>
             <ButtonMessageSubmit>
             Submit
             </ButtonMessageSubmit>
          </Basic>

        </form>
      </div>
    </div>
    );
  }
}

export default CreateMessages;
