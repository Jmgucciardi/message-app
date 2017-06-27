import React from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import CreateUsersContainer from '../containers/CreateUsersContainer';
import GetUsersContainer from '../containers/GetUsersContainer';

import {initStore} from '../store';


function usersPage() {
  return (

    <div>

      <Link href="/">
        <a>Back to home</a>
      </Link>
      <CreateUsersContainer />
      <GetUsersContainer />

    </div>
  );
}

export default withRedux(initStore, null, null)(usersPage);
