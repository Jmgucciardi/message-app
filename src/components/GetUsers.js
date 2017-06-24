import React from 'react';
import glamorous from 'glamorous';


const TextContainer = {
  padding: '1px',
  border: '1px solid lightblue',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  backgroundColor: 'white',
  transition: 'boxShadow 0.3s, border 0.3s',
  borderstyle: 'solid',
  overflowY: 'auto',
  position: 'absolute',
  width: '825px',
  height: '350px',
  top: 10,
  right: '0%',
  left: '4%',
};

const UserDivStyles = {
  borderstyle: 'solid',
  overflow: 'auto',
  position: 'absolute',
  width: '500px',
  height: '250px',
  top: '150px',
  right: '10%',
  left: '60%',

};

// const TextStyles = glamorous.text(TextContainer);
const MessageDiv = glamorous.div(UserDivStyles);


class GetMessages extends React.Component {

  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      this.props.getUsers(id);
      this.props.deleteUsers(id);
      this.props.loadUsers();
    }
  }


  render() {
    this.props.loadUsers()
    let userDivs = '';
    userDivs = this.props.users.map((d,i) => {
      return (
        <div key = {i}>
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
                Remove
              </button>

          </div>
          </div>
      );
    });
    return (
  <MessageDiv>
    {userDivs}
  </MessageDiv>
    );
  }
}

export default GetMessages;
