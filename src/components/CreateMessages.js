/*
  Create Message component will with call the create message action from ./actions
  This component will handle user input, in the form of text message within the
  designated input field.
*/

// import required frameworks and files
import React from 'react';
import Styles from './stylesheets/messageStyles';
import Link from 'next/link';

class CreateMessages extends React.Component {
  constructor() {
    super();
    // the only state needed on this page is the mesage itself
    this.state = {
      messages: {
        message: ''
      },
    };
  }
  render() {
    // message for the user that their messages are infact functional ButtonSubmit
    // which on click will remove the message
    const userTip = '* click on any message to remove';
    return (
    <div>
      <div>
      //onSubmit the form will commit the data added into the input field and
      // the state of message will change to the user supplied data.
        <form onSubmit={ e => {
          e.preventDefault();
          if (this.props.createMessages) {
            this.props.createMessages(this.state.messages);
          }
        }}>
          <Styles.Basic>
          // display the helpful message tag here!
          {userTip}
          // guest soon to be replaced with uder log in username credential
        <br/>Guest:
             <Styles.TextInput
             // see that the state message is changing in the input field and
             // 'onChange' update the state of the messages object
             // message (singluar) is the keyvalue in the messages object being
             // manipulated
                onChange={ e => {
                  const messages = {message: e.target.value};
                  this.setState({
                    messages: Object.assign(this.state.messages,messages),
                  });
                }}/>
                // Enter key works just as well as submit button
             <Styles.ButtonMessageSubmit>
             Submit
             </Styles.ButtonMessageSubmit>
          </Styles.Basic>
          <Styles.Link>
          // cool use of Link routing with next/Link, 
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
