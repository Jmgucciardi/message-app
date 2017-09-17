import React from 'react';
import Styles from './stylesheets/messageStyles';

class GetMessages extends React.Component {


  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      this.props.getMessages(id);
      this.props.deleteMessages(id);
      this.props.loadMessages();
    }
  }

  render() {

    this.props.loadMessages();
    let userDivs = '';


    userDivs = this.props.messages.map((d,i) => {
      return (

        <div className="GenerateMessage"key = {i}>
          <div>
            <br/>
               <Styles.GetButton className="emoveeMessage" onClick={() =>
                 this.props.deleteMessages(`${d._id}`)}>
                 {d.message}
               </Styles.GetButton>
          </div>
        </div>
      );
    });
    return (

      <Styles.TextStyles className="ShowMessage">
        {userDivs}
      </Styles.TextStyles>

    );
  }
}

export default GetMessages;
