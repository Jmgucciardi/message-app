import React from 'react';


class GetMessages extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,

    };
  }

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

    let buttonText = "Hide";
    let userDivs = "";
    if (this.state.visible) {
      buttonText = "Hide";
      userDivs = this.props.messages.map((d,i) => {
        return (
          <div key={i}>
            <ul>
              <li> {d.message} </li>

              <button onClick={() =>
                this.props.deleteMessages(`${d._id}`)}>
                Remove
              </button>
            </ul>
          </div>
        );
      });
    } else {
      buttonText = "Show";
      userDivs = "";
    }
    return (
  <div className="messageContainer" id="MC"
      style={{
        borderstyle: 'solid',
        overflow: 'auto',
        position: 'absolute',
        width: '500px',
        height: '250px',
        top: '20px',
        right: '75%',
        left: '50%',
      }}>
    <button onClick={() => {
      this.setState({
        visible: !this.state.visible
      });
    }
    }>
      {buttonText}
    </button>
    {userDivs}
  </div>
    );
  }
}

export default GetMessages;
