import React from 'react';
import glamorous from 'glamorous';
import Link from 'next/link';

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
  overflowY: 'auto',
  top: '15%',
  right: '0%',
  left: '50%',

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


const Combined = glamorous.div(basicStyles, hoverStyles);


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
        <Combined key = {i}>
        <div>
          <div>

             {d.firstname} <br />
             {d.lastname} <br />
             {d.avatar} <br />
             {d.address} <br />
             {d.phonenumber} <br />
             {d.username} <br />
             {d.hobbies} <br />

              <button onClick={() =>
                this.props.deleteUsers(`${d._id}`)}>
                REMOVE
              </button>
          </div>
          <p><Link href="/messages" >
          <a>Go To Message Page</a>
        </Link></p>
          </div>
        </Combined>
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
