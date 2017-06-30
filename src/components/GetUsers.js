/*
  Get Users component will handle the async calls to the db and gather the
  user profile information. This component will work along side the authenticate
  data and allow users to round their own personal profiles out with unique
  personal traits
*/

import React from 'react';
import Link from 'next/link';
import styles from './stylesheets/createUserStyles';


class GetUsers extends React.Component {

// mount all required actions <> if statement used for turth value, testing
// for an undefined .
  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      this.props.getUsers(id);
      this.props.deleteUsers(id);
      this.props.loadUsers();
    }
  }
// team unicorn forever and always <> comment supplied by my wife,
// Gabrielle Aufiero. Pls contact me via github if you have any questions
// regarding team unicorn <> I'll save you some time, I don't know.
  render() {

    let userDivs = '';
    // as in get messages, map over the object of users and out put the data found
    // in each key value pair, storing the values in the local variable, userDivs
    userDivs = this.props.users.map((d,i) => {
      return (
        <styles.GetCombined key = {i}>
        <div>
          <div>

             {d.firstname} <br />
             {d.lastname} <br />
             {d.avatar} <br />
             {d.address} <br />
             {d.phonenumber} <br />
             {d.username} <br />
             {d.hobbies} <br />

             // remove the entire profile object from the page  
              <button onClick={() =>
                this.props.deleteUsers(`${d._id}`)}>
                REMOVE
              </button>
          </div>
          <p><Link href="/messages" >
          <a>Go To Message Page</a>
        </Link></p>
          </div>
        </styles.GetCombined>
      );
    });
    return (
  <div>
    {userDivs}
  </div>
    );
  }
}

export default GetUsers;
