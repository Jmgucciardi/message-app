import React from 'react';
import Styles from './stylesheets/messageStyles';
import Link from 'next/link';

class CreateMessages extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      messages: {
        message: ''
      }
    };
  }

  render() {
    const userTip = '* click on any message to remove';
    return (
    <div>
      <div>

        <form onSubmit={ e => {
          e.preventDefault();
          this.setState({
            inputValue: ''
          });
          if (this.props.createMessages) {
            this.props.createMessages(this.state.messages);
          }

        }}>
          <Styles.Basic>

          {userTip}

        <br/>Guest:
             <Styles.TextInput className="messageInput" value = {this.state.inputValue}
                onChange={ e => {
                  const messages = {message: e.target.value};
                  this.setState({
                    messages: Object.assign(this.state.messages, messages),
                    inputValue: e.target.value
                  });
                }}/>

             <Styles.ButtonMessageSubmit className = "submitButton">
             Submit
             </Styles.ButtonMessageSubmit>
          </Styles.Basic>
          <Styles.Link>

          <Link className="RouteToHome" href="/">
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
