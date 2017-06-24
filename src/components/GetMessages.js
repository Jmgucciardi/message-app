import React from 'react';
import glamorous from 'glamorous';


const TextContainer = {
  padding: '1px',
  border: '1px solid lightblue',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  backgroundColor: 'white',
  transition: 'boxShadow 0.3s, border 0.3s',
  borderstyle: 'solid',
  overflowY: 'auto',
  position: 'absolute',
  width: '825px',
  height: '350px',
  top: 10,
  right: '0%',
  left: '4%',
};

const UserDivStyles = {
  padding: '1px',
  border: '1px solid lightblue',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  backgroundColor: 'white',
  transition: 'boxShadow 0.3s, border 0.3s',

};

const TextStyles = glamorous.text(TextContainer);
const MessageDiv = glamorous.div(UserDivStyles);


class GetMessages extends React.Component {

  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      this.props.getMessages(id);
      this.props.deleteMessages(id);
      this.props.loadMessages();
    }
  }

  render() {
    this.props.loadMessages()
    let userDivs = '';
    userDivs = this.props.messages.map((d,i) => {
      return (
        <MessageDiv key = {i}>
          <div>
              UserName: {d.message}
            
          </div>
          </MessageDiv>
      );
    });
    return (
  <TextStyles>
    {userDivs}
  </TextStyles>
    );
  }
}

export default GetMessages;
