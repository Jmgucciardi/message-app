import React from 'react';
import Link from 'next/link';

class CreateUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {
        lastname: '',
        firstname: '',
        avatar: '',
        address: '',
        phonenumber: '',
        hobbies: '',
        username: '',
        password: ''
      },
    };
  }

  render() {
    return (

      <div>
      <div>
        <h1>Create Profile</h1>
        <form onSubmit={ e => {
          e.preventDefault();
          if (this.props.createUsers) {
            this.props.createUsers(this.state.users);
          }
        }}>
          <div>
            Lastname: <input onChange={ e => {
              const users = {lastname: e.target.value};
              this.setState({
                users: Object.assign(this.state.users,users)
              });
            }}/>
          </div>
          <div>
            Firstname: <input onChange={ e => {
              const users = {firstname: e.target.value};
              this.setState({
                users: Object.assign(this.state.users,users)
              });
            }} />
          </div>
        <div>
            Avatar: <input onChange={ e => {
              const users = {avatar: e.target.value};
              this.setState({
                users: Object.assign(this.state.users,users)
              });
            }} />
          </div>
          <div>
            Address: <input onChange={ e => {
              const users = {address: e.target.value};
              this.setState({
                users: Object.assign(this.state.users,users)
              });
            }} />
          </div>
        <div>
            Phonenumber: <input onChange={ e => {
              const users = {phonenumber: e.target.value};
              this.setState({
                users: Object.assign(this.state.users,users)
              });
            }} />
          </div>
          <div>
            Hobbies: <input onChange={ e => {
              const users = {hobbies: e.target.value};
              this.setState({
                users: Object.assign(this.state.users,users)
              });
            }} />
          </div>
        <div>
            <p>Username: <input onChange={ e => {
              const users = {username: e.target.value};
              this.setState({
                users: Object.assign(this.state.users,users)
              });
            }} /></p>
          </div>
          <button>
            Create
          </button>
        </form>
      </div>
    </div>

    );
  }
}

export default CreateUsers;
