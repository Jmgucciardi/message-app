import React from 'react';
import Styles from './stylesheets/messageStyles';
import Link from 'next/link';

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
    const userTip = '* click on any message to remove';
    return (
    <div>
      <div>
        <form onSubmit={ e => {
          e.preventDefault();
          if (this.props.createMessages) {
            this.props.createMessages(this.state.messages);
          }
          console.log(this.state.message);
            const messages = {message: ''};
            this.setState({
              messages: Object.assign(this.state.messages,messages),
            });

        }}>
          <Styles.Basic>
          {userTip}
  <br/>Guest:
             <Styles.TextInput value= {this.state.message}

              onChange={ e => {
                const messages = {message: e.target.value};
                this.setState({
                  messages: Object.assign(this.state.messages,messages),
                });
              }}/>

             <Styles.ButtonMessageSubmit>
             Submit
             </Styles.ButtonMessageSubmit>
          </Styles.Basic>
          <Styles.Link>
          <Link href="/">
            <a>Back to home</a>
          </Link>
          </Styles.Link>
        </form >
      </div>
    </div>
    );
  }
}

export default CreateMessages;
