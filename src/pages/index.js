/*
  Intro: who am I and my path to aca
  Problem I decided to tackle with this project (inspiration)
  Showoff the project itself (chalenges overcome)
  conclusion, where will it go
*/

/*
 * by using nextjs we are able to wrap the state and the store together on the page
 * this makes routing and the state much easier to manage. Simply create your store
 * (See store.js for simple example here) and pass the store onto each page as a
 * component, {initStore},. Using next-redux-wrapper allows us to package the state,
 * the store (I.E the actions) on a page by page bases rather than in one location
 * such as index.js, containing appContainer containing app.js. With Redux-wrapper
 * you pass three values, the store, and the props. Props is usually handled in
 * your components and wrapped in containers, but it is possible to pass actions
 * here and pass those props through the wrapper . If no props are being passed
 * assign the values null to the remaining two arguments.
 */

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
          // this link will open a new tab for the user, redirecting them to the
          // github page for this application
          //Links are easy and clean with next/link, 
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
          <Link href="/SignUpSignin">
            <a> Signup / Signin </a>
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
