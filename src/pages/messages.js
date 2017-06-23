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
      < GetMessagesContainer/>
    </div>
  );
}

export default withRedux(initStore, null, null)(messagesPage);
