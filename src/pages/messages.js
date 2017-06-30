/*
  Like any other application, with next.js developers can create components
  wrap the props of the component into a container and pass that containers
  onto the page to be rendered. again, wrapping the state and the store together
  with next redux wraper.
*/

import React from 'react';
// import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import CreateMessagesContainer from '../containers/CreateMessagesContainer';
import GetMessagesContainer from '../containers/GetMessagesContainer';
import {initStore} from '../store';



function messagesPage() {
  return (

    <div>
      <CreateMessagesContainer />
      <GetMessagesContainer/>
    </div>
  );
}

export default withRedux(initStore, null, null)(messagesPage);
