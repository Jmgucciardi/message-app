import React from 'react';
import MessageStyles from './stylesheets/messageStyles';

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
        <MessageStyles.MessageDiv key = {i}>
          <div>
               {d.message}

          </div>
          </MessageStyles.MessageDiv>
      );
    });
    return (

  <MessageStyles.TextStyles>
    {userDivs}
  </MessageStyles.TextStyles>
    );
  }
}

export default GetMessages;
