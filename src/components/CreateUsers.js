import React from 'react';
import styles from './stylesheets/createUserStyles';
import Proptypes from 'prop-types';

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
             <input value = {this.state.lastNameFieldValue} placeholder = "Lastname..."
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
             <input value = {this.state.firstNameFieldValue} placeholder = "Firstname..."
              onChange={ e => {
                const users = {firstname: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  firstNameFieldValue: e.target.value
                });
              }}/>
            </p>
          </div>
        <div>
        <p>
             <input value = {this.state.avatarFieldValue} placeholder = "Avatar..."
              onChange={ e => {
                const users = {avatar: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  avatarFieldValue: e.target.value
                });
              }}/>
            </p>
          </div>
          <div>
          <p>
             <input value = {this.state.addressFieldValue} placeholder = "Address"
              onChange={ e => {
                const users = {address: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  addressFieldValue: e.target.value
                });
              }}/>
            </p>
          </div>
        <div>
        <p>
             <input value = {this.state.phoneNumberFieldValue} placeholder = "Phonenumber..."
              onChange={ e => {
                const users = {phonenumber: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  phoneNumberFieldValue: e.target.value
                });
              }}/>
            </p>
          </div>
          <div>
             <input value = {this.state.hobbiesFieldValue} placeholder = "Hobbies"
               onChange={ e => {
                 const users = {hobbies: e.target.value};
                 this.setState({
                   users: Object.assign(this.state.users,users),
                   hobbiesFieldValue: e.target.value
                 });
               }}/>
          </div>
        <div>
            <p>
             <input value = {this.state.userNameFieldValue} placeholder = "Username"
              onChange={ e => {
                const users = {username: e.target.value};
                this.setState({
                  users: Object.assign(this.state.users,users),
                  userNameFieldValue: e.target.value
                });
              }}/>
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

CreateUsers.propTypes = {
  createUsers: Proptypes.func.isRequired
};

export default CreateUsers;
