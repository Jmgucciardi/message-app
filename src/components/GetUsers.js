import React from 'react';
import Link from 'next/link';
import styles from './stylesheets/createUserStyles';
import PropTypes from 'prop-types';

class GetUsers extends React.Component {


  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      this.props.getUsers(id);
      this.props.deleteUsers(id);
      this.props.loadUsers();
    }
  }

  render() {
    this.props.loadUsers();
    let userDivs = '';

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
             {d.hobbies} <br />
             {d.username} <br />


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

GetUsers.propTypes = {
  getUsers: PropTypes.func.isRequired,
  deleteUsers: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  match: PropTypes.string.isRequired,
  users: PropTypes.string.isRequired
};

export default GetUsers;
