import React from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
// import TopNavBar from './components/TopNavbar';
import styles from '../components/stylesheets/indexStyles';

function indexPage() {
  return (
    <div>
      <styles.Header>React</styles.Header>
        <styles.Basic>
          <styles.Padding>

          <a href="https://github.com/Jmgucciardi/message-app"
            target="_blank" onClick={event => {
            event.preventDefault();
            window.open('https://github.com/Jmgucciardi/message-app');
            }}>
            GitHub </a>
          </styles.Padding>

          <styles.Padding>
          <Link href="/createProfile">
            <a> Create Profile </a>
          </Link>
          </styles.Padding>

          <styles.Padding>
          <Link href="/messages">
          <a> Messages </a>
          </Link>
          </styles.Padding>
          
        </styles.Basic>
    </div>
  );
}

export default withRedux(initStore, null, null)(indexPage);
