/*
  Get Users will make an async call to the db and grab the requested data,
  sort the data on the page to be displayed, as of right now, it is used as
  a confirmation tool for the user to be sure the data is correct
*/

import React from 'react';
import Styles from './stylesheets/messageStyles';

class GetMessages extends React.Component {

// all actions this page will be using are mounted here
// if statement with truthy value making sure no calls are made to the db when
// no data is in the field.
  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      this.props.getMessages(id);
      this.props.deleteMessages(id);
      this.props.loadMessages();
    }
  }

  render() {
    // on render, load all the messages that have been sent during the session
    // without this call, messages will not appear if the page is redirected
    this.props.loadMessages();
    let userDivs = '';

    // map over the messages array and assin that value to the local variable
    // userDivs
    userDivs = this.props.messages.map((d,i) => {
      return (
        // return the message found within the array, turn this data into a Button
        // add the delete functionality to the button allowing the user to select
        // any message on the page and remove it. This is done server side.
        <div key = {i}>
          <div>
            <br/>
               <Styles.GetButton onClick={() =>
                 this.props.deleteMessages(`${d._id}`)}>
                 {d.message}
               </Styles.GetButton>
          </div>
        </div>
      );
    });
    return (
      // display the actual messages here within its own container,
      <Styles.TextStyles>
        {userDivs}
      </Styles.TextStyles>

    );
  }
}

export default GetMessages;
