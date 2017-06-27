import React from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
// import TopNavBar from './components/TopNavbar';
import Basic from '../components/stylesheets/indexStyles';

function indexPage() {
  return (
    <Basic>
      <h1>Welcome</h1>
      <p>
      <a href="https://github.com/Jmgucciardi/message-app" target="_blank" onClick={event => {
        event.preventDefault();
        window.open('https://github.com/Jmgucciardi/message-app');}}>GitHub</a>

      </p>
        <p><Link href="/createProfile">
        <a>Create Profile</a>
      </Link></p>
      <p><Link href="/messages">
      <a>Messages</a>
    </Link></p>

    </Basic>
  );
}

export default withRedux(initStore, null, null)(indexPage);
