import React from 'react';
import MessageStyles from './stylesheets/messageStyles';

class CreateMessages extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: {
        message: ''
      },
      users: {
        username: ''
      },
    };
  }
  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      this.props.getUsers(id);
      this.props.loadUsers();
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
          <MessageStyles.Basic>
            Guest:
             <MessageStyles.TextInput onChange={ e => {
               const messages = {message: e.target.value};
               this.setState({
                 messages: Object.assign(this.state.messages,messages)
               });

             }}/>
             <MessageStyles.ButtonMessageSubmit>
             Submit
             </MessageStyles.ButtonMessageSubmit>
          </MessageStyles.Basic>
        </form>
      </div>
    </div>
    );
  }
}

export default CreateMessages;
