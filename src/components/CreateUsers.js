import React from 'react';
import Link from 'next/link';
import glamorous from 'glamorous';

const basicStyles = {
  textAlign: 'left',
  backgroundColor: 'white',
  color: 'cornflowerblue',
  border: '1px solid lightblue',
  borderRight: 'none',
  borderBottom: 'none',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  transition: 'all 0.1s linear',
  margin: `3rem 0`,
  padding: `1rem 0.5rem`,
  position: 'absolute',
  bottom: 0
};

const hoverStyles = {
  ':hover': {
    color: 'white',
    backgroundColor: 'lightgray',
    borderColor: 'aqua',
    boxShadow: `-15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue`
  },
  '& code': {
    backgroundColor: 'linen'
  }
};

const Basic = glamorous.div(basicStyles);
const Combined = glamorous.div(basicStyles, hoverStyles)

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

      <Basic>
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
    </Basic>

    );
  }
}

export default CreateUsers;
