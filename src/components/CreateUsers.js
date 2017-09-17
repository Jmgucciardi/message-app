import React from 'react';
import styles from './stylesheets/createUserStyles';

class CreateUsers extends React.Component {
  constructor() {
    super();

    this.state = {
      lastNameFieldValue: '',
      firstNameFieldValue: '',
      avatarFieldValue: '',
      addressFieldValue: '',
      phoneNumberFieldValue: '',
      hobbiesFieldValue: '',
      userNameFieldValue: '',
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
      <styles.Basic>
      <div>
        <h1 className="ProfileHeader">Create Profile</h1>

        <form onSubmit={ e => {
          e.preventDefault();
          this.setState({
            lastNameFieldValue: '',
            firstNameFieldValue: '',
            avatarFieldValue: '',
            addressFieldValue: '',
            phoneNumberFieldValue: '',
            hobbiesFieldValue: '',
            userNameFieldValue: '',
          });
          if (this.props.createUsers) {
            this.props.createUsers(this.state.users);
          }
        }}>
          <div>
          <p>

            Lastname: <input value = {this.state.lastNameFieldValue}
              onChange={ e => {
                const users = {lastname: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  lastNameFieldValue: e.target.value
              });
            }}/>
            </p>
          </div>
          <div>
          <p>
            Firstname: <input value = {this.state.firstNameFieldValue}
              onChange={ e => {
                const users = {firstname: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  firstNameFieldValue: e.target.value
              });
            }} />
            </p>
          </div>
        <div>
        <p>
            Avatar: <input value = {this.state.avatarFieldValue}
              onChange={ e => {
                const users = {avatar: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  avatarFieldValue: e.target.value
              });
            }} />
            </p>
          </div>
          <div>
          <p>
            Address: <input value = {this.state.addressFieldValue}
              onChange={ e => {
                const users = {address: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  addressFieldValue: e.target.value
              });
            }} />
            </p>
          </div>
        <div>
        <p>
            Phonenumber: <input value = {this.state.phoneNumberFieldValue}
              onChange={ e => {
                const users = {phonenumber: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  phoneNumberFieldValue: e.target.value
              });
            }} />
            </p>
          </div>
          <div>
            Hobbies: <input value = {this.state.hobbiesFieldValue}
               onChange={ e => {
                const users = {hobbies: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  hobbiesFieldValue: e.target.value
              });
            }} />
          </div>
        <div>
            <p>
            Username: <input value = {this.state.userNameFieldValue}
              onChange={ e => {
                const users = {username: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  userNameFieldValue: e.target.value
              });
            }} />
            </p>
          </div>
          <button>
            Create
          </button>
        </form>
      </div>
    </styles.Basic>

    );
  }
}

export default CreateUsers;
