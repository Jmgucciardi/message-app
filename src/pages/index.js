import React from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import { css } from 'glamor';

function indexPage() {
  css.global('html, body', {
    padding: '3rem 1rem',
    margin: 0,
    background: 'papayawhip',
    minHeight: '100%',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '24px'
  },
  );

  return (
    <div>
      <h1>Portfolio</h1>
      <p><Link href="/about">
      <a>About</a>
      </Link></p>
      <p>
      <a href="https://github.com/Jmgucciardi" target="_blank" onClick={event => {
        event.preventDefault();
        window.open('https://github.com/Jmgucciardi');}}>GitHub</a>

      </p>
        <p><Link href="/pets">
          <a>Pets</a>
        </Link></p>
          <p><Link href="/vehicles">
          <a>Vehicles</a>
        </Link></p>
        <p><Link href="/users">
        <a>Users</a>
      </Link></p>
      <p><Link href="/messages">
      <a>Messages</a>
    </Link></p>

    </div>
  );
}

export default withRedux(initStore, null, null)(indexPage);
